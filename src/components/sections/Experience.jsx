import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

import { fadeUp } from "../../constants/site";
import SectionHeading from "../ui/SectionHeading";

const WORK = [
  {
    period: "Aug 2026 – Present",
    title: "Full Stack SDE Intern",
    org: "Schemes Book · Remote",
    text: "Building returns, logistics, e-commerce and staff workflows with React, TypeScript, Node.js and PostgreSQL. JWT auth, RBAC, concurrency control and audit logging.",
  },
  {
    period: "Jun 2025 – Jul 2025",
    title: "Software Development Intern",
    org: "Ideal Minds · Indore",
    text: "Built 15+ REST APIs and 10+ reusable React components for the Steepi Fitness platform in Agile sprints.",
  },
];

const EDUCATION = [
  {
    period: "2022 – 2026",
    title: "Bachelor of Engineering",
    org: "IET DAVV, Indore",
    text: "CGPA 7.5/10. Coursework: DSA, OOP, DBMS, Operating Systems, Computer Networks.",
  },
];

function Timeline({ icon: Icon, heading, items }) {
  return (
    <motion.div {...fadeUp}>
      <h3 className="flex items-center gap-3 font-semibold">
        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
          <Icon size={17} />
        </span>
        {heading}
      </h3>

      <ol className="ml-4 mt-6 space-y-8 border-l border-line">
        {items.map((item) => (
          <li key={item.title} className="relative pl-7">
            <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-bg" />
            <p className="text-xs font-medium text-muted">{item.period}</p>
            <p className="mt-1 font-semibold">{item.title}</p>
            <p className="text-sm text-muted">{item.org}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading
          eyebrow="Experience & education"
          title="My journey."
          subtitle="A timeline of my work experience, education and key milestones."
        />

        <div className="grid gap-12 md:grid-cols-2">
          <Timeline icon={Briefcase} heading="Work Experience" items={WORK} />
          <Timeline icon={GraduationCap} heading="Education" items={EDUCATION} />
        </div>
      </div>
    </section>
  );
}

export default Experience;
