import { describe, it, expect } from "vitest";
import { profile } from "@/data/profile";
import { projects, projectFilterTags } from "@/data/projects";
import { workExperience, education } from "@/data/experience";
import { coreSkillCategories } from "@/data/skills";

describe("Portfolio Data Integrity Tests", () => {
  it("verifies profile metadata and contact information", () => {
    expect(profile.name).toBe("Omar Sharaby");
    expect(profile.role).toBe("AI & Systems Engineer");
    expect(profile.bio).toBeTruthy();
    expect(profile.socials.github).toContain("github.com");
    expect(profile.socials.emailRaw).toContain("@");
    expect(profile.currentFocus.length).toBeGreaterThanOrEqual(3);
  });

  it("verifies curated projects catalog", () => {
    expect(projects.length).toBe(8);
    const slugs = projects.map((p) => p.id);
    expect(new Set(slugs).size).toBe(slugs.length);

    projects.forEach((proj) => {
      expect(proj.title).toBeTruthy();
      expect(proj.description).toBeTruthy();
      expect(proj.technologies.length).toBeGreaterThan(0);
      expect(proj.github).toBeTruthy();
    });

    expect(projectFilterTags.length).toBeGreaterThan(10);
    expect(projectFilterTags[0]).toBe("All");
  });

  it("verifies work experience and education records", () => {
    expect(workExperience.length).toBeGreaterThanOrEqual(1);
    expect(workExperience[0].company).toContain("Digital Egypt Pioneers Initiative");
    expect(workExperience[0].bulletPoints.length).toBeGreaterThan(0);

    expect(education.length).toBeGreaterThanOrEqual(1);
    expect(education[0].institution).toContain("Monufia National University");
    expect(education[0].degree).toContain("Bachelor");
  });

  it("verifies skill groups have ZERO duplicates across all categories and no Frontend category", () => {
    expect(coreSkillCategories.length).toBe(6);
    expect(coreSkillCategories.some((c) => c.category.toLowerCase().includes("frontend"))).toBe(false);

    const allSkills: string[] = [];
    const seenSkills = new Set<string>();
    const duplicateSkills: string[] = [];

    coreSkillCategories.forEach((group) => {
      expect(group.category).toBeTruthy();
      expect(group.skills.length).toBeGreaterThan(0);

      group.skills.forEach((skill) => {
        allSkills.push(skill);
        if (seenSkills.has(skill.toLowerCase())) {
          duplicateSkills.push(skill);
        } else {
          seenSkills.add(skill.toLowerCase());
        }
      });
    });

    // Verify absolutely no duplicate skills exist across categories
    expect(duplicateSkills).toEqual([]);
    expect(seenSkills.size).toBe(allSkills.length);
  });
});
