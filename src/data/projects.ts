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
        src: "src/assets/demos/nomad-agent/nomad-agent-home-no-prompt.jpg",
        alt: "Home Screen",
      },
      {
        src: "src/assets/demos/nomad-agent/nomad-agent-home-with-prompt.jpg",
        alt: "Home with Prompt",
      },
      {
        src: "src/assets/demos/nomad-agent/nomad-agent-event.jpg",
        alt: "Event Streaming",
      },
      {
        src: "src/assets/demos/nomad-agent/nomad-agent-itinerary.jpg",
        alt: "Itinerary View",
      },
      {
        src: "src/assets/demos/nomad-agent/nomad-agent-map.jpg",
        alt: "Map View",
      },
    ],
  },
  {
    name: "BizAgent",
    slug: "bizagent",
    tagline:
      "A cross-platform mobile application providing a 24/7 AI-powered receptionist for service-based businesses.",
    description:
      "BizAgent is a cross-platform mobile application for service-based small businesses that provides a 24/7 AI-powered receptionist. The application uses an intelligent chatbot to answer frequently asked questions, qualify leads, validate appointment availability, prevent double bookings, and write confirmed appointments to a Google Sheet used as a CRM.",
    coverImage: "src/assets/covers/biz-agent-cover.jpg",
    links: {
      github: "https://github.com/RusithHansana/biz-agent-react-native.git",
      demo: "https://github.com/user-attachments/assets/f5ba4dc8-98b4-48df-9f0e-1f7659d7d6a2",
    },
    status: "Completed",
    year: "2026",
    type: "Mobile Chatbot",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "React 19",
      "Node.js",
      "Express",
      "Vercel Serverless Functions",
    ],
    overview: [
      "BizAgent is a cross-platform mobile application designed for service-based small businesses such as real estate agencies, dental clinics, and consultancies. It provides a 24/7 AI-powered receptionist that interacts with users through an intelligent chatbot.",
      "The chatbot answers frequently asked questions, qualifies leads, validates appointment availability, prevents double bookings, and records confirmed appointments in a Google Sheet used as a zero-cost CRM.",
    ],
    highlights: [
      "Conversational AI booking",
      "Lead qualification",
      "Smart scheduling",
      "Google Sheets CRM integration",
      "Prompt injection resistance",
      "Offline booking retry",
      "Network awareness",
      "Easy client onboarding",
    ],
    problem:
      "Service-based small businesses need a receptionist that can answer questions, qualify leads, manage appointments, and avoid double bookings without the cost of a traditional CRM.",
    solution:
      "BizAgent provides a cross-platform AI-powered receptionist that guides users through bookings, validates scheduling, prevents conflicts, and stores confirmed appointments in Google Sheets as a zero-cost CRM.",
    features: [
      {
        title: "Conversational AI Booking",
        description:
          "Uses Google Gemini 2.5 Flash to guide users from inquiry to a confirmed appointment in a single session.",
      },
      {
        title: "Lead Qualification",
        description:
          "Collects the user's name, email, and desired service before booking.",
      },
      {
        title: "Smart Scheduling",
        description:
          "Validates business hours and checks Google Sheets for conflicts to prevent double bookings.",
      },
      {
        title: "Google Sheets CRM",
        description:
          "Appends every confirmed booking to a Google Sheet with booking details.",
      },
      {
        title: "Prompt Injection Resistance",
        description:
          "Uses system prompt guardrails to keep the chatbot in its receptionist role.",
      },
      {
        title: "Offline Resilience",
        description:
          "Caches failed bookings locally with AsyncStorage and retries them on the next launch.",
      },
      {
        title: "Network Awareness",
        description:
          "Displays an offline connection banner and disables chat input until connectivity is restored.",
      },
      {
        title: "Easy Client Onboarding",
        description:
          "Allows deployment for a new client by changing the business profile JSON and Google Sheet ID.",
      },
    ],
    architecture: [
      {
        label: "Mobile App",
        description:
          "React Native Expo client using React Context, useReducer, and AsyncStorage communicates with backend endpoints over HTTPS.",
      },
      {
        label: "Backend",
        description:
          "Node.js and Express application deployed as Vercel Serverless Functions exposing chat, booking, and health endpoints.",
      },
      {
        label: "AI",
        description: "Google Gemini 2.5 Flash processes chatbot requests.",
      },
      {
        label: "Database",
        description: "Google Sheets API stores confirmed bookings as CRM records.",
      },
    ],
    screenshots: [
      {
        src: "src/assets/demos/biz-agent/landing-screen.jpg",
        alt: "Landing Screen",
      },
      {
        src: "src/assets/demos/biz-agent/chat-greeting.jpg",
        alt: "Chat Greeting",
      },
      {
        src: "src/assets/demos/biz-agent/convo-start.jpg",
        alt: "Chat Conversation",
      },
      {
        src: "src/assets/demos/biz-agent/convo-continue.jpg",
        alt: "Continue Conversation",
      },
      {
        src: "src/assets/demos/biz-agent/booking-confirmed.jpg",
        alt: "Booking Confirmed",
      },
    ],
  },
  {
    name: "SocketXO",
    slug: "socketxo",
    tagline:
      "A browser-based real-time Tic-Tac-Toe web application demonstrating production-grade real-time system behavior.",
    description:
      "SocketXO is a browser-based real-time Tic-Tac-Toe web application built to demonstrate production-grade real-time system behavior. It focuses on connection resilience, server-authoritative state management, and deterministic state synchronization over Socket.io. The project includes online matchmaking, in-game chat, an AI benchmark mode, and developer tools for testing network conditions.",
    coverImage: "src/assets/covers/socket-xo-cover.jpg",
    links: {
      github: "https://github.com/RusithHansana/socket-xo",
      demo: "https://github.com/user-attachments/assets/07aa4731-48e4-4be9-a972-8dc55131e6cc",
    },
    status: "Completed",
    year: "2026",
    type: "Web Application",
    stack: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "TypeScript",
    ],
    overview: [
      "SocketXO is a browser-based real-time Tic-Tac-Toe web application created to demonstrate production-grade real-time system behavior. Its primary focus is connection resilience, server-authoritative state management, and deterministic synchronization between connected clients.",
      "The application provides frictionless matchmaking, secure room-scoped chat, an AI benchmark mode using a deterministic Minimax engine, and developer tools for simulating network failures. These features are designed to demonstrate reliable real-time multiplayer behavior.",
      "The architecture follows a state-first, server-authoritative model where the backend acts as the single source of truth. Real-time communication is event-driven with Socket.io, persistent player identities enable reconnection, and the frontend reactively updates from server-broadcasted state.",
    ],
    highlights: [
      "30-second disconnect recovery handshake",
      "Server-authoritative game state validation",
      "Global matchmaking queue",
      "Room-scoped real-time chat with XSS sanitization",
      "Deterministic Minimax AI benchmark mode",
      "Developer controls for simulating lag and disconnects",
    ],
    problem:
      "Real-time multiplayer applications must maintain synchronized game state and recover reliably from network interruptions without causing inconsistent client state.",
    solution:
      "SocketXO uses a server-authoritative architecture with deterministic state synchronization and a managed disconnect recovery mechanism that preserves sessions during temporary network loss.",
    features: [
      {
        title: "Disconnect Handshake",
        description:
          "Holds a disconnected player's session for 30 seconds, notifies the opponent, and restores the game state when the player reconnects.",
      },
      {
        title: "Server-Authoritative State Engine",
        description:
          "Validates every move on the server, maintains synchronized game state, and rejects invalid actions.",
      },
      {
        title: "Frictionless Matchmaking",
        description:
          "Creates guest identities and pairs players through a global matchmaking queue.",
      },
      {
        title: "Room-Scoped Chat",
        description:
          "Provides in-game chat with XSS sanitization for secure communication.",
      },
      {
        title: "AI Benchmark Mode",
        description:
          "Includes a deterministic Minimax AI mode for testing game logic correctness.",
      },
      {
        title: "Dev-Mode Chaos Controls",
        description:
          "Provides hidden developer controls to simulate lag and disconnect scenarios.",
      },
    ],
    architecture: [
      {
        label: "Frontend",
        description:
          "Uses a reactive state synchronization approach where UI components update from server-broadcasted state.",
      },
      {
        label: "Backend",
        description:
          "Implements a state-first, server-authoritative architecture that validates game logic and maintains session state.",
      },
      {
        label: "APIs",
        description:
          "Real-time communication is event-driven through Socket.io with a shared event contract.",
      },
      {
        label: "Authentication",
        description:
          "Players use persistent session-based identities with short-lived reconnection tokens for managed recovery.",
      },
    ],
    screenshots: [
      {
        src: "",
        alt: "Lobby",
      },
      {
        src: "",
        alt: "Game Board",
      },
    ],
  },
  {
    name: "HandCast",
    slug: "handcast",
    tagline:
      "A gesture-based 3D lighting control system using hand tracking and pinch gestures.",
    description:
      "HandCast is a gesture-based 3D lighting control system that detects hand pointing gestures and allows users to toggle smart bulbs in a realistic 3D environment using pinch gestures. It translates physical hand movements into interactions within a virtual 3D space using a React Three.js frontend and a Python MediaPipe backend connected over WebSockets.",
    coverImage: "src/assets/covers/hand-cast-cover.jpg",
    links: {
      github: "https://github.com/RusithHansana/HandCast",
      demo: "https://github.com/user-attachments/assets/eda98879-f875-4f07-8af6-47d04c4f5ab3",
    },
    status: "Completed",
    year: "2025",
    type: "Computer vision interface",
    stack: ["React", "Three.js", "Python", "FastAPI", "MediaPipe", "WebSockets"],
    overview: [
      "HandCast is a gesture-based 3D lighting control system that detects hand pointing gestures and allows users to control smart bulbs in a realistic virtual environment using pinch gestures.",
      "The project translates physical real-world hand movements into interactions within a 3D scene. It uses a React and Three.js frontend for rendering and a Python backend with MediaPipe for hand tracking, communicating through WebSockets.",
      "The application includes a realistic 3D room, dynamic lighting, modern user interface elements, and spatial audio to provide an immersive interaction experience.",
    ],
    highlights: [
      "Real-time hand tracking",
      "3D pointing detection",
      "Pinch gesture recognition",
      "Smart bulb simulation",
      "WebSocket communication",
    ],
    problem:
      "There was no natural way to select a specific electrical device in a smart home system using hand gestures alone.",
    solution:
      "HandCast uses raycasting to identify the targeted electrical device in the 3D scene and then controls it through pinch-based interactions.",
    features: [
      {
        title: "Real-time Hand Tracking",
        description: "Uses MediaPipe and webcam input to track hand movements in real time.",
      },
      {
        title: "3D Pointing Detection",
        description:
          "Performs precise ray casting within the 3D environment to determine pointing direction.",
      },
      {
        title: "Pinch Gesture Recognition",
        description:
          "Detects pinch gestures to enable interactions with virtual devices.",
      },
      {
        title: "Smart Bulb Simulation",
        description:
          "Provides realistic 3D smart bulb models with lighting effects.",
      },
      {
        title: "WebSocket Communication",
        description:
          "Enables fast real-time communication between the frontend and backend.",
      },
    ],
    architecture: [
      {
        label: "Frontend",
        description:
          "A React frontend renders the 3D scene using Three.js and handles ray casting, pinch detection, and UI components.",
      },
      {
        label: "Backend",
        description:
          "A Python backend uses MediaPipe for hand tracking, runs a FastAPI server, and streams real-time data.",
      },
      {
        label: "Communication",
        description:
          "The frontend and backend communicate through WebSockets for real-time interaction.",
      },
    ],
  },
];
