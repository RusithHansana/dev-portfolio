import { Buffer } from "node:buffer";

interface GitHubReadmeResponse {
  content?: string;
}

export async function fetchReadme(repo: string): Promise<string> {
  const token = import.meta.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`https://api.github.com/repos/${repo}/readme`, {
    headers,
  });

  if (!response.ok) {
    console.warn(
      `Unable to fetch README for ${repo}. GitHub API returned status ${response.status}.`,
    );
    return "";
  }

  const payload = (await response.json()) as GitHubReadmeResponse;

  if (!payload.content) {
    console.warn(`README payload for ${repo} did not include content.`);
    return "";
  }

  return Buffer.from(payload.content.replace(/\n/g, ""), "base64").toString("utf-8");
}
