export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
      <p>
        © {currentYear} Santiago Reyes Herrera. Built with Next.js and Tailwind
        CSS.
      </p>
    </footer>
  );
}