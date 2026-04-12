import { marked } from "marked";

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

  return html;
}

