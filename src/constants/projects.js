import lmsImage from "../assets/projects/lms.webp";
import aiNewsImage from "../assets/projects/ai-news.webp";
import csvImporterImage from "../assets/projects/csv-importer.webp";

export const featuredProjects = [
  {
    title: "StudyNotion",
    image: lmsImage,
    description:
      "Full-stack learning platform for course creation, purchase and enrollment, with JWT auth, OTP verification, RBAC and 25+ REST APIs including Razorpay payments.",
    tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Razorpay"],
    github: "https://github.com/anuragrajpoott/study_notion",
    live: "https://study-notion-ten-mu.vercel.app",
  },
  {
    title: "TruthLens",
    image: aiNewsImage,
    description:
      "AI news credibility analyzer returning confidence scores, explanations and warning flags via OpenRouter LLMs, secured with rate limiting and validation.",
    tech: ["React", "Node.js", "Express", "OpenRouter", "MongoDB"],
    github: "https://github.com/anuragrajpoott/ai_news_credibility_analyzer",
    live: "https://ai-news-credibility-analyzer.vercel.app",
  },
  {
    title: "GrowEasy AI CSV Importer",
    image: csvImporterImage,
    description:
      "CSV importer that previews uploads, maps headers to CRM fields with OpenRouter AI, normalizes phones, emails and statuses, and reports imported vs skipped records.",
    tech: ["React", "Node.js", "OpenRouter", "MongoDB"],
    github: "https://github.com/anuragrajpoott/groweasy_ai_csv_importer",
    live: "https://groweasy-ai-csv-importer-red.vercel.app",
  },
];

export const otherProjects = [
  {
    title: "Authentication System",
    description:
      "JWT authentication with email verification, password reset and role-based authorization.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/anuragrajpoott/auth",
    live: "https://auth-weld-psi.vercel.app",
  },
  {
    title: "Blog Platform",
    description:
      "Full-stack blogging application with authentication and complete CRUD functionality.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/anuragrajpoott/blog",
    live: "https://blog-flame-kappa-20.vercel.app",
  },
  {
    title: "File Upload Service",
    description:
      "Cloud-based file upload platform with validation, storage and secure APIs.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/anuragrajpoott/file_upload",
    live: "https://file-upload.vercel.app",
  },
  {
    title: "Todo Application",
    description:
      "Authentication-based task manager supporting complete CRUD operations.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/anuragrajpoott/todo",
    live: "https://todo-one-sigma-88.vercel.app",
  },
  {
    title: "Ecommerce Store",
    description:
      "Responsive shopping interface with product browsing and cart management.",
    tech: ["React", "Redux", "Tailwind CSS"],
    github: "https://github.com/anuragrajpoott/ecom",
    live: "https://ecom-six-blond.vercel.app",
  },
  {
    title: "Top Courses",
    description:
      "Course discovery platform built using reusable React components.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/anuragrajpoott/top_courses",
    live: "https://top-courses-zeta-orcin.vercel.app",
  },
  {
    title: "Testimonials",
    description:
      "Interactive testimonial showcase demonstrating reusable UI components.",
    tech: ["React", "CSS"],
    github: "https://github.com/anuragrajpoott/testimonials",
    live: "https://testimonials-one-amber.vercel.app",
  },
];