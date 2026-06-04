export const personalInfo = {
  name: "Durgesh Dutt Sinha",
  tagline: "BCA Student | Cybersecurity Enthusiast | AI & ML Learner",
  email: "durgeshdsinha@gmail.com",
  phone: "+91 6299257203",
  location: "Pune, Maharashtra",
  linkedin: "https://www.linkedin.com/in/durgesh-dutt-s-4ba74924b",
  dob: "26 Sep 2004",
  age: 21,
};

export interface Education {
  degree: string;
  stream: string;
  institution: string;
  board: string;
  year: string;
  percentage?: string;
}

export const education: Education[] = [
  {
    degree: "BCA (Bachelor of Computer Applications)",
    stream: "Computer Applications",
    institution: "Sri Balaji University Pune — School of Computer Studies",
    board: "Sri Balaji University",
    year: "2022–2025",
  },
  {
    degree: "12th (Commerce)",
    stream: "Commerce",
    institution: "D.A.V Public School, Bokaro Steel City, Jharkhand",
    board: "CBSE",
    year: "2022",
    percentage: "66%",
  },
  {
    degree: "10th",
    stream: "General",
    institution: "Gurukripa Academy, Bihar",
    board: "CBSE",
    year: "2020",
    percentage: "69%",
  },
];

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    category: "Web Technologies",
    icon: "🌐",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Data Science",
    icon: "📊",
    skills: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Machine Learning",
    icon: "🤖",
    skills: ["Regression", "Classification"],
  },
  {
    category: "Cybersecurity",
    icon: "🔐",
    skills: ["Network Security", "Threat Analysis"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "SQL"],
  },
  {
    category: "Operating Systems",
    icon: "⚙️",
    skills: ["Windows", "Linux"],
  },
  {
    category: "Tools & Methodologies",
    icon: "🛠️",
    skills: ["Agile (Scrum, Kanban)", "Cybersecurity Tools"],
  },
];

export interface Certification {
  title: string;
  provider: string;
  year: string;
}

export const certifications: Certification[] = [
  {
    title: "Introduction to Artificial Intelligence",
    provider: "LinkedIn Learning",
    year: "2023",
  },
  {
    title: "Generative AI vs Traditional AI",
    provider: "LinkedIn Learning",
    year: "2023",
  },
  {
    title: "AI and Business Strategy",
    provider: "LinkedIn Learning",
    year: "2023",
  },
  {
    title: "Blockchain and Smart Contracts Security",
    provider: "LinkedIn Learning",
    year: "2023",
  },
  {
    title: "Cisco Networking Foundations",
    provider: "LinkedIn Learning",
    year: "2023",
  },
  {
    title: "Introduction to Network Routing",
    provider: "LinkedIn Learning",
    year: "2023",
  },
  { title: "Networking Basics", provider: "LinkedIn Learning", year: "2023" },
  {
    title: "Basics of Generative Artificial Intelligence",
    provider: "LinkedIn Learning",
    year: "2023",
  },
  {
    title: "Introduction to Machine Learning",
    provider: "LinkedIn Learning",
    year: "2023",
  },
];

export interface Project {
  title: string;
  organization: string;
  from: string;
  to: string;
  type: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Cybersecurity & Internet Safety Workshop",
    organization: "IIT Delhi (World Technocon)",
    from: "1 Mar 2025",
    to: "2 Mar 2025",
    type: "Workshop",
    description:
      "Participated in a national-level cybersecurity and internet safety workshop conducted at IIT Delhi, covering threat analysis, network security, and safe browsing practices.",
  },
  {
    title: "Cybersecurity Training",
    organization: "IIT Bombay (Acmegrade)",
    from: "10 Mar 2023",
    to: "10 Apr 2023",
    type: "Internship / Training",
    description:
      "Completed intensive cybersecurity training under Acmegrade at IIT Bombay, focusing on practical network security, vulnerability assessment, and cybersecurity tools.",
  },
  {
    title: "AI & ML Learning Projects",
    organization: "LinkedIn Learning",
    from: "2023",
    to: "2024",
    type: "Self-Learning Project",
    description:
      "Completed multiple structured AI and ML learning paths covering regression, classification, neural networks, generative AI, and business applications of artificial intelligence.",
  },
];

export const achievements: string[] = [
  "Member, JOSH Central Coordination Team, 2025",
  "Multiple professional certifications in AI, ML, Networking & Cybersecurity (2023–Present)",
  "Participated in national-level cybersecurity workshops at IIT Delhi & IIT Bombay (2023–25)",
  "Active self-learner via LinkedIn Learning (2023–Present)",
];

export const softSkills: string[] = [
  "Confident",
  "Good Listener",
  "Team Player",
  "Disciplined",
  "Positive Thinker",
  "Analytical Thinking",
  "Willingness to Learn",
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Marathi", level: "Basic" },
];

export const hobbies: string[] = [
  "Web Development",
  "Internet Surfing & Exploring New Technologies",
  "Playing Games",
];
