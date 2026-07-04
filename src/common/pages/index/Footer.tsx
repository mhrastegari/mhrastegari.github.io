import { Icon } from '@components/Icon';
import { ILink } from '@models/portfolio';

interface IFooterProps {
  links: ILink[];
}

export function Footer({ links }: IFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink px-4 pb-8 text-sm text-slate-400 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>© {currentYear} Mohammad Hossein Rastegarinia</div>

        <div className="flex flex-wrap items-center gap-4">
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

          <a
            href="#top"
            aria-label="Back to top"
            className="ms-8 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/30 hover:text-white"
          >
            <Icon name="arrow-up" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
