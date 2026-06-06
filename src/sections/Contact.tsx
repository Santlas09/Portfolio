import { SectionWrapper } from "@/components/SectionWrapper";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="bg-slate-900 px-6 py-24 text-white">
      <SectionWrapper className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-400">
          Contact
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Let&apos;s build something together
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I&apos;m open to university projects, internships, freelance work, and
          collaboration opportunities.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a
            href="mailto:sabtiago8401@gmail.com"
            className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-sky-400"
          >
            <FaEnvelope className="text-2xl text-sky-400" />
            <h3 className="mt-4 font-bold">Email</h3>
            <p className="mt-2 text-sm text-slate-400">
              sabtiago8401@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/Santlas09"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-sky-400"
          >
            <FaGithub className="text-2xl text-sky-400" />
            <h3 className="mt-4 font-bold">GitHub</h3>
            <p className="mt-2 text-sm text-slate-400">github.com/Santlas09</p>
          </a>

          <a
            href="https://linkedin.com/in/santlas"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-sky-400"
          >
            <FaLinkedin className="text-2xl text-sky-400" />
            <h3 className="mt-4 font-bold">LinkedIn</h3>
            <p className="mt-2 text-sm text-slate-400">
              linkedin.com/in/santlas
            </p>
          </a>
        </div>
      </SectionWrapper>
    </section>
  );
}