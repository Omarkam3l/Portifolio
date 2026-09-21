import { describe, it, expect } from "vitest";
import { projects } from "@/data/projects";

describe("Projects Verification Tests", () => {
  it("includes all 8 key projects with verified details and repository URLs", () => {
    expect(projects.length).toBe(8);

    const forgeAi = projects.find((p) => p.id === "forge-ai");
    expect(forgeAi).toBeDefined();
    expect(forgeAi?.title).toContain("ForgeAI");
    expect(forgeAi?.github).toBe("https://github.com/Omarkam3l/ForgeAI");

    const kathir = projects.find((p) => p.id === "kathir");
    expect(kathir).toBeDefined();
    expect(kathir?.title).toContain("Kathir");
    expect(kathir?.github).toBe("https://github.com/Omarkam3l/Kathir_final");

    const motionIq = projects.find((p) => p.id === "motion-iq");
    expect(motionIq).toBeDefined();
    expect(motionIq?.title).toContain("MotionIQ");
    expect(motionIq?.github).toBe("https://github.com/Omarkam3l/MotionIQ");

    const bigData = projects.find((p) => p.id === "big-data-pipeline");
    expect(bigData).toBeDefined();
    expect(bigData?.title).toContain("Big Data");

    const adventureWorks = projects.find((p) => p.id === "adventure-works");
    expect(adventureWorks).toBeDefined();
    expect(adventureWorks?.title).toContain("AdventureWorks2022");

    const codegraph = projects.find((p) => p.id === "codegraph");
    expect(codegraph).toBeDefined();
    expect(codegraph?.title).toContain("CodeGraph");

    const traceforge = projects.find((p) => p.id === "traceforge-sdk");
    expect(traceforge).toBeDefined();
    expect(traceforge?.title).toContain("TraceForge SDK");
    expect(traceforge?.github).toBe("https://github.com/Omarkam3l/Trace");
    expect(traceforge?.demo).toBe("https://pypi.org/project/traceforge-sdk/");

    const peopleMovement = projects.find((p) => p.id === "people-movement-analytics");
    expect(peopleMovement).toBeDefined();
    expect(peopleMovement?.title).toContain("People Movement Analytics");
    expect(peopleMovement?.github).toBe("https://github.com/Omarkam3l/People-analytics");
  });
});
