import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { featuredProjects, otherProjects } from "../../../constants/projects";
import { fadeUp } from "../../../constants/site";
import SectionHeading from "../../ui/SectionHeading";

function ProjectLinks({ project, size = 16 }) {
  return (
    <div className="flex items-center gap-2">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code`}
          className="icon-btn size-9"
        >
          <FaGithub size={size} />
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demo`}
          className="inline-flex size-9 items-center justify-center rounded-full bg-accent text-white transition hover:-translate-y-0.5 hover:opacity-90"
        >
          <ArrowUpRight size={size} />
        </a>
      )}
    </div>
  );
}

function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured projects"
            title="Some things I've built."
            subtitle="Selected projects that highlight my skills and experience."
          />

          <button type="button" onClick={() => setShowAll((v) => !v)} className="btn-outline" aria-expanded={showAll}>
            {showAll ? "Show Less" : "View All Projects"}
            <ArrowRight size={16} className={`transition-transform ${showAll ? "-rotate-90" : ""}`} />
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="card group flex flex-col overflow-hidden"
            >
              <div className="overflow-hidden border-b border-line">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{project.description}</p>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                  <ProjectLinks project={project} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <h3 className="mb-6 mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                Other projects
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project) => (
                  <article key={project.title} className="card flex flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold">{project.title}</h4>
                      <ProjectLinks project={project} size={14} />
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
