import { SVGProps } from 'react';

export type IconName =
  | 'app'
  | 'briefcase'
  | 'check'
  | 'code'
  | 'database'
  | 'external'
  | 'layers'
  | 'server'
  | 'spark'
  | 'tool'
  | 'web';

interface IIconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

const paths: Record<IconName, string[]> = {
  app: [
    'M7 4.5h10A2.5 2.5 0 0 1 19.5 7v10a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17V7A2.5 2.5 0 0 1 7 4.5Z',
    'M8 8h8M8 12h8M8 16h4',
  ],
  briefcase: [
    'M8.5 7.5V6A2.5 2.5 0 0 1 11 3.5h2A2.5 2.5 0 0 1 15.5 6v1.5',
    'M4.5 8.5h15v9A2.5 2.5 0 0 1 17 20H7a2.5 2.5 0 0 1-2.5-2.5v-9Z',
    'M4.5 12.5h15',
  ],
  check: ['m5 12 4.5 4.5L19 7'],
  code: ['m8.5 8-4 4 4 4', 'm15.5 8 4 4-4 4', 'm13.5 5-3 14'],
  database: [
    'M5 7c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Z',
    'M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7',
    'M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5',
  ],
  external: ['M8 8h8v8', 'M16 8 7.5 16.5', 'M6 5.5h-1.5v14h14V18'],
  layers: ['m12 4 8 4-8 4-8-4 8-4Z', 'm4 12 8 4 8-4', 'm4 16 8 4 8-4'],
  server: ['M5 5.5h14v5H5v-5Z', 'M5 13.5h14v5H5v-5Z', 'M8 8h.01M8 16h.01'],
  spark: ['M12 3.5 14.1 9l5.4 2-5.4 2L12 18.5 9.9 13l-5.4-2 5.4-2L12 3.5Z'],
  tool: [
    'M14.7 6.3a4 4 0 0 0-5 5L4.5 16.5a2.1 2.1 0 0 0 3 3l5.2-5.2a4 4 0 0 0 5-5l-2.5 2.5-3-3 2.5-2.5Z',
  ],
  web: [
    'M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z',
    'M3.5 12h17',
    'M12 3.5c2.3 2.5 3.4 5.3 3.4 8.5s-1.1 6-3.4 8.5c-2.3-2.5-3.4-5.3-3.4-8.5s1.1-6 3.4-8.5Z',
  ],
};

export function Icon({ name, ...rest }: IIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
