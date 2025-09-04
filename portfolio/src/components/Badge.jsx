export default function Badge({ children }) {
  return (
    <span className="inline-block rounded-full border px-3 py-1 text-sm">
      {children}
    </span>
  );
}
