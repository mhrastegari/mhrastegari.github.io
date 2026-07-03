import { SectionTitle } from '@components/SectionTitle';
import { projects } from '@shared/profile';

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle eyebrow="Projects" title="Product and platform work">
          Selected work across UI libraries, travel interfaces, PWA-ready web apps, and
          cross-platform product experiences.
        </SectionTitle>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-80 flex-col overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
            >
              {project.image ? (
                <div
                  className="flex h-40 items-center justify-center p-8"
                  style={{ backgroundColor: project.color }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-36 max-w-64 object-contain"
                  />
                </div>
              ) : (
                <div
                  className="flex h-40 items-center justify-center p-8 text-center text-2xl font-black text-ink"
                  style={{ backgroundColor: project.color }}
                >
                  React + TypeScript
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-bold uppercase text-accent">
                  {project.type}
                </div>
                <h3 className="mt-3 text-2xl font-bold text-ink">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 text-sm font-bold text-accent hover:text-teal-800"
                  >
                    View project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
