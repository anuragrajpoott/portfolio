import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const EMAIL = "anuragrajpoot2468@gmail.com";
export const RESUME_URL = "/Anurag_Dangi_SDE_Resume.pdf";

export const SOCIALS = [
  { name: "GitHub", href: "https://github.com/anuragrajpoott", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/anuragrajpoott", icon: FaLinkedin },
  { name: "LeetCode", href: "https://leetcode.com/u/anuragrajpoott", icon: SiLeetcode },
  { name: "Email", href: `mailto:${EMAIL}`, icon: Mail },
];

// Shared scroll-reveal animation
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};
