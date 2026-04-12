import { marked } from "marked";

export function parseMarkdown(raw: string): string {
  // Convert github blob image URLs to raw URLs so they render properly
  let processedRaw = raw.replace(
    /https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/([^"'\s)>]+)/g,
    'https://raw.githubusercontent.com/$1/$2/$3/$4'
  );
  
  let html = marked.parse(processedRaw, { async: false }) as string;

  // Add IDs to headings for anchor links (e.g. href="#features" maps to id="features")
  html = html.replace(/<h([1-6])(.*?)>(.*?)<\/h\1>/g, (match, level, attributes, content) => {
    if (attributes.includes('id=')) return match; // Already has an ID
    const textContent = content.replace(/<[^>]+>/g, '');
    const id = textContent.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
    return `<h${level}${attributes} id="${id}">${content}</h${level}>`;
  });

  return html;
}

