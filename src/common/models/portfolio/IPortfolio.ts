export interface ILink {
  title: string;
  href: string;
}

export interface IExperience {
  company: string;
  role: string;
  period: string;
  team: string;
  description: string;
  highlights: string[];
}

export interface IProject {
  title: string;
  type: string;
  description: string;
  stack: string[];
  color: string;
  href?: string;
  image?: string;
}

export interface ISkillGroup {
  title: string;
  items: string[];
}
