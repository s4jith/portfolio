// Portfolio data for terminal commands
// Extracted from existing sajith.app portfolio

export const PROFILE = {
  name: "Sajith J",
  title: "Aspiring AI/ML Engineer",
  subtitle: "Developing innovative Machine Learning and GenAI solutions to transform data and solve complex, real-world problems.",
  email: "jsajith76@gmail.com",
  github: "https://github.com/s4jith",
  linkedin: "https://www.linkedin.com/in/s4jith",
  resumeUrl: "/resume.pdf",
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: "Native" },
    { name: "Deutsch", level: "A1" }
  ],
  bio: `Motivated and enthusiastic Data Science student with a solid foundation in AI, Machine Learning, and Data Analysis. I'm passionate about applying academic knowledge to real-world scenarios, building impactful projects, and using technology to craft innovative solutions.

With strong problem-solving, leadership, and collaboration skills, I thrive in environments where I can contribute to meaningful projects and continuously learn from challenges.`
};

export const EDUCATION = {
  current: {
    degree: "B.Tech - Artificial Intelligence and Data Science",
    institution: "Sri Shakthi Institute of Engineering and Technology",
    duration: "2023 - 2027",
    cgpa: "8.52",
    location: "Coimbatore, India",
    year: "3rd Year"
  },
  secondary: {
    degree: "Higher Secondary Education",
    institution: "Vivek Vidyalaya Matric Hr. Sec. School",
    duration: "2022 - 2023",
    mark: "86%",
    location: "Coimbatore, India"
  }
};

export const SKILLS = {
  programming: {
    title: "Programming Languages",
    skills: ["Python", "C", "SQL", "HTML/CSS"]
  },
  aiml: {
    title: "AI & Data Science",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "RAG Systems",
      "LLM Applications",
      "Prompt Engineering"
    ]
  },
  frameworks: {
    title: "Frameworks & Libraries",
    skills: [
      "FastAPI", "Flask", "PyTorch", "TensorFlow",
      "Keras", "Scikit-learn", "Pandas", "NumPy",
      "Matplotlib", "Streamlit", "HuggingFace", "Transformers"
    ]
  },
  tools: {
    title: "Tools & Technologies",
    skills: ["Git", "LM Studio", "OpenVINO", "PowerBI", "Excel", "Docker", "n8n", "LangChain"]
  }
};

export const PROJECTS = [
  {
    id: "flexiev-platform",
    name: "FlexiEV – AI & Battery Intelligence",
    description: "FlexiEV is a next-gen EV ecosystem platform, and I built the AI/ML intelligence layer that powers battery predictions and smart vehicle insights. My focus was to turn messy, real-time battery and telemetry data into models that actually forecast the future, not just analyze the past.",
    techStack: ["Python", "Flask", "MongoDB", "TensorFlow", "RAG", "LLMs", "GRU", "Linear Models", "Pytorch"],
    features: [
      "Real-time Telemetry",
      "Predictive Battery Analytics",
      "RAG-powered Chatbot",
      "GRU Networks for RUL Prediction",
      "Linear Models for SoH Estimation",
      "Interactive Dashboards"
    ],
    github: "https://github.com/s4jith/FlexiEV.git",
    contribution: "Team Project",
    role: "AI/ML Developer"
  },
  {
    id: "versevault-library",
    name: "VerseVault – AI Powered Library",
    description: "Developed an AI-powered Smart Library with intelligent search, personalized recommendations, and spam review detection. Integrated face detection, offline voice search, and user analytics for enhanced user experience.",
    techStack: ["Python", "Django", "MongoDB", "Recommendation", "Spam Detection", "Face Detection", "NLP", "RAG"],
    features: [
      "Intelligent Search System",
      "Personalized Recommendations",
      "Spam Review Detection",
      "Face Detection Integration",
      "Offline Voice Search",
      "User Analytics Dashboard"
    ],
    github: "https://github.com/s4jith/VerseVault.git",
    contribution: "Individual Project",
    role: null
  },
  {
    id: "mythsnare-detector",
    name: "MythSnare – Misinformation Detection",
    description: "Created a comprehensive system to detect and flag misinformation using advanced NLP and machine learning techniques. Ensures information integrity through sophisticated content analysis and verification mechanisms.",
    techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "RAG", "NLP", "LLM"],
    features: [
      "Advanced NLP Processing",
      "ML-based Detection",
      "Real-time Analysis",
      "Content Verification",
      "RAG Implementation"
    ],
    github: "https://github.com/s4jith/MythSnare.git",
    contribution: "Team Project",
    role: "AI/ML Developer"
  },
  {
    id: "cipher-chase-game",
    name: "Cipher-Chase",
    description: "Built a website-based game for a college event, showcasing full-stack implementation with programming and Morse-code puzzle integration. Created an engaging interactive experience combining web development with game design.",
    techStack: ["Django", "Python", "JavaScript", "HTML", "Tailwind CSS", "Unity", "Docker"],
    features: [
      "Interactive Game Interface",
      "Morse Code Puzzles",
      "Real-time Scoring",
      "Compiler Integration",
      "Unity Integration"
    ],
    github: "https://github.com/s4jith/Chiper-Chase.git",
    contribution: "Individual Project",
    role: null
  },
  {
    id: "fire-smoke-detection",
    name: "Fire & Smoke Detection System",
    description: "Developed an advanced computer vision system using YOLOv8 for real-time fire and smoke detection. Implemented early warning capabilities for enhanced safety monitoring with high accuracy object detection and alert mechanisms.",
    techStack: ["Python", "Flask", "YOLOv8", "PyTorch", "Computer Vision", "AI/ML"],
    features: [
      "Real-time Fire Detection",
      "Smoke Pattern Recognition",
      "YOLOv8 Object Detection",
      "Early Warning System",
      "High Accuracy Models"
    ],
    github: "https://github.com/s4jith/Advanced-Fire-Smoke-Detection.git",
    contribution: "Individual Project",
    role: null
  }
];

