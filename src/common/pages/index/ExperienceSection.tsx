import { SectionTitle } from '@components/SectionTitle';
import { experiences } from '@shared/profile';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle eyebrow="Experience" title="Software development experience">
          Experience across React products, ASP.NET Core APIs, Blazor UI systems, and
          cross-platform .NET applications for web, mobile, and desktop.
        </SectionTitle>

        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="grid gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[0.34fr_0.66fr]"
            >
              <div>
                <div className="text-sm font-bold text-accent">{experience.period}</div>
                <h3 className="mt-2 text-xl font-bold text-ink">
                  {experience.company}
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {experience.role}
                </p>
                <p className="mt-1 text-sm text-slate-500">{experience.team}</p>
              </div>

              <div>
                <p className="leading-7 text-slate-600">{experience.description}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
