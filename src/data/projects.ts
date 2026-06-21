export interface Project {
  slug: string;
  repo: string;
  demoVideo?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: "nomadagent-ai-powered-travel-research-agent",
    repo: "RusithHansana/nomad-agent",
  },
  {
    slug: "bizagent-ai-powered-receptionist",
    repo: "RusithHansana/biz-agent-react-native",
  },
  {
    slug: "socketxo-real-time-resilient-tic-tac-toe",
    repo: "RusithHansana/socket-xo",
  },
  {
    slug: "finbuddy-ai-powered-finance-assistant",
    repo: "RusithHansana/finbuddy_ai",
  },
  {
    slug: "handcast-hand-gesture-point-detection-system",
    repo: "RusithHansana/HandCast",
  },
];
