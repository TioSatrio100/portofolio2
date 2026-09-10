export interface Project {
  id: string;
  title: string;
  category: string;
  accent: string;
  statusDot: string;
  badge?: string;
  imageUrl: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  projectUrl: string;
}

export const projects: Project[] = [
  {
    id: "glowsync",
    title: "Glowsync",
    category: "E-Commerce",
    accent: "#7C3AED",
    statusDot: "#A78BFA",
    badge: "LIVE",
    imageUrl: "/glowsync.png",
    description:
      "An e-commerce platform providing personalized skincare recommendations based on facial health analysis.",
    techStack: ["Next.js", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/TioSatrio100/GlowSyncSkin",
    projectUrl: "https://glowsync.vercel.app/",
  },
  {
    id: "lansiapaham",
    title: "Lansia Paham",
    category: "AI Agent",
    accent: "#F59E0B",
    statusDot: "#FCD34D",
    badge: "AWARD 3RD",
    imageUrl: "/images/Lansia-Paham.png",
    description:
      "AI platform to assist seniors in filling out forms and scanning for security threats and fraud to create a safe community for the elderly. 3rd Place Winner of Hackathon Bit Bash 2026.",
    techStack: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/TioSatrio100/Lansia-Paham-v2",
    projectUrl: "https://github.com/TioSatrio100/Lansia-Paham-v2",
  },
  {
    id: "efishery",
    title: "Efishery",
    category: "Machine Learning",
    accent: "#0EA5E9",
    statusDot: "#38BDF8",
    imageUrl: "/efishery.png",
    description:
      "Classifying fresh and non-fresh fish images using TensorFlow to maintain quality distribution from producers to consumers.",
    techStack: ["Python", "TensorFlow"],
    githubUrl:
      "https://github.com/TioSatrio100/classification-of-fresh-and-non-fresh-fish-images",
    projectUrl:
      "https://github.com/TioSatrio100/classification-of-fresh-and-non-fresh-fish-images",
  },
  {
    id: "photobooth",
    title: "Digital Photobooth",
    category: "Web App",
    accent: "#EC4899",
    statusDot: "#F9A8D4",
    imageUrl: "/photobooth.png",
    description:
      "Capture your moments with style and create lasting digital memories.",
    techStack: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/TioSatrio100/digitalphotobox",
    projectUrl: "https://digitalphotoboks.vercel.app/",
  },
];

export const projectsContext = projects
  .map(
    (project) =>
      `- ${project.title} (${project.category}): ${project.description} Tech: ${project.techStack.join(
        ", "
      )}. Repo: ${project.githubUrl}. Live: ${project.projectUrl}.`
  )
  .join("\n");
