# Portfolio Content & Customization Guide

Welcome! This portfolio is strictly **content-driven**.

**You never need to edit UI components, CSS styles, or page layouts to update your information.**
All editable data lives in clean, strongly-typed files inside:

```text
src/data/
  ├── siteConfig.ts   # Site metadata, navigation, SEO, theme defaults
  ├── portfolio.ts    # Name, title, hero, bios, focus areas, learning topics
  ├── projects.ts     # Project catalog, architecture nodes, metrics, case studies
  ├── skills.ts       # Categorized skills and proficiency levels
  ├── experience.ts   # Career timeline, milestones, and project history
  └── social.ts       # Social links, resume URL, contact configuration
```

---

## 1. Changing Your Name, Title, and Bio

Open [src/data/portfolio.ts](file:///c:/Users/omar%20sharaby/Documents/Portifolio/src/data/portfolio.ts):

```typescript
export const portfolio: PortfolioData = {
  name: "Omar Sharaby",
  title: "AI & Systems Engineer",
  status: "Available for engineering roles & technical collaborations",
  location: "Cairo, Egypt",
  shortBio: "Building intelligent developer tooling, knowledge graph RAG pipelines, and runtime observability systems.",
  fullBio: [
    "First paragraph explaining your background and engineering focus...",
    "Second paragraph detailing your architecture philosophy...",
    "Third paragraph discussing your continuous learning...",
  ],
  // ...
};
```

---

## 2. Customizing the Hero Section

Open [src/data/portfolio.ts](file:///c:/Users/omar%20sharaby/Documents/Portifolio/src/data/portfolio.ts):

```typescript
hero: {
  headline: "Engineering intelligent systems, graph RAG pipelines & runtime observability.",
  description: "Specializing in code knowledge graphs, bounded multi-hop reasoning, runtime instrumentation, and full-stack software architecture.",
  primaryCta: {
    label: "Explore Projects",
    href: "#projects",
  },
  secondaryCta: {
    label: "Get in Touch",
    href: "#contact",
  },
  terminalLines: [
    "status: initialized",
    "focus: code_knowledge_graphs + runtime_tracing",
    "architecture: decoupled_data_layer",
    "ready: press [Ctrl+K] for command palette",
  ],
}
```

---

## 3. Adding a New Project

Open [src/data/projects.ts](file:///c:/Users/omar%20sharaby/Documents/Portifolio/src/data/projects.ts). Add a new object to the `projects` array:

```typescript
{
  id: "distributed-cache",
  slug: "distributed-cache", // Dynamic route URL: /projects/distributed-cache
  title: "Distributed Memory Cache",
  summary: "A high-performance in-memory cache with consistent hashing.",
  description: "Detailed breakdown of the memory model, concurrency controls, and partition tolerances...",
  category: "Systems & Backend",
  technologies: ["Rust", "gRPC", "Tokio", "Raft"],
  featured: true, // Shows spotlight layout in projects section
  links: {
    github: "https://github.com/yourname/distributed-cache",
    demo: "https://cache-demo.yourname.dev",
  },
  metrics: [
    { label: "P99 Latency", value: "< 1.2ms", detail: "Under 50,000 req/sec benchmark load" },
    { label: "Storage", value: "Slab Allocator", detail: "Zero GC pauses" }
  ],
  architecture: {
    nodes: [
      { id: "client", label: "gRPC Client", role: "Dispatches cache reads/writes", type: "input" },
      { id: "ring", label: "Hash Ring Router", role: "Maps key hash to partition node", type: "process" },
      { id: "storage", label: "Slab Storage Engine", role: "Contiguous memory blocks", type: "storage" },
      { id: "response", label: "Response Stream", role: "Protobuf payload", type: "output" },
    ],
    edges: [
      { from: "client", to: "ring", label: "hash key" },
      { from: "ring", to: "storage", label: "read/write chunk" },
      { from: "storage", to: "response", label: "serialize" },
    ],
  },
  highlights: [
    "Consistent hash ring implementation with 256 virtual nodes per physical peer.",
    "Lock-free ring buffer for metric dispatching.",
  ],
  challenges: ["Handling node join/leave churn without high network rebalancing overhead."],
  solutions: ["Implemented bounded key migrations using Raft consensus heartbeats."],
  results: ["Zero packet drops during live cluster node addition tests."],
  images: ["/images/projects/distributed-cache.svg"],
}
```

> [!NOTE]
> Adding a project here **automatically**:
> - Creates the dedicated `/projects/[slug]` case study page
> - Adds the project to the homepage filter tabs
> - Registers the project in the keyboard command palette (`Ctrl+K`)
> - Adds the URL to `sitemap.xml` for SEO

---

## 4. Removing, Reordering, or Featuring Projects

In [src/data/projects.ts](file:///c:/Users/omar%20sharaby/Documents/Portifolio/src/data/projects.ts):
- **To Reorder**: Move the project object up or down in the array.
- **To Remove**: Delete the object from the array.
- **To Feature**: Set `featured: true` (featured projects appear first in an expanded wide layout).

---

## 5. Adding Architecture Nodes & Connections

Every project can define an interactive system flow graph:

```typescript
architecture: {
  nodes: [
    // type can be "input" | "process" | "storage" | "output"
    { id: "ingest", label: "AST Parser", role: "Parses source code into AST trees", type: "process" },
    { id: "db", label: "Neo4j Graph Store", role: "Persists caller/callee relations", type: "storage" },
  ],
  edges: [
    // from and to MUST match node id values
    { from: "ingest", to: "db", label: "store AST nodes" },
  ]
}
```

The system automatically validates that all edge references exist and renders an interactive SVG flow diagram.

---

## 6. Updating Skills & Competencies

Open [src/data/skills.ts](file:///c:/Users/omar%20sharaby/Documents/Portifolio/src/data/skills.ts):

```typescript
{
  name: "Systems & Backend",
  icon: "Server", // Brain, Code, Server, Layout, Database, Wrench
  skills: [
    { name: "Rust", level: "familiar", highlight: false },
    { name: "Python AsyncIO", level: "proficient", highlight: true },
  ],
}
```

* Levels supported: `"proficient"` or `"familiar"`.
* Set `highlight: true` to add an accent ring to that skill.

---

## 7. Updating Career Journey & Milestones

Open [src/data/experience.ts](file:///c:/Users/omar%20sharaby/Documents/Portifolio/src/data/experience.ts):

```typescript
{
  period: "2023 — 2024",
  role: "Systems Software Engineer",
  organization: "Acme Robotics",
  location: "Remote",
  description: "Designed telemetry ingestion pipeline for edge sensors.",
  highlights: [
    "Reduced telemetry payload size by 35% with Protobuf encoding.",
    "Integrated live anomaly detection stream.",
  ],
  tech: ["Python", "Docker", "Kafka", "PostgreSQL"],
  type: "work", // "work" | "milestone" | "project"
}
```

---

## 8. Updating Social Links & Contact Details

Open [src/data/social.ts](file:///c:/Users/omar%20sharaby/Documents/Portifolio/src/data/social.ts):

```typescript
export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/your-username", username: "your-username", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/your-profile", username: "your-profile", icon: "Linkedin" },
  { platform: "Email", url: "mailto:you@domain.com", username: "you@domain.com", icon: "Mail" },
];

export const contactConfig = {
  email: "you@domain.com",
  resumeUrl: "/resume.pdf", // Place your resume.pdf into the public/ directory
  statusText: "Open to discussing engineering opportunities and research collaborations.",
  officeLocation: "Cairo, Egypt (UTC+2)",
};
```

---

## 9. Changing Navigation & Theme Defaults

Open [src/data/siteConfig.ts](file:///c:/Users/omar%20sharaby/Documents/Portifolio/src/data/siteConfig.ts):

```typescript
export const siteConfig: SiteConfig = {
  siteName: "Omar Sharaby | Portfolio",
  title: "Omar Sharaby — AI & Systems Engineer",
  description: "Production-quality portfolio...",
  url: "https://omarsharaby.dev",
  author: "Omar Sharaby",
  theme: {
    defaultMode: "dark", // "dark" | "light" | "system"
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Focus", href: "#focus" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Learning", href: "#learning" },
    { label: "Contact", href: "#contact" },
  ],
};
```

---

## 10. Placing Images and Project Screenshots

Store images inside the `public/` folder:

```text
public/
  images/
    profile/
      avatar.png      # Place profile photos here
    projects/
      my-project.svg  # Place diagrams/screenshots here
  resume.pdf          # Place your downloadable CV here
```

Reference them with leading slashes in your data files:
```typescript
images: ["/images/projects/my-project.svg"]
```

---

## 11. Using the Built-In Visual Content Editor (`/editor`)

For rapid editing without opening code files directly:
1. Run `npm run dev` and navigate to `http://localhost:3000/editor`
2. Edit fields, toggle featured projects, and adjust skills interactively
3. Go to the **Export & Persist** tab
4. Click **Copy TypeScript** or **Download JSON**
5. Paste the generated code into `src/data/`
