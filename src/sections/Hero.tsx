import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-slate-950 px-6 pt-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sky-400">
          Personal Portfolio
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Hi, I&apos;m Santiago Reyes Herrera
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-300 md:text-3xl">
          Systems Engineering Student & Developer
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I build web and mobile applications using modern technologies such as
          React, Next.js, Python, Flutter, and databases.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex gap-5 text-2xl text-slate-400">
          <a href="https://github.com/Santlas09" target="_blank">
            <FaGithub className="transition hover:text-white" />
          </a>

          <a href="https://linkedin.com/in/santlas" target="_blank">
            <FaLinkedin className="transition hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}