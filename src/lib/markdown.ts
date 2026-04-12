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
  const lines = markdown.split(/\r?\n/);
  let result = "";
  let isCapturing = false;
  let currentHeaderLevel = 0;

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
        result += line + "\n";
      } else if (isCapturing && level <= currentHeaderLevel) {
        // Stop capturing if we hit a header of same or higher level that isn't a target
        isCapturing = false;
      }
      
      // If we are capturing and this is a sub-header, include it
      if (isCapturing && !isTarget) {
        result += line + "\n";
      }
    } else if (isCapturing) {
      result += line + "\n";
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

export function parseMarkdown(raw: string): string {
  if (!raw || typeof raw !== 'string') return "";

  // Convert github blob image URLs to raw URLs so they render properly
  let filteredRaw = extractPortfolioSections(raw);
  
  // If no sections matched, fall back to the original raw content (optional, but safer)
  // However, user requested ONLY these sections. Let's stick to the rule.
  let processedRaw = filteredRaw.replace(
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

