import { IExperience, ILink, IProject, ISkillGroup } from '@models/portfolio';

export const profileLinks: ILink[] = [
  {
    title: 'GitHub',
    href: 'https://github.com/mhrastegari',
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/mhrastegari77',
  },
  {
    title: 'Dev.to',
    href: 'https://dev.to/mhrastegari',
  },
];

export const resumeHref = '/MHRastegari-en-us-new-short.pdf';

export const experiences: IExperience[] = [
  {
    company: 'Maccan Travel',
    role: 'Frontend / Full-stack Developer',
    period: '2024 - Present',
    team: 'React.js / ASP.NET Core',
    highlights: [
      'Build travel and tourism features with React, TypeScript, and ASP.NET Core.',
      'Work on forms, APIs, state management, and data-driven screens.',
      'Improve reusable UI patterns and responsive web experiences.',
    ],
  },
  {
    company: 'Bit Platform / Bit Foundation',
    role: 'Software / Cross-platform Developer',
    period: '2020 - 2024',
    team: '.NET MAUI / Blazor',
    highlights: [
      'Contributed to Bit BlazorUI, project templates, and reusable UI components.',
      'Built UI patterns for scalable Blazor and .NET applications.',
      'Worked across .NET MAUI, Xamarin, web technologies, and shared app logic.',
    ],
  },
  {
    company: 'Abrisham Online Clinic Platform',
    role: 'Software / Cross-platform Developer',
    period: '2022 - 2023',
    team: '.NET MAUI / Blazor',
    highlights: [
      'Built healthcare and clinical workflows with Blazor and .NET technologies.',
      'Worked on shared UI across web, mobile, and desktop applications.',
      'Integrated screens with backend data while keeping the UX responsive.',
    ],
  },
  {
    company: 'Functionland',
    role: 'Software / Cross-platform Developer',
    period: '2021 - 2022',
    team: '.NET MAUI / Blazor',
    highlights: [
      'Contributed to FxFiles and file-management application UI.',
      'Built cross-platform product screens with .NET technologies.',
      'Worked around storage features, service integration, and practical UX.',
    ],
  },
];

export const projects: IProject[] = [
  {
    title: 'Bit Platform / Bit BlazorUI',
    type: 'UI Library / Project Templates',
    description: 'Project templates and Blazor UI component work for reusable .NET application foundations.',
    stack: ['Blazor', 'C#', 'Bit Platform', 'UI Components'],
    color: '#0065ef',
    icon: 'layers',
    href: 'https://github.com/bitfoundation/bitplatform',
    image: '/bit-icon-512.png',
  },
  {
    title: 'Maccan Travel / Tourism Systems',
    type: 'Web / PWA',
    description: 'Travel and tourism product interfaces built with React, TypeScript, Tailwind, and ASP.NET Core APIs.',
    stack: ['React.js', 'TypeScript', 'Tailwind', 'PWA', 'C#', 'ASP.NET Core'],
    color: '#578993',
    icon: 'web',
    href: 'https://maccan.travel/en/',
    image: '/maccan.svg',
  },
  {
    title: 'WeTime',
    type: 'Mobile / Web / Cross-platform App',
    description: 'A cross-platform women’s health app built with Blazor, .NET MAUI, and ASP.NET Core.',
    stack: ['C#', 'ASP.NET Core', 'Blazor', '.NET MAUI', 'Cross-platform UI'],
    color: '#ffffff',
    icon: 'app',
    href: 'https://play.google.com/store/apps/details?id=com.wetime.periodtracker',
    image: '/wetime.png',
  },
  {
    title: 'FxFiles',
    type: 'Mobile / Desktop / Storage App',
    description: 'A cross-platform file-management and storage product for Functionland.',
    stack: ['.NET MAUI', 'Blazor', 'C#', 'Storage Workflows'],
    color: '#328c8c',
    icon: 'database',
    href: 'https://github.com/Functionland/Fx-Files',
    image: '/fxfiles.png',
  },
];

export const skillGroups: ISkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'code',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'PWA',
      'HTML',
      'CSS',
      'SCSS',
      'Tailwind',
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: [
      'C#',
      'ASP.NET Core',
      'REST APIs',
      'EF Core',
      'SQL',
      'PostgreSQL',
    ],
  },
  {
    title: '.NET',
    icon: 'app',
    items: [
      'Blazor',
      '.NET MAUI',
      'Xamarin',
      'UWP',
      'Hybrid apps',
    ],
  },
  {
    title: 'Tools',
    icon: 'tool',
    items: [
      'GitHub',
      'Figma',
      'Azure DevOps',
      'Visual Studio',
      'VS Code',
      'Cursor',
      'Xcode',
      'Rider',
    ],
  },
];
