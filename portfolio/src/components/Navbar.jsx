import { Github, Linkedin } from "lucide-react";
import PROFILE from "../data/profile";
import NavLink from "./UI/NavLink";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#certs">Certifications</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60">
            <Github className="w-5 h-5" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
