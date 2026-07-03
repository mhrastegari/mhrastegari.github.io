import type { IconName } from '@components/Icon';

export interface ILink {
  title: string;
  href: string;
}

export interface IExperience {
  company: string;
  role: string;
  period: string;
  team: string;
  highlights: string[];
}

export interface IProject {
  title: string;
  type: string;
  description: string;
  stack: string[];
  color: string;
  icon: IconName;
  href?: string;
  image?: string;
}

export interface ISkillGroup {
  title: string;
  icon: IconName;
  items: string[];
}
