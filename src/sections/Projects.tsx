import { SectionWrapper } from "@/components/SectionWrapper";
import { projects } from "@/data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-24 text-white">
      <SectionWrapper className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-400">
          Projects
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-sky-400"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>

              <span className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                {project.type}
              </span>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4 text-slate-400">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub className="transition hover:text-white" />
                </a>

                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FaExternalLinkAlt className="transition hover:text-white" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}