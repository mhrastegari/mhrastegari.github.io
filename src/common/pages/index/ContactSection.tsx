import { Icon } from '@components/Icon';

const email = 'mh.rastegari@outlook.com';

export function ContactSection() {
  return (
    <section id="contact" className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <div className="mb-3 text-xs font-bold uppercase text-teal-300">
              Contact
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              Let's build practical, scalable software.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              I am open to roles, product work, and collaborations around React.js,
              TypeScript, ASP.NET Core, Blazor, .NET MAUI, and cross-platform
              application development.
            </p>
          </div>

          <div className="rounded-lg bg-blue-100 p-6 text-ink shadow-soft">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-accent shadow-sm">
                <Icon name="mail" className="h-5 w-5" />
              </div>

              <div>
                <div className="text-xs font-bold uppercase text-accent">Email</div>
                <div className="text-sm text-slate-600">Best way to reach me</div>
              </div>
            </div>

            <a
              href={`mailto:${email}`}
              className="block break-words text-xl font-bold text-ink hover:text-accent md:text-2xl"
            >
              {email}
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              For roles, product work, collaboration, or technical conversations around
              web apps, backend APIs, cross-platform software, and reusable UI systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
