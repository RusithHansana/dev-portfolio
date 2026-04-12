export interface Project {
  slug: string;
  repo: string;
  demoVideo?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: "bizagent-ai-powered-receptionist",
    repo: "RusithHansana/biz-agent-react-native",
  },
  {
    slug: "socketxo-real-time-resilient-tic-tac-toe",
    repo: "RusithHansana/socket-xo",
  },
];
