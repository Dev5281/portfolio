import { motion } from "framer-motion";
import { Code2, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import PROFILE from "../data/profile";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm mb-4">
              <Code2 className="w-4 h-4" />
              <span>{PROFILE.role}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Hi, I’m {PROFILE.name}.
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-prose">
              {PROFILE.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium hover:shadow-sm"
              >
                View Projects <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium hover:shadow-sm"
              >
                Contact Me <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {PROFILE.location}
              </span>
              <a
                className="inline-flex items-center gap-1 hover:underline"
                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              >
                <Phone className="w-4 h-4" /> {PROFILE.phone}
              </a>
              <a
                className="inline-flex items-center gap-1 hover:underline"
                href={`mailto:${PROFILE.email}`}
              >
                <Mail className="w-4 h-4" /> {PROFILE.email}
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
              <div className="relative rounded-3xl p-6 border bg-white/70 dark:bg-neutral-900/70 backdrop-blur shadow-sm">
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  "I love turning ideas into performant, accessible web
                  experiences — from polished UIs to robust APIs."
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                  {[
                    "React",
                    "Tailwind",
                    "Node",
                    "Express",
                    "MongoDB",
                    "MySQL",
                    "Redux",
                    "Git",
                    "REST",
                  ].map((t) => (
                    <div key={t} className="rounded-xl border py-2">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
