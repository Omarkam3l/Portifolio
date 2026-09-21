import { describe, it, expect } from "vitest";
import { portfolio, projects, skills, experience, socialLinks, siteConfig } from "@/data";
import {
  validatePortfolioData,
  validateProjects,
  validateSkills,
  validateExperience,
  validateSiteConfig,
} from "@/lib/validation";

describe("Data Layer Integrity Tests", () => {
  it("validates portfolio personal data", () => {
    const issues = validatePortfolioData(portfolio);
    const errors = issues.filter((i) => i.type === "error");
    expect(errors).toHaveLength(0);
    expect(portfolio.name).toBeTruthy();
    expect(portfolio.title).toBeTruthy();
    expect(portfolio.hero.headline).toBeTruthy();
  });

  it("validates projects catalog structure", () => {
    const issues = validateProjects(projects);
    const errors = issues.filter((i) => i.type === "error");
    expect(errors).toHaveLength(0);
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });

  it("verifies unique project IDs and slugs", () => {
    const ids = projects.map((p) => p.id);
    const slugs = projects.map((p) => p.slug);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("verifies architecture graph edges reference valid node IDs", () => {
    projects.forEach((proj) => {
      const nodeIds = new Set(proj.architecture.nodes.map((n) => n.id));
      proj.architecture.edges.forEach((edge) => {
        expect(
          nodeIds.has(edge.from),
          `Edge 'from' "${edge.from}" in project "${proj.id}" must exist in nodes`
        ).toBe(true);
        expect(
          nodeIds.has(edge.to),
          `Edge 'to' "${edge.to}" in project "${proj.id}" must exist in nodes`
        ).toBe(true);
      });
    });
  });

  it("validates skills categorization", () => {
    const issues = validateSkills(skills);
    const errors = issues.filter((i) => i.type === "error");
    expect(errors).toHaveLength(0);
    expect(skills.length).toBeGreaterThanOrEqual(4);

    // Verify proficiency levels are restrained (proficient/familiar, not fake expert)
    skills.forEach((cat) => {
      cat.skills.forEach((skill) => {
        if (skill.level) {
          expect(["proficient", "familiar"]).toContain(skill.level);
        }
      });
    });
  });

  it("validates experience timeline data", () => {
    const issues = validateExperience(experience);
    const errors = issues.filter((i) => i.type === "error");
    expect(errors).toHaveLength(0);
    experience.forEach((item) => {
      expect(["work", "milestone", "project"]).toContain(item.type);
    });
  });

  it("validates site configuration", () => {
    const issues = validateSiteConfig(siteConfig);
    const errors = issues.filter((i) => i.type === "error");
    expect(errors).toHaveLength(0);
    expect(siteConfig.navigation.length).toBeGreaterThan(0);
  });
});
