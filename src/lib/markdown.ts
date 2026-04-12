import { marked } from "marked";

export function parseMarkdown(raw: string): string {
  // Convert github blob image URLs to raw URLs so they render properly
  let processedRaw = raw.replace(
    /https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/([^"'\s)>]+)/g,
    'https://raw.githubusercontent.com/$1/$2/$3/$4'
  );

  // Split by markdown h2 to filter out non-portfolio sections
  // Using \n## to safely catch sections
  const sections = processedRaw.split(/\r?\n##\s+/);
  let finalRaw = sections[0] || ''; // Preamble (Logo, title, badges)
  
  // Safely filter HTML Table of Contents containing hash links to only keep available sections
  finalRaw = finalRaw.replace(/<p align="center">\s*(?:<a href="#[^>]+>.*?<\/a>\s*(?:•|\||\-|<br>)?\s*)+<\/p>/, (match) => {
    const allowed = ["#overview", "#features", "#demo", "#tech-stack"];
    let filteredLinks: string[] = [];
    match.replace(/<a href="([^"]+)">(.*?)<\/a>/g, (m, href, text) => {
      // Check if href matches our allowed list (ignoring case)
      if (allowed.includes(href.toLowerCase())) {
        filteredLinks.push(m);
      }
      return m;
    });
    if (filteredLinks.length > 0) {
      return `<p align="center">\n  ${filteredLinks.join(' • ')}\n</p>`;
    }
    return '';
  });

  const allowedSections = ["overview", "features", "demo", "tech stack"];
  
  for (let i = 1; i < sections.length; i++) {
    const section = sections[i];
    const titleLine = section.split('\n')[0].toLowerCase().trim();
    
    // Check if the title line contains any of the allowed keywords
    if (allowedSections.some(allowed => titleLine.includes(allowed))) {
      finalRaw += '\n\n## ' + section;
    }
  }
  
  let html = marked.parse(finalRaw, { async: false }) as string;

  // Add IDs to headings for anchor links (e.g. href="#features" maps to id="features")
  html = html.replace(/<h([1-6])(.*?)>(.*?)<\/h\1>/g, (match, level, attributes, content) => {
    if (attributes.includes('id=')) return match; // Already has an ID
    const textContent = content.replace(/<[^>]+>/g, '');
    const id = textContent.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
    return `<h${level}${attributes} id="${id}">${content}</h${level}>`;
  });

  return html;
}

