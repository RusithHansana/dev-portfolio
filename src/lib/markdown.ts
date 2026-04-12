import { marked } from "marked";

export function parseMarkdown(raw: string): string {
  return marked.parse(raw, { async: false });
}
