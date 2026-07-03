import { ILink } from '@models/portfolio';
import { resumeHref } from '@shared/profile';

interface IHeaderProps {
  links: ILink[];
}

const navItems = [
  { title: 'About', href: '#about' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Contact', href: '#contact' },
];

export function Header({ links }: IHeaderProps) {
  const github = links.find((link) => link.title === 'GitHub');

  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-slate-50/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-10 items-center justify-center rounded-lg bg-ink text-xs font-bold text-white">
            MHR
          </span>
          <span className="hidden text-sm font-bold text-ink xs:block">
            M. H. Rastegari
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noreferrer"
              className="hidden text-sm font-semibold text-slate-600 hover:text-ink xs:inline"
            >
              GitHub
            </a>
          )}
          <a
            href={resumeHref}
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm ring-1 ring-slate-200 hover:ring-slate-300"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
