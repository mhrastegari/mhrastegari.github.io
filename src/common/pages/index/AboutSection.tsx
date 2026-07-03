import { Icon, IconName } from '@components/Icon';
import { SectionTitle } from '@components/SectionTitle';

const items = [
  {
    icon: 'app',
    text: '6+ years across web, mobile, and desktop apps',
  },
  {
    icon: 'code',
    text: 'React and TypeScript for modern web products',
  },
  {
    icon: 'server',
    text: 'ASP.NET Core, REST APIs, EF Core, and PostgreSQL',
  },
  {
    icon: 'layers',
    text: 'Blazor, Bit Platform, .NET MAUI, and Xamarin experience',
  },
] satisfies { icon: IconName; text: string }[];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle eyebrow="About" title="Software development with product context">
          I care about application code that survives real product pressure: readable
          structure, reusable components, reliable API integration, and clear user
          flows.
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg bg-ink p-8 text-white shadow-soft">
            <p className="text-xl font-semibold leading-8">
              I am a Software Developer building products with React, TypeScript,
              ASP.NET Core, Blazor, and .NET MAUI.
            </p>

            <p className="mt-5 leading-7 text-slate-300">
              My current direction is building modern product experiences with React and
              TypeScript, backed by API-driven architecture, .NET backend experience,
              and a strong background in cross-platform app development.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.text}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-accent shadow-sm">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <p className="font-semibold leading-7 text-slate-800">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
