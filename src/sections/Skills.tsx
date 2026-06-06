const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Flutter",
  "Dart",
  "MySQL",
  "MongoDB",
  "SQLite",
  "Git",
  "GitHub",
  "Figma",
  "VS Code",
];

export function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-400">
          Skills
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Technologies I work with
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-slate-900 p-4 text-center text-slate-300 transition hover:border-sky-400 hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}