import { motion } from "framer-motion";
import { Code2, Drama, FolderGit2, Medal, Trophy, Workflow } from "lucide-react";

import { fadeUp } from "../../constants/site";
import SectionHeading from "../ui/SectionHeading";

const STATS = [
  { icon: Code2, value: "500+", label: "LeetCode problems solved" },
  { icon: FolderGit2, value: "10+", label: "Projects built" },
  { icon: Workflow, value: "40+", label: "REST APIs shipped" },
  { icon: Trophy, value: "SIH", label: "Smart India Hackathon finalist" },
];

const HIGHLIGHTS = [
  { icon: Medal, text: "Captain, State Basketball Team" },
  { icon: Drama, text: "Head of Events, Pratyaksh Drama Society" },
];

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-custom grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Achievements"
            title="Milestones & highlights."
            subtitle="Key achievements and recognitions from my journey so far."
          />

          <motion.ul {...fadeUp} className="mt-8 space-y-3">
            {HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-muted">
                <Icon size={16} className="text-accent" />
                {text}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="card p-6 sm:p-8"
            >
              <Icon size={22} className="text-accent" />
              <p className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">{value}</p>
              <p className="mt-2 text-sm text-muted">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
