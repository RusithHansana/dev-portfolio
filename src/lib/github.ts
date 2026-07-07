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
