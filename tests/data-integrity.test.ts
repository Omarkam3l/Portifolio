import { describe, it, expect } from "vitest";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { workExperience, education } from "@/data/experience";
import { skillGroups } from "@/data/skills";

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
    expect(projects.length).toBeGreaterThanOrEqual(4);
    const slugs = projects.map((p) => p.id);
    expect(new Set(slugs).size).toBe(slugs.length);

    projects.forEach((proj) => {
      expect(proj.title).toBeTruthy();
      expect(proj.description).toBeTruthy();
      expect(proj.technologies.length).toBeGreaterThan(0);
      expect(proj.image).toBeTruthy();
    });
  });

  it("verifies work experience and education records", () => {
    expect(workExperience.length).toBeGreaterThanOrEqual(1);
    expect(workExperience[0].company).toContain("Digital Egypt Pioneers Initiative");
    expect(workExperience[0].bulletPoints.length).toBeGreaterThan(0);

    expect(education.length).toBeGreaterThanOrEqual(1);
    expect(education[0].institution).toContain("Monufia National University");
    expect(education[0].degree).toContain("Bachelor");
  });

  it("verifies skill groups", () => {
    expect(skillGroups.length).toBeGreaterThanOrEqual(4);
    skillGroups.forEach((group) => {
      expect(group.category).toBeTruthy();
      expect(group.skills.length).toBeGreaterThan(0);
    });
  });
});
