import { Button } from '@components/Button';
import { profileLinks, resumeHref } from '@shared/profile';

export function HeroSection() {
  const github = profileLinks.find((link) => link.title === 'GitHub');
  const linkedIn = profileLinks.find((link) => link.title === 'LinkedIn');
  const portrait = '/mh-rastegari-portrait.jpg';

  return (
    <section id="top" className="overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-12 p-4 md:grid-cols-3 md:items-center md:px-6 md:py-20">
        <div className="md:col-span-2">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-teal-100 bg-white px-4 py-2 text-xs font-semibold text-accent shadow-sm md:text-sm">
            React.js • TypeScript • ASP.NET Core • Blazor • .NET MAUI
          </div>

          <div className="mb-6 flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-3 shadow-sm md:hidden">
            <img
              src={portrait}
              alt="MH Rastegari"
              width="80"
              height="80"
              loading="eager"
              decoding="async"
              className="h-20 w-20 rounded-lg object-cover"
            />

            <div>
              <div className="text-sm font-bold uppercase text-accent">
                MH Rastegari
              </div>

              <div className="mt-1 text-sm font-semibold leading-6 text-slate-700">
                Software Developer
              </div>

              <div className="mt-1 text-xs font-medium text-slate-500">
                React • ASP.NET Core • Blazor • .NET
              </div>
            </div>
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.02] text-ink sm:text-5xl md:text-7xl">
            Mohammad Hossein Rastegarinia
          </h1>

          <p className="mt-5 text-xl font-semibold text-slate-700">
            Software Developer / Frontend-focused Full-stack Developer
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I build scalable web, mobile, and desktop applications with a strong focus
            on React.js, TypeScript, and production UI architecture, backed by ASP.NET
            Core, REST API integration, Blazor, .NET MAUI, Xamarin, and PWA experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View Projects</Button>

            <Button href={resumeHref} variant="secondary">
              View Resume
            </Button>

            {github && (
              <Button
                href={github.href}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
              >
                GitHub
              </Button>
            )}

            {linkedIn && (
              <Button
                href={linkedIn.href}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
              >
                LinkedIn
              </Button>
            )}
          </div>
        </div>

        <div className="hidden md:col-span-1 md:block md:justify-self-end">
          <div className="overflow-hidden rounded-lg border border-white bg-white shadow-soft">
            <img
              src={portrait}
              alt="MH Rastegari"
              width="640"
              height="640"
              loading="eager"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />

            <div className="border-t border-slate-100 p-5">
              <div className="text-sm font-bold uppercase text-accent">
                Current Direction
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-600">
                <span className="rounded-lg bg-slate-50 p-3">React + TS</span>
                <span className="rounded-lg bg-slate-50 p-3">ASP.NET Core</span>
                <span className="rounded-lg bg-slate-50 p-3">Blazor UI</span>
                <span className="rounded-lg bg-slate-50 p-3">.NET MAUI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
