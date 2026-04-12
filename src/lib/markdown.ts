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

export function parseMarkdown(raw: string): string {
  if (!raw || typeof raw !== 'string') return "";

  // Convert github blob image URLs to raw URLs so they render properly
  let processedRaw = raw.replace(
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

