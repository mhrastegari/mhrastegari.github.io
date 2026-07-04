import { Icon, IconName } from '@components/Icon';
import { SectionTitle } from '@components/SectionTitle';

const startYear = 2020;

export function AboutSection() {
  const yearsOfExperience = new Date().getFullYear() - startYear;

  const items = [
    {
      icon: 'app',
      text: `${yearsOfExperience}+ years across web, mobile, and desktop apps`,
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

  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle eyebrow="About" title="Building for web, mobile, and desktop">
          I care about readable structure, reusable components, reliable APIs, and clear
          user flows.
        </SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
}
