import heroImage from "./assets/hero/hero-image.jpeg";

export const siteConfig = {
  name: "Rusith Hansana",
  githubUsername: "RusithHansana",
  title: "Software Engineer",
  description: "Portfolio website of Rusith Hansana",
  accentColor: "#1d4ed8",
  accentColorDark: "#84cc16",
  photoUrl: heroImage.src,
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
