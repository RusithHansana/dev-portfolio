import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

/** Allowlist covering standard GitHub README elements */
const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    // Headings & structure
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', 'div', 'span', 'br', 'hr', 'section',
    // Inline formatting
    'a', 'strong', 'b', 'em', 'i', 'u', 's', 'del', 'ins', 'mark', 'sub', 'sup', 'small',
    // Lists
    'ul', 'ol', 'li',
    // Code
    'pre', 'code',
    // Media
    'img', 'picture', 'source', 'video',
    // Tables
    'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'colgroup', 'col',
    // Blockquote & details
    'blockquote', 'details', 'summary',
    // Definition lists
    'dl', 'dt', 'dd',
    // Misc
    'abbr', 'kbd', 'var', 'samp', 'figure', 'figcaption',
  ],
  allowedAttributes: {
    '*': ['id', 'class', 'align', 'dir', 'lang'],
    'a': ['href', 'target', 'rel', 'title'],
    'img': ['src', 'alt', 'title', 'width', 'height', 'loading'],
    'video': ['src', 'controls', 'width', 'height', 'poster', 'preload'],
    'source': ['src', 'type'],
    'td': ['colspan', 'rowspan'],
    'th': ['colspan', 'rowspan', 'scope'],
    'col': ['span'],
    'colgroup': ['span'],
    'ol': ['start', 'type'],
    'code': ['class'],   // e.g. class="language-js" for syntax highlighting
    'pre': ['class'],
    'details': ['open'],
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  // Strip everything else (scripts, iframes, event handlers, javascript: URIs)
};

/**
 * Extracts specific sections from a README markdown string.
 * Target sections: Overview, Features, Demo, Architecture, Tech Stack.
 */
function extractPortfolioSections(markdown: string): string {
  const targetSections = ["Overview", "Features", "Demo", "Architecture", "Tech Stack"];
  const targetSlugs = targetSections.map(s => s.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-'));
  
  const lines = markdown.split(/\r?\n/);
  let result = "";
  let isCapturing = true; // Start by capturing "top content" (logo, badges, etc.)
  let currentHeaderLevel = 0;
  let firstHeaderEncountered = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    const headerMatch = trimmedLine.match(/^(#{1,6})\s+(.*)$/);

    if (headerMatch) {
      const level = headerMatch[1].length;
      const title = headerMatch[2].replace(/[^\w\s]/g, '').trim().toLowerCase();
      
      const isTarget = targetSections.some(ts => ts.toLowerCase() === title);

      if (isTarget) {
        isCapturing = true;
        currentHeaderLevel = level;
      } else if (!firstHeaderEncountered) {
        // Keep the first header even if it's not a target (likely project title)
        isCapturing = true;
        currentHeaderLevel = level;
      } else if (level <= currentHeaderLevel) {
        // Stop capturing if we hit a new header that isn't a target and isn't a sub-header
        isCapturing = false;
      }
      
      firstHeaderEncountered = true;
      if (isCapturing) result += line + "\n";
    } else if (isCapturing) {
      // Filter links in "top content" or anywhere we are capturing
      // 1. Handle Markdown links: [Text](#anchor)
      let filteredLine = line.replace(/\[([^\]]*)\]\((#[^\)]+)\)/g, (match, text, anchor) => {
        const slug = anchor.substring(1).toLowerCase();
        if (targetSlugs.includes(slug)) return match;
        return ""; // Remove link if anchor is not a target
      });

      // 2. Handle HTML links: <a href="#anchor">Text</a>
      filteredLine = filteredLine.replace(/<a\s+[^>]*href=(["'])(#[^"']+)\1[^>]*>([\s\S]*?)<\/a>/gi, (match, quote, anchor, text) => {
        const slug = anchor.substring(1).toLowerCase();
        if (targetSlugs.includes(slug)) return match;
        return ""; // Remove link if anchor is not a target
      });

      // Simple cleanup of leftover separators from nav bars (e.g. "Link1 |  | Link3" or "Link1 • Link2")
      filteredLine = filteredLine
        .replace(/[|·•]\s*(?=[|·•\s]*$)/g, '') // Remove trailing separators
        .replace(/^\s*[|·•]\s*/, '')           // Remove leading separators
        .replace(/[|·•]\s*(?=[|·•])/g, '')      // Remove empty segments
        .trim();
      
      // If the line became just whitespace/separators after filtering, skip it
      if (line.trim() !== "" && (filteredLine === "" || /^[|·•\s]+$/.test(filteredLine))) continue;
      
      result += filteredLine + "\n";
    }
  }

  return result.trim();
}

// Configure marked for mermaid support
marked.use({
  renderer: {
    code({ text, lang }: { text: string; lang?: string }) {
      if (lang === 'mermaid') {
        return `<pre class="mermaid">${text}</pre>`;
      }
      return false; // use default
    }
  }
});

export function parseMarkdown(raw: string, downloadUrl?: string): string {
  if (!raw || typeof raw !== 'string') return "";

  // Convert github blob image URLs to raw URLs so they render properly
  let filteredRaw = extractPortfolioSections(raw);
  let processedRaw = filteredRaw;

  // Resolve relative asset paths if a downloadUrl is provided
  if (downloadUrl) {
    // The downloadUrl is typically https://raw.githubusercontent.com/owner/repo/branch/README.md
    // We want the base directory: https://raw.githubusercontent.com/owner/repo/branch/
    const assetBaseUrl = downloadUrl.substring(0, downloadUrl.lastIndexOf('/') + 1);
    
    // 1. Fix Markdown links/images: [text](relative/path) -> [text](https://.../relative/path)
    // Negative lookahead for http, /, #, mailto
    processedRaw = processedRaw.replace(/(!?\[[^\]]*\]\()((?!https?:\/\/|\/|#|mailto:)[^)]+)(\))/gi, (match, prefix, path, suffix) => {
      return `${prefix}${assetBaseUrl}${path}${suffix}`;
    });

    // 2. Fix HTML src/href attributes: src="relative/path" -> src="https://.../relative/path"
    processedRaw = processedRaw.replace(/(src|href)=(["'])((?!https?:\/\/|\/|#|mailto:)[^"']+)\2/gi, (match, attr, quote, path) => {
      return `${attr}=${quote}${assetBaseUrl}${path}${quote}`;
    });
  }
  
  // Also convert existing github blob image URLs to raw URLs (for manually linked assets)
  processedRaw = processedRaw.replace(
    /https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/([^"'\s)>]+)/g,
    'https://raw.githubusercontent.com/$1/$2/$3/$4'
  );

  let html = marked.parse(processedRaw, { async: false }) as string;

  // Add IDs to headings for anchor links (e.g. href="#features" maps to id="features")
  const seenIds = new Set<string>();
  html = html.replace(/<h([1-6])(.*?)>(.*?)<\/h\1>/g, (match, level, attributes, content) => {
    if (attributes.includes('id=')) return match; // Already has an ID
    const textContent = content.replace(/<[^>]+>/g, '');
    let id = textContent.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
    
    if (seenIds.has(id)) {
      let counter = 1;
      while (seenIds.has(`${id}-${counter}`)) counter++;
      id = `${id}-${counter}`;
    }
    seenIds.add(id);

    return `<h${level}${attributes} id="${id}">${content}</h${level}>`;
  });

  // Sanitize HTML to prevent XSS — strips scripts, event handlers, and javascript: URIs
  html = sanitizeHtml(html, SANITIZE_OPTIONS);

  return html;
}

