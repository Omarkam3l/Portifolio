import {
  PortfolioData,
  Project,
  SkillCategory,
  ExperienceItem,
  SiteConfig,
} from "@/types/portfolio";

export interface ValidationIssue {
  type: "error" | "warning";
  field: string;
  message: string;
}

export function validatePortfolioData(data: PortfolioData): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (!data.name || data.name.trim() === "") {
    issues.push({ type: "error", field: "name", message: "Name is required." });
  }
  if (!data.title || data.title.trim() === "") {
    issues.push({ type: "error", field: "title", message: "Title is required." });
  }
  if (!data.hero?.headline || data.hero.headline.trim() === "") {
    issues.push({ type: "error", field: "hero.headline", message: "Hero headline is required." });
  }
  if (!data.focusAreas || data.focusAreas.length === 0) {
    issues.push({ type: "warning", field: "focusAreas", message: "Focus areas should not be empty." });
  }

  return issues;
}

export function validateProjects(projects: Project[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();

  projects.forEach((proj, idx) => {
    const prefix = `projects[${idx}]`;

    // ID check
    if (!proj.id) {
      issues.push({ type: "error", field: `${prefix}.id`, message: "Project ID is required." });
    } else if (seenIds.has(proj.id)) {
      issues.push({ type: "error", field: `${prefix}.id`, message: `Duplicate project ID "${proj.id}".` });
    } else {
      seenIds.add(proj.id);
    }

    // Slug check
    if (!proj.slug) {
      issues.push({ type: "error", field: `${prefix}.slug`, message: "Project slug is required." });
    } else if (seenSlugs.has(proj.slug)) {
      issues.push({ type: "error", field: `${prefix}.slug`, message: `Duplicate project slug "${proj.slug}".` });
    } else {
      seenSlugs.add(proj.slug);
    }

    // Title & Summary
    if (!proj.title) {
      issues.push({ type: "error", field: `${prefix}.title`, message: "Project title is required." });
    }
    if (!proj.summary) {
      issues.push({ type: "error", field: `${prefix}.summary`, message: "Project summary is required." });
    }

    // Architecture integrity check
    if (proj.architecture) {
      const nodeIds = new Set(proj.architecture.nodes.map((n) => n.id));
      proj.architecture.edges.forEach((edge, edgeIdx) => {
        if (!nodeIds.has(edge.from)) {
          issues.push({
            type: "error",
            field: `${prefix}.architecture.edges[${edgeIdx}]`,
            message: `Architecture edge references non-existent 'from' node "${edge.from}".`,
          });
        }
        if (!nodeIds.has(edge.to)) {
          issues.push({
            type: "error",
            field: `${prefix}.architecture.edges[${edgeIdx}]`,
            message: `Architecture edge references non-existent 'to' node "${edge.to}".`,
          });
        }
      });
    }
  });

  return issues;
}

export function validateSkills(skills: SkillCategory[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  if (!skills || skills.length === 0) {
    issues.push({ type: "warning", field: "skills", message: "Skills catalog is empty." });
  }
  skills.forEach((cat, idx) => {
    if (!cat.name) {
      issues.push({ type: "error", field: `skills[${idx}].name`, message: "Category name is required." });
    }
    if (!cat.skills || cat.skills.length === 0) {
      issues.push({ type: "warning", field: `skills[${idx}]`, message: `Category "${cat.name}" has no skills.` });
    }
  });
  return issues;
}

export function validateExperience(exp: ExperienceItem[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  exp.forEach((item, idx) => {
    if (!item.role) {
      issues.push({ type: "error", field: `experience[${idx}].role`, message: "Role is required." });
    }
    if (!item.period) {
      issues.push({ type: "error", field: `experience[${idx}].period`, message: "Period is required." });
    }
    if (!item.type || !["work", "milestone", "project"].includes(item.type)) {
      issues.push({
        type: "error",
        field: `experience[${idx}].type`,
        message: "Experience type must be 'work', 'milestone', or 'project'.",
      });
    }
  });
  return issues;
}

export function validateSiteConfig(config: SiteConfig): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  if (!config.siteName) {
    issues.push({ type: "error", field: "siteName", message: "siteName is required." });
  }
  if (!config.navigation || config.navigation.length === 0) {
    issues.push({ type: "warning", field: "navigation", message: "Navigation items are missing." });
  }
  return issues;
}
