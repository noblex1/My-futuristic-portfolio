export const personalInfo = {
  name: "Sharif Iddrisu",
  title: "Computer Science Student & Budding Software Engineer",
  subtitle: "Passionate About Artificial Intelligence and Cybersecurity",
  location: "Kumasi, Ghana",
  email: "sharif@example.com",
  phone: "+233 XX XXX XXXX",
  bio: "A dedicated Computer Science student with a passion for cutting-edge technology, specializing in Artificial Intelligence and Cybersecurity. Currently pursuing my degree at University for Development Studies while actively contributing to the tech community through HackerBoost.",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  social: {
    linkedin: "https://linkedin.com/in/sharif-iddrisu",
    github: "https://github.com/sharif-iddrisu",
    twitter: "https://twitter.com/sharif_iddrisu",
    email: "mailto:sharif@example.com"
  }
};

export const projects = [
  {
    id: 1,
    name: "NetWard AI",
    description: "Advanced phishing detection system using machine learning algorithms to identify and prevent cyber threats in real-time.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "MongoDB"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/sharif-iddrisu/netward-ai",
    liveUrl: "https://netward-ai.vercel.app",
    featured: true
  },
  {
    id: 2,
    name: "Smart ChatBot",
    description: "NLP-powered AI assistant built with advanced natural language processing capabilities for customer support automation.",
    technologies: ["Python", "OpenAI", "Flask", "JavaScript", "MySQL"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/sharif-iddrisu/smart-chatbot",
    liveUrl: "https://smart-chatbot-demo.vercel.app",
    featured: true
  },
  {
    id: 3,
    name: "SecurePass",
    description: "Advanced password generator and manager with encryption, biometric authentication, and security analytics.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/sharif-iddrisu/securepass",
    liveUrl: "https://securepass-app.vercel.app",
    featured: true
  },
  {
    id: 4,
    name: "CyberVault",
    description: "Comprehensive data protection and privacy tracking system with real-time threat monitoring and compliance reporting.",
    technologies: ["Vue.js", "Django", "Redis", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/sharif-iddrisu/cybervault",
    liveUrl: "https://cybervault-demo.vercel.app",
    featured: true
  }
];

export const experience = [
  {
    id: 1,
    title: "Active Member",
    company: "HackerBoost",
    period: "2023 - Present",
    description: "Contributing to cybersecurity initiatives and participating in competitive programming challenges to enhance technical skills.",
    type: "community",
    achievements: [
      "Participated in multiple cybersecurity workshops",
      "Contributed to open-source security projects",
      "Mentored junior developers in coding practices"
    ]
  },
  {
    id: 2,
    title: "Computer Science Student",
    company: "University for Development Studies",
    period: "2022 - Present",
    description: "Pursuing Bachelor's degree in Computer Science with focus on AI and cybersecurity applications.",
    type: "education",
    achievements: [
      "Maintained high academic standing",
      "Led student tech initiatives",
      "Completed advanced coursework in AI and machine learning"
    ]
  },
  {
    id: 3,
    title: "Cybersecurity Intern",
    company: "TechSecure Ghana",
    period: "2024 - 2024",
    description: "Gained hands-on experience in vulnerability assessment and penetration testing methodologies.",
    type: "internship",
    achievements: [
      "Conducted security audits for local businesses",
      "Developed automated security scanning tools",
      "Assisted in incident response procedures"
    ]
  }
];

export const skills = {
  languages: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "JavaScript", level: 85, icon: "🟨" },
    { name: "C++", level: 80, icon: "⚙️" },
    { name: "Java", level: 75, icon: "☕" },
    { name: "SQL", level: 85, icon: "🗄️" }
  ],
  frameworks: [
    { name: "React", level: 85, icon: "⚛️" },
    { name: "Node.js", level: 80, icon: "🟢" },
    { name: "TensorFlow", level: 75, icon: "🧠" },
    { name: "FastAPI", level: 80, icon: "🚀" },
    { name: "Django", level: 75, icon: "🎯" }
  ],
  tools: [
    { name: "Git", level: 90, icon: "🔄" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Linux", level: 85, icon: "🐧" },
    { name: "Docker", level: 70, icon: "🐳" },
    { name: "AWS", level: 65, icon: "☁️" }
  ],
  cybersecurity: [
    { name: "Penetration Testing", level: 75, icon: "🔍" },
    { name: "Network Security", level: 80, icon: "🛡️" },
    { name: "Malware Analysis", level: 70, icon: "🦠" },
    { name: "Cryptography", level: 75, icon: "🔐" },
    { name: "Incident Response", level: 70, icon: "🚨" }
  ]
};

export const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Cybersecurity",
    excerpt: "Exploring how artificial intelligence is revolutionizing threat detection and response in the cybersecurity landscape.",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    slug: "future-ai-cybersecurity"
  },
  {
    id: 2,
    title: "Building Secure Applications: A Developer's Guide",
    excerpt: "Essential security practices every developer should implement when building modern web applications.",
    date: "2024-01-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    slug: "secure-applications-guide"
  },
  {
    id: 3,
    title: "My Journey into Machine Learning",
    excerpt: "Sharing my experience learning machine learning and how it's shaping my approach to problem-solving.",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe472c8ea?w=600&h=400&fit=crop",
    slug: "machine-learning-journey"
  }
];

export const certificates = [
  {
    id: 1,
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2024",
    credentialId: "SEC-2024-001",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SAA-2024-001",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "2023",
    credentialId: "CEH-2023-001",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop"
  }
];