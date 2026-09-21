# Portifolio — Content-Driven Systems Architecture

A production-quality personal portfolio engineered with a **strictly decoupled content layer**, designed for AI and systems engineers.

All personal information, project schemas, architecture diagrams, skills, timeline checkpoints, and SEO settings are separated from UI presentation logic. You can update your entire portfolio months from now simply by editing `src/data/` without touching component code.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing across all data layers)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS design tokens for Dark/Light themes
- **Themes**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark mode default, Light and System support)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) with `prefers-reduced-motion` compliance
- **Testing**: [Vitest](https://vitest.dev/) with automated data integrity and functional tests

---

## 🏛️ System Architecture

```text
src/data/ (Pure Content & Configuration)
   │
   ├── siteConfig.ts   → Metadata, navigation, SEO, theme presets
   ├── portfolio.ts    → Bio, hero, focus areas, continuous learning
   ├── projects.ts     → Projects catalog, metrics, architecture nodes & edges
   ├── skills.ts       → Categorized skills with proficiency badges
   ├── experience.ts   → Timeline of work, research, and technical milestones
   └── social.ts       → Social links, resume path, and contact config
         │
         ▼
src/types/ (Strict TypeScript Interfaces)
         │
         ▼
src/components/ & src/sections/ (Presentation-Only Components)
         │
         ▼
src/app/ (Next.js App Router Pages: /, /projects/[slug], /editor)
```

---

## ⚡ Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Automated Tests

```bash
npm test
```

Verifies data integrity, uniqueness of project slugs, validity of architecture graph nodes/edges, and component rendering logic.

### 4. Build for Production

```bash
npm run build
```

Generates optimized static pages with `generateStaticParams()` for all projects.

---

## 🛠️ Content Editing & Customization

See [CONTENT_GUIDE.md](file:///c:/Users/omar%20sharaby/Documents/Portifolio/CONTENT_GUIDE.md) for a comprehensive, copy-paste guide on modifying any section.

### Quick Edit Locations:
| Content Element | File Location |
|---|---|
| Name, Title, Bio, Hero Headline | `src/data/portfolio.ts` |
| Projects, Architecture Graphs, Metrics | `src/data/projects.ts` |
| Categorized Technical Skills | `src/data/skills.ts` |
| Career & Milestone Timeline | `src/data/experience.ts` |
| Social Links, Email, Resume Link | `src/data/social.ts` |
| SEO, Navigation, Default Theme | `src/data/siteConfig.ts` |

### Built-in Visual Editor:
Navigate to `/editor` (or click **Editor** in the top navbar) to modify content in a visual interface, preview changes, and export updated TypeScript code directly to paste into `src/data/`.

---

## ⌨️ Interactive Features

- **Command Palette (`Ctrl+K` or `Cmd+K`)**: Rapid keyboard navigation to jump between sections, filter projects by category, toggle dark/light theme, or copy email.
- **Dynamic Project Filtering**: Filter system projects across AI & RAG, Systems & Backend, and Computer Vision.
- **Interactive Architecture Flow Graph**: SVG/CSS visualizer dynamically driven by `project.architecture` data.
- **Modal & Deep-Dive Case Studies**: Click "Preview" for instant modal inspection, or "Case Study" for full `/projects/[slug]` static routes.
- **Direct Mailto Contact Form**: Clean form creating formatted client emails without third-party surveillance or fake endpoints.

---

## 🚢 Production Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js. Deploy with default settings.

### Deploy with Docker / Static
Run `npm run build` followed by `npm start`.

---

## 📄 License
MIT License. Free to use, adapt, and build upon.
