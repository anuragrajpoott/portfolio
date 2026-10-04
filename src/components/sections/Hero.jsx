import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import profilePic from "../../assets/profile.webp";
import { RESUME_URL, SOCIALS } from "../../constants/site";

function Hero() {
  return (
    <section id="home" className="flex min-h-svh items-center overflow-hidden pb-12 pt-24">
      <div className="container-custom grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-soft px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Open to opportunities
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Building software that <span className="text-accent">creates impact.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            I'm Anurag Dangi, a Full Stack Developer crafting secure, scalable
            web applications with React, TypeScript, Node.js and PostgreSQL.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={16} />
            </a>

            <a href={RESUME_URL} download className="btn-outline">
              Download Resume
              <Download size={16} />
            </a>
          </div>

          <div className="mt-9 flex gap-3">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-x-[10%] top-[8%] -z-10 aspect-square rounded-full bg-accent-soft blur-3xl" />

          {/* Transparent cut-out that blends into the page, fading at the bottom edge */}
          <img
            src={profilePic}
            alt="Anurag Dangi"
            fetchPriority="high"
            className="w-full max-w-none object-contain grayscale lg:w-[120%] [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
          />

          <div className="card absolute bottom-[18%] left-0 px-4 py-3 shadow-xl shadow-black/5 backdrop-blur sm:-left-6">
            <p className="text-xs text-muted">Currently</p>
            <p className="text-sm font-semibold">Full Stack SDE Intern @ Schemes Book</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
