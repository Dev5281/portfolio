import Section from "./Section";
import PROFILE from "../data/profile";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" icon={Mail}>
      <div className="rounded-2xl border p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left */}
          <div>
            <h4 className="font-semibold mb-2">Let’s build something great</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-prose">
              I’m open to front-end roles, internships, and freelance projects.
              Reach out via email or connect with me on LinkedIn.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm"
              >
                <Mail className="w-4 h-4" /> {PROFILE.email}
              </a>
              <a
                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm"
              >
                <Phone className="w-4 h-4" /> {PROFILE.phone}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form));
              window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
                `Inquiry from ${data.name || "Portfolio Visitor"}`
              )}&body=${encodeURIComponent(
                `Name: ${data.name || ""}\nEmail: ${
                  data.email || ""
                }\nMessage: ${data.message || ""}`
              )}`;
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                name="name"
                placeholder="Your name"
                className="rounded-xl border px-3 py-2 bg-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="rounded-xl border px-3 py-2 bg-transparent"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              className="w-full rounded-xl border px-3 py-2 bg-transparent"
            />
            <button
              type="submit"
              className="rounded-2xl border px-4 py-2 text-sm font-medium hover:shadow-sm inline-flex items-center gap-2"
            >
              Send Message <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
