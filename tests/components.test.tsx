import { describe, it, expect } from "vitest";
import { projects } from "@/data/projects";

describe("Projects Verification Tests", () => {
  it("includes all key projects with proper positioning", () => {
    const codegraph = projects.find((p) => p.id === "codegraph-rag");
    expect(codegraph).toBeDefined();
    expect(codegraph?.title).toBe("CodeGraph RAG");
    expect(codegraph?.layout).toBe("large");

    const traceforge = projects.find((p) => p.id === "traceforge");
    expect(traceforge).toBeDefined();
    expect(traceforge?.title).toBe("TraceForge");
    expect(traceforge?.layout).toBe("compact");

    const kathir = projects.find((p) => p.id === "kathir");
    expect(kathir).toBeDefined();
    expect(kathir?.title).toBe("Kathir");
    expect(kathir?.layout).toBe("compact");

    const vision = projects.find((p) => p.id === "vision-heatmap");
    expect(vision).toBeDefined();
    expect(vision?.title).toBe("Spatial Heatmap & Vision Analytics");
    expect(vision?.layout).toBe("large");
  });
});
