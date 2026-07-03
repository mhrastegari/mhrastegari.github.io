import { ILink } from '@models/portfolio';

interface IFooterProps {
  links: ILink[];
}

export function Footer({ links }: IFooterProps) {
  return (
    <footer className="bg-ink px-4 pb-8 text-sm text-slate-400 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>© 2026 Mohammad Hossein Rastegarinia</div>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
