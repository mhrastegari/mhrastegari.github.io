import { Icon } from '@components/Icon';
import { SectionTitle } from '@components/SectionTitle';
import { experiences } from '@shared/profile';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle eyebrow="Experience" title="Software development experience">
          Experience across React, ASP.NET Core, Blazor, and cross-platform .NET
          applications for web, mobile, and desktop.
        </SectionTitle>

        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="grid gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[0.34fr_0.66fr]"
            >
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-accent">
                  <Icon name="briefcase" className="h-5 w-5" />
                </div>

                <div className="text-sm font-bold text-accent">{experience.period}</div>

                <h3 className="mt-2 text-xl font-bold text-ink">
                  {experience.company}
                </h3>

                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {experience.role}
                </p>

                <p className="mt-1 text-sm text-slate-500">{experience.team}</p>
              </div>

              <ul className="space-y-2 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-7">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white text-accent">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
