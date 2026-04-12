interface GitHubReadmeResponse {
  content?: string;
  download_url?: string;
}

export interface ReadmeData {
  content: string;
  downloadUrl: string;
}

export async function fetchReadme(repo: string): Promise<ReadmeData> {
  const token = import.meta.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/readme`, {
      headers,
    });

    if (!response.ok) {
      console.warn(
        `Unable to fetch README for ${repo}. GitHub API returned status ${response.status}.`,
      );
      return { content: "", downloadUrl: "" };
    }

    const payload = (await response.json()) as GitHubReadmeResponse;

    if (!payload?.content || typeof payload.content !== 'string') {
      console.warn(`README payload for ${repo} did not include content.`);
      return { content: "", downloadUrl: "" };
    }

    // Decode base64 to utf-8 across environments
    const binaryString = atob(payload.content.replace(/\n/g, ""));
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const decoder = new TextDecoder('utf-8');
    return {
      content: decoder.decode(bytes),
      downloadUrl: payload.download_url || "",
    };
  } catch (err) {
    console.error(`Failed to fetch README for ${repo}:`, err);
    return { content: "", downloadUrl: "" };
  }
}

export async function fetchGithubAvatar(username: string): Promise<string> {
  const token = import.meta.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };
  
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!res.ok) return "";

    const data = await res.json();
    return data.avatar_url; 
  } catch (err) {
    console.error(`Failed to fetch avatar for ${username}:`, err);
    return "";
  }
}
