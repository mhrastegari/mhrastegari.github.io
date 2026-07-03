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
    description:
      'Building production travel and tourism systems with React.js, TypeScript, ASP.NET Core, and API-driven architecture, with a focus on maintainable product features and reliable integrations.',
    highlights: [
      'Develops reusable React and TypeScript features for travel and tourism workflows.',
      'Works across component architecture, state management, forms, APIs, and data-driven screens.',
      'Contributes to ASP.NET Core features and responsive web experiences.',
    ],
  },
  {
    company: 'Bit Platform / Bit Foundation',
    role: 'Software / Cross-platform Developer',
    period: '2020 - 2024',
    team: '.NET MAUI / Blazor',
    description:
      'Worked on Blazor, Bit Platform, and cross-platform application systems, including reusable UI components and .NET-based foundations for web, mobile, and desktop applications.',
    highlights: [
      'Contributed to Blazor and Bit BlazorUI component-library work.',
      'Built reusable UI patterns for scalable .NET and Blazor applications.',
      'Worked with .NET MAUI, Xamarin, C#, web technologies, and shared application logic.',
    ],
  },
  {
    company: 'Abrisham Online Clinic Platform',
    role: 'Software / Cross-platform Developer',
    period: '2020 - 2024',
    team: '.NET MAUI / Blazor',
    description:
      'Contributed to healthcare platform features using Blazor and .NET cross-platform technologies, with attention to maintainable UI components, service integration, and practical user experiences.',
    highlights: [
      'Implemented features for clinical and healthcare workflows.',
      'Worked with shared UI systems across web, mobile, and desktop surfaces.',
      'Integrated application screens with backend data while maintaining responsive and accessible experiences.',
    ],
  },
  {
    company: 'Functionland',
    role: 'Software / Cross-platform Developer',
    period: '2020 - 2024',
    team: '.NET MAUI / Blazor',
    description:
      'Worked on Functionland-related cross-platform app experiences, including file-management interfaces, storage-related product features, and application UI built around .NET technologies.',
    highlights: [
      'Contributed to FxFiles and related file-management application UI work.',
      'Worked on mobile, desktop, and web product surfaces built with .NET technologies.',
      'Built reusable features around file management, service integration, and practical UX.',
    ],
  },
];

export const projects: IProject[] = [
  {
    title: 'Bit Platform / Bit BlazorUI',
    type: 'UI Library / Project Templates',
    description:
      'Project templates and component-library work around Bit Platform and BlazorUI, focused on reusable UI foundations for .NET and Blazor applications.',
    stack: ['Blazor', 'C#', 'Bit Platform', 'UI Components'],
    color: '#0065ef',
    href: 'https://github.com/bitfoundation/bitplatform',
    image: '/bit-icon-512.png',
  },
  {
    title: 'Maccan Travel / Tourism Systems',
    type: 'Web / PWA',
    description:
      'Production travel and tourism product interfaces built with React.js, TypeScript, Tailwind, and ASP.NET Core-backed APIs, focused on responsive UX, maintainable feature structure, and real business workflows.',
    stack: ['React.js', 'TypeScript', 'Tailwind', 'PWA', 'C#', 'ASP.NET Core'],
    color: '#578993',
    href: 'https://maccan.travel/en/',
    image: '/maccan.svg',
  },
  {
    title: 'WeTime',
    type: 'Mobile / Web / Cross-platform App',
    description:
      'A cross-platform women’s health application for pregnancy, ovulation, and menstrual calendar workflows, built with Blazor, .NET MAUI, ASP.NET Core, and reusable UI patterns.',
    stack: ['C#', 'ASP.NET Core', 'Blazor', '.NET MAUI', 'Cross-platform UI'],
    color: '#ffffff',
    href: 'https://play.google.com/store/apps/details?id=com.wetime.periodtracker',
    image: '/wetime.png',
  },
  {
    title: 'FxFiles',
    type: 'Mobile / Desktop / Storage App',
    description:
      'File-management and storage-related product UI work for Functionland, with emphasis on app-quality screens, service-connected workflows, and maintainable structure.',
    stack: ['.NET MAUI', 'Blazor', 'C#', 'Storage Workflows'],
    color: '#328c8c',
    href: 'https://github.com/Functionland/Fx-Files',
    image: '/fxfiles.png',
  },
];

export const skillGroups: ISkillGroup[] = [
  {
    title: 'Frontend',
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
    items: [
      'C#',
      'ASP.NET Core',
      'REST APIs',
      'API integration',
      'Entity Framework Core',
      'SQL',
      'PostgreSQL',
      'Authentication flows',
    ],
  },
  {
    title: '.NET & Cross-platform',
    items: [
      'Blazor',
      '.NET MAUI',
      'Xamarin',
      'Hybrid apps',
      'Cross-platform UI',
    ],
  },
  {
    title: 'Tools',
    items: [
      'GitHub',
      'Azure DevOps',
      'Visual Studio',
      'VS Code',
      'Rider',
      'Figma',
      'Zeplin',
    ],
  },
];
