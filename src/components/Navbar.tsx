export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold text-white">
          Santlas_
        </a>

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-sky-400">About</a>
          <a href="#skills" className="hover:text-sky-400">Skills</a>
          <a href="#projects" className="hover:text-sky-400">Projects</a>
          <a href="#achievements" className="hover:text-sky-400">Achievements</a>
          <a href="#contact" className="hover:text-sky-400">Contact</a>
        </div>
      </nav>
    </header>
  );
}