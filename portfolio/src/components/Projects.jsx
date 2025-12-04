import { motion } from "framer-motion";
import Section from "./Section";
import Badge from "./Badge";
import { ExternalLink, Github } from "lucide-react";
import PROJECTS from "../data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" icon={ExternalLink}>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group rounded-2xl border bg-white/50 dark:bg-neutral-900/50 hover:shadow-sm p-5"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
              <div className="flex items-center gap-2 shrink-0">
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm hover:underline"
                    aria-label={`${p.title} - source code`}
                  >
                    Code <Github className="w-4 h-4" />
                  </a>
                )}

                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm hover:underline"
                    aria-label={`${p.title} - live demo`}
                  >
                    Live <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {p.desc}
            </p>

            {/* Stack */}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>

            {/* Impact */}
            {p.impact?.length ? (
              <ul className="mt-4 list-disc list-inside text-sm space-y-1 text-neutral-700 dark:text-neutral-300">
                {p.impact.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            ) : null}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
