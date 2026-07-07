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
    name: "NomadAgent",
    slug: "nomadagent",
    tagline:
      "An AI-powered travel research agent that generates verified itineraries from natural-language trip descriptions.",
    description:
      "NomadAgent is an AI-powered travel research agent that transforms natural-language trip descriptions into verified itineraries. It researches destinations in real time, extracts structured venue information, verifies results, and compiles day-by-day travel plans with maps, coordinates, opening hours, and source citations through a Flutter mobile app and a FastAPI backend.",
    coverImage: "src/assets/covers/nomad-agent-cover.jpg",
    links: {
      github: "https://github.com/RusithHansana/nomad-agent.git",
      demo: "https://github.com/user-attachments/assets/a73a4c4c-5a2c-40b8-8f2c-388061d7868c",
    },
    status: "Completed",
    year: "2026",
    type: "AI Travel Agent",
    stack: [
      "Flutter",
      "Python",
      "FastAPI",
      "LangGraph",
      "Google Gemini",
      "Tavily Python SDK",
    ],
    overview: [
      "NomadAgent converts natural-language trip descriptions into verified travel itineraries. Users describe their destination, interests, and trip duration, while the agent researches the web, extracts venue information, verifies results, and produces a structured itinerary with citations.",
      "The application consists of a Flutter mobile frontend and a Python FastAPI backend. An agent pipeline powered by LangGraph and Google Gemini coordinates planning, web research, structured data extraction, and itinerary compilation.",
      "The mobile application provides real-time streaming of the agent's progress, an interactive map displaying verified venues, day-by-day itinerary views, and PDF export functionality for sharing completed travel plans.",
    ],
    highlights: [
      "Natural language trip input",
      "Multi-step agent pipeline",
      "Real-time streaming with Server-Sent Events",
      "Intelligent web research",
      "LLM-powered venue data extraction",
      "Venue verification",
      "Interactive map view",
      "Day-by-day itinerary generation",
      "PDF export and sharing",
    ],
    problem:
      "Raw web search results are not sufficient for producing accurate travel itineraries because they require structured venue information, verification, and organization into practical travel plans.",
    solution:
      "NomadAgent uses a multi-step agent pipeline to plan research tasks, search the web, extract structured venue data with Gemini, verify venues, and compile day-by-day itineraries with maps, coordinates, opening hours, and source citations.",
    features: [
      {
        title: "Natural Language Trip Input",
        description:
          "Accepts trip descriptions in plain English and automatically identifies the destination, duration, and interests.",
      },
      {
        title: "Multi-Step Agent Pipeline",
        description:
          "Uses a planner, researcher, extractor, and compiler workflow orchestrated by LangGraph with state management.",
      },
      {
        title: "Real-Time Streaming",
        description:
          "Streams thought logs, venue verification events, and self-corrections to the mobile app using Server-Sent Events.",
      },
      {
        title: "Intelligent Web Research",
        description:
          "Searches the web using Tavily with hybrid relevance scoring to filter results.",
      },
      {
        title: "LLM-Powered Data Extraction",
        description:
          "Extracts structured venue information including coordinates, addresses, opening hours, and descriptions from web content.",
      },
      {
        title: "Venue Verification",
        description:
          "Applies tiered verification scoring with type-specific weighting for different venue categories.",
      },
      {
        title: "Interactive Map View",
        description:
          "Displays verified venues with coordinates on an interactive OpenStreetMap layer.",
      },
      {
        title: "Day-by-Day Itinerary",
        description:
          "Organizes verified venues into daily travel plans with logistics and estimated timing.",
      },
      {
        title: "PDF Export & Sharing",
        description:
          "Generates PDF itineraries that can be shared directly from the application.",
      },
      {
        title: "Parallel Extraction",
        description:
          "Runs concurrent LLM extraction tasks using asyncio.gather to reduce processing time.",
      },
      {
        title: "Bounded Event History",
        description:
          "Maintains a rolling event buffer with a monotonic cursor for efficient streaming.",
      },
      {
        title: "Graceful Error Handling",
        description:
          "Continues pipeline execution by skipping failed search tasks and handling service errors without blocking generation.",
      },
    ],
    architecture: [
      {
        label: "Mobile App",
        description:
          "A Flutter application that provides trip input, real-time generation, itinerary viewing, map visualization, and PDF export.",
      },
      {
        label: "Backend",
        description:
          "A FastAPI backend exposing health and itinerary generation endpoints while streaming updates with Server-Sent Events.",
      },
      {
        label: "AI Pipeline",
        description:
          "A LangGraph workflow consisting of planner, researcher, extractor, and compiler stages.",
      },
      {
        label: "APIs",
        description:
          "Uses Tavily for web search and Google Gemini for extraction and itinerary compilation.",
      },
    ],
    screenshots: [
      {
        src: "",
        alt: "Home Screen",
      },
      {
        src: "",
        alt: "Home with Prompt",
      },
      {
        src: "",
        alt: "Event Streaming",
      },
      {
        src: "",
        alt: "Itinerary View",
      },
      {
        src: "",
        alt: "Map View",
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
