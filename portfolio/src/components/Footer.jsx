import PROFILE from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 dark:border-neutral-800 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3 opacity-80">
          <a href="#home" className="hover:underline">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
