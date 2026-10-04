import { motion } from "framer-motion";
import { Code2, GraduationCap, Lightbulb, MapPin, Server, Users } from "lucide-react";

import { fadeUp } from "../../constants/site";
import SectionHeading from "../ui/SectionHeading";

const TRAITS = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    text: "500+ DSA problems solved in C++. I enjoy turning complex problems into simple solutions.",
  },
  {
    icon: Server,
    title: "Backend Focused",
    text: "APIs, auth, RBAC and data models built to be secure and to scale.",
  },
  {
    icon: Users,
    title: "Team Player",
    text: "SIH finalist, state basketball captain and head of events. I like building together.",
  },
  {
    icon: Code2,
    title: "Detail Oriented",
    text: "Clean, maintainable code with clear architecture and thoughtful UX.",
  },
];

const FACTS = [
  { icon: MapPin, text: "Indore, India" },
  { icon: GraduationCap, text: "B.E., IET DAVV · 2026" },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="About me" title="Turning ideas into real-world solutions." />

          <motion.p {...fadeUp} className="mt-6 max-w-lg leading-8 text-muted">
            I'm a Full Stack Developer and Bachelor of Engineering graduate from
            IET DAVV, Indore. I build production-ready applications with the
            MERN stack, TypeScript and PostgreSQL, with a strong interest in
            backend engineering, clean architecture and maintainable code.
          </motion.p>

          <motion.ul {...fadeUp} className="mt-8 flex flex-wrap gap-3">
            {FACTS.map(({ icon: Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted">
                <Icon size={15} className="text-accent" />
                {text}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {TRAITS.map(({ icon: Icon, title, text }, i) => (
            <motion.article
              key={title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="card p-6"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
