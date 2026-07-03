import { PropsWithChildren } from 'react';

interface ISectionTitleProps extends PropsWithChildren {
  eyebrow: string;
  title: string;
}

export function SectionTitle({ eyebrow, title, children }: ISectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <div className="mb-3 text-xs font-bold uppercase text-accent">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      {children && (
        <p className="mt-4 text-base leading-7 text-slate-600">{children}</p>
      )}
    </div>
  );
}
