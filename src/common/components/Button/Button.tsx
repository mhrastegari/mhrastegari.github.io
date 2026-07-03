import clsx from 'clsx';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface IButtonProps
  extends PropsWithChildren,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: IButtonProps) {
  return (
    <a
      {...rest}
      className={clsx(
        className,
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition duration-200',
        {
          'bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-slate-800':
            variant === 'primary',
          'border border-slate-200 bg-white text-ink hover:-translate-y-0.5 hover:border-slate-300':
            variant === 'secondary',
          'text-slate-600 hover:text-ink': variant === 'ghost',
        }
      )}
    >
      {children}
    </a>
  );
}
