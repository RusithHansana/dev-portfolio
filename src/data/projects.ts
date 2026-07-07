export interface Project {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  coverImage: string;
  links: {
    github: string;
    live?: string;
    demo?: string;
  };
  status: string;
  year: string;
  type: string;
  stack: string[];
  overview: string[];
  highlights: string[];
  problem: string;
  solution: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  architecture: Array<{
    label: string;
    description: string;
  }>;
  screenshots?: Array<{
    src: string;
    alt: string;
  }>;
}

export const projects: Project[] = [
  {
    name: "NomadAgent - AI-Powered Travel Research Agent",
    slug: "nomadagent-ai-powered-travel-research-agent",
    tagline: "Verified itinerary planning from natural-language trip ideas.",
    description:
      "An AI-powered travel research agent that turns natural-language trip descriptions into fully verified itineraries. It combines real-time streaming, map-based itinerary review, and PDF export through a Flutter frontend and FastAPI backend.",
    coverImage: "src/assets/covers/nomad-agent-cover.jpg",
    links: {
      github: "https://github.com/RusithHansana/nomad-agent",
    },
    status: "Draft case study",
    year: "2025",
    type: "AI travel application",
    stack: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "LangGraph",
      "Gemini API",
      "Tavily API",
      "Server-Sent Events",
    ],
    overview: [
      "NomadAgent explores how an agentic workflow can turn a loose travel prompt into a researched itinerary with places, timing, and map context.",
      "The first pass focuses on search-backed planning, streamed progress, interactive route review, and exportable trip output. These notes are drafted from the project summary and can be expanded with production metrics later.",
    ],
    highlights: [
      "Natural-language trip intake for flexible planning requests.",
      "Real-time streamed agent progress through a LangGraph pipeline.",
      "Interactive OpenStreetMap itinerary review.",
      "PDF export for generated travel plans.",
    ],
    problem:
      "Trip planning often requires switching between search results, maps, reviews, and document tools before a plan feels usable.",
    solution:
      "NomadAgent brings research, reasoning, map visualization, and export into one guided flow so a traveler can move from idea to itinerary faster.",
    features: [
      {
        title: "Streaming research flow",
        description:
          "Server-sent events keep the Flutter client updated while the backend researches and assembles the itinerary.",
      },
      {
        title: "Map-backed itinerary review",
        description:
          "Generated stops can be reviewed spatially with OpenStreetMap context instead of only as plain text.",
      },
      {
        title: "Portable output",
        description:
          "PDF export turns the generated itinerary into a shareable artifact for offline planning.",
      },
    ],
    architecture: [
      {
        label: "Client",
        description:
          "Flutter handles prompt input, streamed state, itinerary presentation, map views, and export actions.",
      },
      {
        label: "API",
        description:
          "FastAPI coordinates the agent pipeline and streams progress back to the client.",
      },
      {
        label: "AI/Search",
        description:
          "Gemini supports reasoning while Tavily provides search-backed travel research.",
      },
    ],
  },
  {
    name: "BizAgent - AI-Powered Receptionist",
    slug: "bizagent-ai-powered-receptionist",
    tagline: "A mobile receptionist assistant for lead capture and scheduling.",
    description:
      "A cross-platform mobile application that provides a 24/7 AI-powered receptionist for service-based businesses. It supports conversational lead qualification, FAQ handling, and appointment scheduling synced to Google Sheets.",
    coverImage: "src/assets/covers/biz-agent-cover.jpg",
    links: {
      github: "https://github.com/RusithHansana/biz-agent-react-native",
    },
    status: "Draft case study",
    year: "2025",
    type: "AI business assistant",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Gemini API",
      "Google Sheets API",
    ],
    overview: [
      "BizAgent is designed for service businesses that need a lightweight way to respond to prospects outside normal working hours.",
      "The app combines a conversational mobile interface with an automation backend that can qualify leads, answer common questions, and record appointments in Google Sheets.",
    ],
    highlights: [
      "Conversational lead qualification flow.",
      "FAQ handling for common customer questions.",
      "Appointment capture synced to Google Sheets.",
      "Cross-platform mobile experience through Expo.",
    ],
    problem:
      "Small service businesses can miss leads when inquiries arrive outside business hours or when staff are busy with existing customers.",
    solution:
      "BizAgent acts as a first-response receptionist that gathers key details, answers routine questions, and writes scheduling data into a simple business-owned spreadsheet.",
    features: [
      {
        title: "Mobile-first conversation",
        description:
          "React Native and Expo provide a cross-platform interface for managing receptionist conversations.",
      },
      {
        title: "Lead qualification",
        description:
          "The assistant prompts for relevant customer details before passing the lead into the business workflow.",
      },
      {
        title: "Sheets-backed scheduling",
        description:
          "Appointments are written to Google Sheets so the first version stays easy for operators to inspect and adjust.",
      },
    ],
    architecture: [
      {
        label: "App",
        description:
          "React Native renders the conversation experience and business-facing mobile screens.",
      },
      {
        label: "Backend",
        description:
          "A Node.js service manages AI requests and integration logic for scheduling workflows.",
      },
      {
        label: "Data",
        description:
          "Google Sheets acts as the appointment and lead handoff layer for this draft implementation.",
      },
    ],
  },
  {
    name: "SocketXO - Real-Time Resilient Tic-Tac-Toe",
    slug: "socketxo-real-time-resilient-tic-tac-toe",
    tagline: "Server-authoritative multiplayer Tic-Tac-Toe with resilient sessions.",
    description:
      "A high-performance, server-authoritative Tic-Tac-Toe web application focused on connection resilience. It includes a custom disconnect handshake for session recovery, instant global matchmaking, and a deterministic AI benchmark mode.",
    coverImage: "src/assets/covers/socket-xo-cover.jpg",
    links: {
      github: "https://github.com/RusithHansana/socket-xo",
    },
    status: "Draft case study",
    year: "2025",
    type: "Real-time web game",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Socket.io",
      "Vite",
      "Vitest",
      "Express",
    ],
    overview: [
      "SocketXO treats a small game as a real-time systems exercise: authoritative state, matchmaking, reconnect handling, and deterministic tests.",
      "The project emphasizes predictable multiplayer behavior even when users refresh, disconnect, or briefly lose network connectivity.",
    ],
    highlights: [
      "Server-authoritative game state.",
      "Custom disconnect handshake for session recovery.",
      "Instant matchmaking flow.",
      "Deterministic AI benchmark mode.",
    ],
    problem:
      "Real-time multiplayer apps can lose trust quickly when network interruptions create duplicate sessions, stale turns, or unclear match outcomes.",
    solution:
      "SocketXO centralizes game authority on the server and adds reconnect-aware session handling so players can resume cleanly after brief interruptions.",
    features: [
      {
        title: "Authoritative matches",
        description:
          "The server owns validation and state transitions, reducing client-side ambiguity during play.",
      },
      {
        title: "Resilient session recovery",
        description:
          "A disconnect handshake preserves recoverable match context instead of immediately abandoning active games.",
      },
      {
        title: "Benchmark AI mode",
        description:
          "A deterministic mode helps verify game logic and compare outcomes without relying on live opponents.",
      },
    ],
    architecture: [
      {
        label: "Client",
        description:
          "React and Vite render the board, match state, and multiplayer interaction flow.",
      },
      {
        label: "Realtime",
        description:
          "Socket.io carries matchmaking, move events, disconnects, and recovery messages.",
      },
      {
        label: "Server",
        description:
          "Node.js and Express own match lifecycle, validation, and deterministic game state.",
      },
    ],
  },
  {
    name: "HandCast - Hand Gesture Point Detection System",
    slug: "handcast-hand-gesture-point-detection-system",
    tagline: "Gesture-controlled 3D lighting through real-time hand tracking.",
    description:
      "A gesture-based 3D lighting control system that detects hand pointing gestures and allows users to toggle smart bulbs in a realistic 3D environment using pinch gestures. It pairs a React Three.js frontend with a Python MediaPipe backend for real-time tracking.",
    coverImage: "src/assets/covers/hand-cast-cover.jpg",
    links: {
      github: "https://github.com/RusithHansana/HandCast",
    },
    status: "Draft case study",
    year: "2025",
    type: "Computer vision interface",
    stack: ["React", "Three.js", "Python", "MediaPipe", "FastAPI"],
    overview: [
      "HandCast experiments with natural hand gestures as an interface for interacting with a 3D smart-home lighting scene.",
      "The project links real-time MediaPipe hand tracking with a browser-rendered 3D environment so pointing and pinch gestures can select and toggle lights.",
    ],
    highlights: [
      "Real-time hand point detection.",
      "Pinch gesture interaction for toggling bulbs.",
      "Three.js smart-home lighting scene.",
      "Python backend for MediaPipe-based tracking.",
    ],
    problem:
      "Spatial interfaces are hard to make intuitive when input is separated from the 3D scene users are trying to control.",
    solution:
      "HandCast maps hand landmarks into the 3D interaction model so pointing and pinching become direct controls for lights in the scene.",
    features: [
      {
        title: "Hand landmark tracking",
        description:
          "MediaPipe detects hand position and gesture signals that can be consumed by the interface.",
      },
      {
        title: "3D lighting scene",
        description:
          "React and Three.js render a realistic environment where bulbs can be selected and toggled.",
      },
      {
        title: "Gesture interaction loop",
        description:
          "Pointing identifies targets while pinch gestures confirm lighting actions.",
      },
    ],
    architecture: [
      {
        label: "Vision",
        description:
          "Python and MediaPipe process hand tracking data for gesture interpretation.",
      },
      {
        label: "API",
        description:
          "FastAPI exposes tracking and interaction data to the browser experience.",
      },
      {
        label: "Scene",
        description:
          "React and Three.js visualize the smart-home space and lighting state.",
      },
    ],
  },
];
