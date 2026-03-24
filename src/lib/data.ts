export const profile = {
  name: "Sai Jayanth Pothala",
  role: "Full Stack Developer",
  headline:
    "I build real-time platforms, AI-driven experiences, and scalable web apps with a clean, product-first mindset.",
  phone: "+91 79732 29599",
  email: "saijayanthpothala@gmail.com",
  github: "https://github.com/PJAYANTH2006",
  linkedin: "https://www.linkedin.com/in/sai-jayanth-pothala",
  portfolio: "https://pjayanth2006.github.io/jay-s_portfolio/",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Projects", value: 3, suffix: "+", description: "Flagship builds" },
  { label: "API Boost", value: 30, suffix: "%", description: "Performance lift" },
  { label: "Stacks", value: 6, suffix: "+", description: "Core languages" },
];

export const skills = {
  languages: [
    { name: "C++", level: 78 },
    { name: "JavaScript", level: 86 },
    { name: "C", level: 70 },
    { name: "PHP", level: 68 },
    { name: "Python", level: 82 },
    { name: "Java", level: 74 },
  ],
  frameworks: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 88 },
    { name: "Node.js", level: 84 },
    { name: "React.js", level: 86 },
  ],
  tools: [
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 82 },
    { name: "Git", level: 86 },
    { name: "Docker", level: 72 },
    { name: "Maven", level: 70 },
  ],
};

export const techStacks = ["React", "Node.js", "MongoDB", "MySQL", "Git"];

export const projects = [
  {
    title: "Architect-Live",
    description: "Real-time collaborative design platform with live canvas sync.",
    stack: ["React", "Socket.io", "WebRTC", "Node.js"],
    preview: "/images/capstone.png",
    highlights: [
      "Sub-50ms latency for real-time canvas sync and drawing persistence.",
      "Custom WebRTC mesh with Web Audio API for active speaker highlighting.",
      "RBAC system with Architect vs Client permissions and Redline reviews.",
    ],
    github: "https://github.com/PJAYANTH2006/Capstone.git",
    demo: "https://capstone-wine-two.vercel.app/",
  },
  {
    title: "Melody Heaven",
    description: "Full-stack music streaming experience with search and playlists.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    preview: "/images/music.png",
    highlights: [
      "Responsive SPA for browsing and streaming tracks.",
      "RESTful API with Node.js/Express and MongoDB storage.",
      "User login, keyword search, and playlist CRUD flows.",
    ],
    github: "https://github.com/PJAYANTH2006/melody-haven-75.git",
    demo: "https://github.com/PJAYANTH2006/melody-haven-75.git",
  },
  {
    title: "AI DIY Home Repair Guide",
    description: "AI assistant for guided home repair workflows.",
    stack: ["AI", "React", "Vercel", "HTML"],
    preview: "/images/ai.png",
    highlights: [
      "LLM-based reasoning for troubleshooting and safety guidance.",
      "Step-by-step workflows with materials and best practices.",
      "Interactive web interface deployed on Vercel.",
    ],
    github: "https://github.com/PJAYANTH2006",
    demo: "https://aiproject-chatbot2-h63vuok7h-jayanths-projects-f05a8f0b.vercel.app/",
  },
];

export const experience = [
  {
    company: "InternsVeda - Edu Tech Private Limited",
    role: "Full Stack Development Intern",
    period: "Internship",
    summary: [
      "Built a full-stack blog platform with secure signup, rich text, and profiles.",
      "Optimized Node.js/Express APIs to reduce response time by 30%.",
      "Implemented MongoDB + MySQL storage with authentication safeguards.",
    ],
  },
];

export const certifications = [
  {
    title: "Networking Professional",
    issuer: "Oracle",
    year: "Oct 2025",
    note: "Enterprise networking fundamentals and security.",
  },
  {
    title: "AI Foundations Associate",
    issuer: "Oracle",
    year: "Nov 2025",
    note: "Applied AI fundamentals and data workflows.",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    year: "Apr 2025",
    note: "Cloud architecture, virtualization, and services.",
  },
  {
    title: "MERN Full Stack Development",
    issuer: "Gokboru Pvt Ltd",
    year: "Jul 2025",
    note: "Full-stack web development with the MERN stack.",
  },
];

export const education = [
  {
    school: "Lovely Professional University, Jalandhar, Punjab",
    degree: "Bachelor of Technology, Computer Science and Technology",
    period: "Aug 2023 - Present",
    detail: "CGPA: 7.6",
  },
  {
    school: "Ascent Institutions, Visakhapatnam, Andhra Pradesh",
    degree: "Intermediate",
    period: "Aug 2021 - Jul 2023",
    detail: "Percentage: 90%",
  },
  {
    school: "Sri Chaintanya, Visakhapatnam, Andhra Pradesh",
    degree: "Matriculation",
    period: "Jul 2020 - Jul 2021",
    detail: "Percentage: 86%",
  },
];

export const socialLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Portfolio", href: profile.portfolio },
];
