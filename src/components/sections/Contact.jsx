import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { EMAIL, SOCIALS, fadeUp } from "../../constants/site";
import SectionHeading from "../ui/SectionHeading";

// Decorative flowing lines, tinted with the accent color
function Waves() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      fill="none"
      className="pointer-events-none absolute -bottom-24 -right-24 w-[38rem] max-w-none text-accent opacity-25"
    >
      {Array.from({ length: 18 }, (_, i) => (
        <path
          key={i}
          d={`M0 ${520 - i * 14} C 180 ${420 - i * 22}, 320 ${640 - i * 10}, 600 ${200 - i * 12}`}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <Waves />

      <div className="container-custom relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            eyebrow="Let's connect"
            title="Let's build something amazing together."
            subtitle="I'm open to full-time roles, interesting projects and collaborations. My inbox is always open."
          />
        </div>

        <motion.div {...fadeUp} className="flex flex-col items-start gap-6">
          <a href={`mailto:${EMAIL}`} className="btn-primary px-7 py-3.5 text-base">
            Get in Touch
            <ArrowRight size={18} />
          </a>

          <a href={`mailto:${EMAIL}`} className="text-sm text-muted transition hover:text-accent">
            {EMAIL}
          </a>

          <div className="flex gap-3">
            {SOCIALS.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={name}
                className="icon-btn"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="absolute inset-x-0 bottom-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Anurag Dangi
      </p>
    </section>
  );
}

export default Contact;
