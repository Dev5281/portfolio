export default function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="px-3 py-2 rounded-xl hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
    >
      {children}
    </a>
  );
}
