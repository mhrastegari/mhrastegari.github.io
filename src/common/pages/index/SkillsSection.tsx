import { Icon } from '@components/Icon';
import { SectionTitle } from '@components/SectionTitle';
import { skillGroups } from '@shared/profile';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle eyebrow="Skills" title="Technology stack">
          The tools and technologies I use to build practical applications across web,
          backend, mobile, and desktop.
        </SectionTitle>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-accent">
                  <Icon name={group.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-ink">{group.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
