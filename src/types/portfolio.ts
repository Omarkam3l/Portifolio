export interface NavigationItem {
  label: string;
  href: string;
}

export interface SeoConfig {
  ogImage: string;
  twitterHandle?: string;
  keywords: string[];
}

export interface ThemeConfig {
  defaultMode: "dark" | "light" | "system";
  accentColor?: string;
}

export interface SiteConfig {
  siteName: string;
  title: string;
  description: string;
  url: string;
  author: string;
  navigation: NavigationItem[];
  theme: ThemeConfig;
  seo: SeoConfig;
}

export interface FocusArea {
  title: string;
  description: string;
  tags: string[];
  iconName?: string;
}

export interface LearningTopic {
  topic: string;
  category: string;
  description: string;
  status: "in-progress" | "exploring" | "planned";
}

export interface HeroConfig {
  headline: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  terminalLines?: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  status: string;
  location: string;
  shortBio: string;
  fullBio: string[];
  hero: HeroConfig;
  focusAreas: FocusArea[];
  currentLearning: LearningTopic[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  type?: "input" | "process" | "storage" | "output";
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label?: string;
}

export interface ProjectArchitecture {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  paper?: string;
  docs?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  technologies: string[];
  featured: boolean;
  links: ProjectLinks;
  metrics: ProjectMetric[];
  architecture: ProjectArchitecture;
  highlights: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  images: string[];
}

export interface SkillItem {
  name: string;
  level?: "proficient" | "familiar";
  highlight?: boolean;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
  type: "work" | "milestone" | "project";
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}