export const CERTIFICATIONS = [
  { name: "Big Data 101", issuer: "IBM", date: "07/04/2025" },
  { name: "Deutsch A1", issuer: "Goethe Zentrum", date: "14/05/2025" },
  { name: "Introduction to Data Science", issuer: "Online Platform", date: "30/05/2025" },
  { name: "Intel GenAI", issuer: "Intel", date: "11/06/2024" },
  { name: "Prompt Engineering", issuer: "Internshala", date: "15/07/2025" },
  { name: "Microsoft X Edunet Internship", issuer: "Microsoft & Edunet Foundation", date: "01/08/2025" }
];


export const ACTIVITIES = [
  {
    title: "International & Professional Service Chair",
    description: "Rotaract Club of Sri Shakthi Institute (July 2025 - June 2026)"
  },
  {
    title: "Rotaractor Member",
    description: "Active member participating in community service (July 2024 - June 2025)"
  },
  {
    title: "Technical Event Conductor - KALAM 2k25",
    description: "Organized and conducted technical competitions for college fest"
  }
];

export const FORTUNE_QUOTES = [
  "🔮 \"The best model is the simplest one that works.\" - Occam's Razor",
  "🔮 \"Your training data is your model's teacher. Clean data = smart model.\"",
  "🔮 \"When in doubt, add more dropout.\"",
  "🔮 \"A neural network is only as good as its architecture.\"",
  "🔮 \"Overfitting is just your model memorizing the exam.\"",
  "🔮 \"Gradient descent: Taking baby steps towards enlightenment.\"",
  "🔮 \"The transformer architecture changed everything. Attention is all you need.\"",
  "🔮 \"RAG: Because even LLMs need to check their sources.\"",
  "🔮 \"Prompt engineering: The art of talking to robots.\"",
  "🔮 \"In ML, your bugs become features if you squint hard enough.\"",
  "🔮 \"Data preprocessing takes 80% of your time. Accept it.\"",
  "🔮 \"The GPU that overheats trains the hardest models.\""
];

export const COMMANDS_LIST = [
  { cmd: "whoami", desc: "View profile, bio & journey" },
  { cmd: "skills", desc: "Display technical skills" },
  { cmd: "projects", desc: "Browse project portfolio" },
  { cmd: "resume", desc: "View/download resume" },
  { cmd: "contact", desc: "Get contact information" },
  { cmd: "education", desc: "View education history" },
  { cmd: "certifications", desc: "View certifications" },
  { cmd: "clear", desc: "Clear terminal screen" },
  { cmd: "sudo hire-me", desc: "🎉 Easter egg" }
];
