import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Database, KeyRound, Layers, ShieldCheck, Workflow } from "lucide-react";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiZod,
} from "react-icons/si";

import SectionHeading from "../ui/SectionHeading";

const SKILLS = [
  { name: "C++", icon: SiCplusplus, group: "Languages" },
  { name: "JavaScript", icon: SiJavascript, group: "Languages" },
  { name: "TypeScript", icon: SiTypescript, group: "Languages" },
  { name: "Python", icon: SiPython, group: "Languages" },
  { name: "SQL", icon: Database, group: "Languages" },
  { name: "React", icon: SiReact, group: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, group: "Frontend" },
  { name: "Redux Toolkit", icon: SiRedux, group: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, group: "Frontend" },
  { name: "Vite", icon: SiVite, group: "Frontend" },
  { name: "HTML5", icon: SiHtml5, group: "Frontend" },
  { name: "CSS3", icon: SiCss, group: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, group: "Backend" },
  { name: "Express.js", icon: SiExpress, group: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, group: "Backend" },
  { name: "MongoDB", icon: SiMongodb, group: "Backend" },
  { name: "REST APIs", icon: Workflow, group: "Backend" },
  { name: "JWT Auth", icon: KeyRound, group: "Backend" },
  { name: "RBAC", icon: ShieldCheck, group: "Backend" },
  { name: "MVC", icon: Layers, group: "Backend" },
  { name: "Zod", icon: SiZod, group: "Backend" },
  { name: "Git", icon: SiGit, group: "Tools" },
  { name: "GitHub", icon: SiGithub, group: "Tools" },
  { name: "Docker", icon: SiDocker, group: "Tools" },
  { name: "Postman", icon: SiPostman, group: "Tools" },
  { name: "CI/CD", icon: SiGithubactions, group: "Tools" },
  { name: "Vercel", icon: SiVercel, group: "Tools" },
];

const FILTERS = ["All", "Languages", "Frontend", "Backend", "Tools"];

function Skills() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? SKILLS : SKILLS.filter((s) => s.group === filter);

  return (
    <section id="skills" className="section">
      <div className="container-custom grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="My skills"
            title="Technologies I work with."
            subtitle="Tools and technologies I use to build modern, scalable web applications."
          />

          <div role="tablist" aria-label="Filter skills" className="mt-8 inline-flex flex-wrap gap-1 rounded-full border border-line p-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  filter === f ? "bg-accent text-white" : "text-muted hover:text-fg"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.ul layout className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {visible.map(({ name, icon: Icon }) => (
              <motion.li
                key={name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="card group flex flex-col items-center justify-center gap-2.5 px-2 py-4 text-center"
              >
                <Icon size={24} className="text-muted transition-colors group-hover:text-accent" />
                <span className="text-xs font-medium">{name}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

export default Skills;
