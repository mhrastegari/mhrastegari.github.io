import { SectionTitle } from '@components/SectionTitle';

const items = [
  '6+ years across web, mobile, and desktop applications',
  'Production React.js and TypeScript work connected to real backend systems',
  'Backend experience with ASP.NET Core, REST APIs, EF Core, and PostgreSQL basics',
  'Strong background in Blazor, Bit Platform, .NET MAUI, and Xamarin',
];

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
              I am a Software Developer / Frontend-focused Full-stack Developer working
              across React.js, TypeScript, ASP.NET Core, Blazor, .NET MAUI, Xamarin, and
              scalable application systems.
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
                key={item}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <div className="mb-4 h-2 w-12 rounded bg-accent" />
                <p className="font-semibold leading-7 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
