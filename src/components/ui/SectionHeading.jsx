import { motion } from "framer-motion";

import { fadeUp } from "../../constants/site";

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div {...fadeUp}>
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        <span className="h-0.5 w-6 rounded-full bg-accent" />
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-md leading-7 text-muted">{subtitle}</p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
