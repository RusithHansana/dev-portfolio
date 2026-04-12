export const siteConfig = {
  name: "Rusith Hansana",
  title: "Software Engineer",
  description: "Portfolio website of Rusith Hansana",
  accentColor: "#1d4ed8",
  social: {
    email: "rusithhansana.dev@gmail.com",
    github: "https://github.com/RusithHansana",
    linkedin: "https://www.linkedin.com/in/rusith-hansana/",
  },
  specialties: ["Full-Stack", "Mobile Apps", "AI Apps"],
  aboutMe:"Software Engineer building scalable web, AI-powered, and interactive systems. Focused on clean architecture, performance, and product-driven engineering.",
  skills: [
    "Javascript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "React Native",
    "LangChain",
    "Jupyter Notebook",
  ],
  projects: [
    {
      name: "BizAgent – AI-Powered Receptionist",
      slug: "bizagent-ai-powered-receptionist",
      description: "A cross-platform mobile application that provides a 24/7 AI-powered receptionist for service-based businesses. It features a conversational interface for lead qualification, FAQ handling, and automated appointment scheduling synced directly to Google Sheets.",
      link: "https://github.com/RusithHansana/biz-agent-react-native",
      skills: ["React Native", "Expo", "TypeScript", "Node.js", "Gemini API", "Google Sheets API"]
    },
    {
      name: "SocketXO – Real-Time Resilient Tic-Tac-Toe",
      slug: "socketxo-real-time-resilient-tic-tac-toe",
      description: "A high-performance, server-authoritative Tic-Tac-Toe web application focused on connection resilience. It features a custom 'Disconnect Handshake' protocol for session recovery, instant global matchmaking, and a deterministic AI benchmark mode.",
      link: "https://github.com/RusithHansana/socket-xo",
      skills: ["React", "TypeScript", "Node.js", "Socket.io", "Vite", "Vitest","Express"]
    },
    {
      name: "HandCast – Hand Gesture Point Detection System",
      slug: "handcast-hand-gesture-point-detection-system",
      description:
      "A gesture-based 3D lighting control system that detects hand pointing gestures and allows users to toggle smart bulbs in a realistic 3D environment using pinch gestures. Built with React Three.js frontend and Python MediaPipe backend for real-time hand tracking and interaction.",
      link: "https://github.com/RusithHansana/HandCast",
      skills: ["React", "Three.js", "Python", "MediaPipe", "FastAPI"],
    },
    {
      name: "FinBuddy – AI-Powered Finance Assistant",
      slug: "finbuddy-ai-powered-finance-assistant",
      description:
        "A cross-platform mobile application that provides AI-driven personal finance guidance through a conversational chat interface. Built to deliver accessible financial insights using real-time AI responses.",
      link: "https://github.com/RusithHansana/finbuddy_ai",
      skills: ["Flutter", "Firebase", "Gemini API"],
    },
  ],
  experience: [
    {
      company: "Novalink Innovations",
      title: "Software Engineer",
      dateRange: "Jan 2025 - Dec 2025",
      bullets: [
        "Contributed to the modernization of a legacy ERP system by transforming CLI-based workflows into a modern web interface",
        "Worked in a 2-member engineering team across the full software development lifecycle, from requirements analysis to deployment",
        "Led frontend development efforts with a focus on performance optimization, clean UI design, and maintainable architecture",
        "Collaborated with stakeholders to improve usability and operational efficiency, receiving positive client feedback on speed and visual quality",
      ],
    },
    {
      company: "CodeBell (PVT) Ltd",
      title: "Software Engineer (Part-Time)",
      dateRange: "Mar 2025 -  Dec 2025",
      bullets: [
        "Built and delivered production-ready websites and landing pages for early-stage startups",
        "Developed responsive, high-performance web applications using Next.js with a focus on SEO and accessibility",
        "Owned the development and deployment of client projects using Vercel",
        "Collaborated closely with founders and non-technical stakeholders in a fast-paced startup environment",
      ],
    },
  ],
  education: [
    {
      school: "NSBM Green University",
      degree: "Bachelor of Science in Software Engineering",
      dateRange: "2021 - 2025",
      achievements: [],
    },
  ],
};
