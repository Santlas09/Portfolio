import { FaAward } from "react-icons/fa";

const achievements = [
  {
    title: "Second Place — Desafío X-Pro",
    organization: "X-Pro",
    description:
      "Recognized with second place in the Desafío X-Pro, an academic innovation challenge focused on solving real-world problems through teamwork, research, and project development.",
    date: "2026",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-400">
          Achievements
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Awards & Recognition
        </h2>

        <div className="mt-10">
          {achievements.map((achievement) => (
            <article
              key={achievement.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-sky-400"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-sky-500/10 p-3 text-sky-400">
                  <FaAward size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">{achievement.title}</h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {achievement.organization} • {achievement.date}
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}