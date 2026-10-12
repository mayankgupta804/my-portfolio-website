<div align="center">

# ⚡ mayankgupta.space

**Personal Portfolio & Interactive Systems Showcase of Mayank Gupta**  
*Senior Software Engineer • Distributed Systems • Go & Elixir • Microservices on Linux*

[![Live Website](https://img.shields.io/badge/Live-mayankgupta.space-00F0FF?style=for-the-badge&logo=vercel&logoColor=black)](https://mayankgupta.space)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 🌌 Overview

This repository hosts the source code for **[mayankgupta.space](https://mayankgupta.space)**—a futuristic Single Page Application (SPA) built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

Designed around my background architecting low-latency distributed systems and microservices in **Go** and **Elixir**, the site blends production engineering case studies with an interactive UI playground and a grounded look at life outside the terminal.

---

## ✨ Key Highlights

### 🎨 1. Live Multi-Design Switcher ("Design Lab")
Visitors can switch between **4 distinct futuristic visual paradigms** in real time via the bottom **Design Lab Dock** or `Cmd+K` / `Ctrl+K`:

| Mode | Aesthetic Direction | Visual Signature |
| :--- | :--- | :--- |
| **`01 // Orbital HUD`** | Deep-Space Command Center | Obsidian void (`#05070D`), cyan/amber telemetry, dot-matrix grid |
| **`02 // Industrial Deck`** | Tactile Hardware Interface | Carbon/titanium surfaces, lava-orange & phosphor-green LED indicators |
| **`03 // Spatial Bento`** | Cosmic Glassmorphism | Frosted `backdrop-blur-2xl` bento cards with violet & emerald aurora glow |
| **`04 // CAD Blueprint`** | Neo-Brutalist Schematic | Exposed `1px` engineering grid crosshairs, cobalt & neon-volt spec blocks |

### 🛰️ 2. Interactive Distributed Topology Visualizer
- Live 6-node microservice topology (**API Gateway**, **Kavach Auth Engine**, **Merchant State Engine**, **Kafka Event Backbone**, **Async Worker Pools**, **Distributed Store**).
- Click any node to inspect runtime, SLA, and P99 latency metrics, or trigger **"Simulate Peak Traffic"** (`140k RPS`) to visualize auto-scaling load distribution.

### ⌨️ 3. Keyboard-First Command Palette (`Cmd+K` / `Ctrl+K`)
- Instant fuzzy search across all portfolio sections, design themes, social links, and direct **Resume PDF** download.

### 🏔️ 4. Beyond the IDE
- **Mountains, Travel & Hiking:** Interactive ridgeline elevation contour from Bangalore out to high-altitude trails in **Uttarakhand** (`3,680m`).
- **Working Out & Distance Running:** Strength training, compound lifts, and endurance running (**Bangalore Ultra**).
- **Rock, Metal & Hands-On DIY:** Playing guitar to unwind, jamming rock & metal favorites, and hands-on car care / mechanical DIY.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Prerendering)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Grid Schematics
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** `Space Grotesk`, `JetBrains Mono`, and `Orbitron`
- **Asset Pipeline:** Deterministic Python 3 stdlib scripts (`execution/`)
- **Deployment:** [Vercel](https://vercel.com/) with automatic GitHub CI/CD

---

## 📂 Project Structure

```text
my-portfolio-website/
├── directives/
│   └── deploy_portfolio.md          # SOP for asset updates & deployment workflow
├── execution/
│   └── extract_resume_assets.py     # Deterministic PDF portrait & resume extractor (stdlib)
├── public/
│   ├── Mayank_Gupta_Resume.pdf      # Downloadable official resume
│   ├── profile.png                  # Native lossless portrait extracted from resume
│   └── profile.jpg                  # OpenGraph / social preview portrait
├── src/
│   ├── app/
│   │   ├── globals.css              # Theme variables & custom schematic grid backgrounds
│   │   ├── layout.tsx               # Root layout, fonts & OpenGraph metadata
│   │   └── page.tsx                 # Main Single Page Application view
│   ├── components/
│   │   ├── CommandPalette.tsx       # Cmd+K / Ctrl+K quick navigation modal
│   │   ├── DesignSwitcher.tsx       # Floating dock to switch between the 4 UI themes
│   │   └── InteractiveVisualizers.tsx # Distributed node graph & Beyond the IDE cards
│   └── data/
│       └── portfolio-data.ts        # Strongly-typed single source of truth for all content
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js** `>= 18.17`
- **npm** `>= 9.x`
- **Python 3** *(optional, only needed if re-extracting assets from a new resume PDF)*

### Installation & Local Dev Server

```bash
# 1. Install dependencies
npm install

# 2. Start the development server with hot-reload
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to explore the portfolio and toggle between the 4 design themes.

### Production Build & Type Check

```bash
# Verify TypeScript types
npx tsc --noEmit

# Build optimized static production bundle
npm run build
npm run start
```

---

## 🔄 Updating Portfolio Content or Resume

1. **Content Updates:** Edit [`src/data/portfolio-data.ts`](src/data/portfolio-data.ts) — all 4 design modes and the `Cmd+K` palette read automatically from this single file.
2. **Resume PDF & Photo Updates:** Run the deterministic asset extractor:
   ```bash
   python3 execution/extract_resume_assets.py /path/to/new_resume.pdf public/
   ```

---

## 📬 Contact

- **Website:** [mayankgupta.space](https://mayankgupta.space)
- **GitHub:** [@mayankgupta804](https://github.com/mayankgupta804)
- **LinkedIn:** [linkedin.com/in/mayankgupta804](https://www.linkedin.com/in/mayankgupta804)
- **Email:** [mayank.gupta804@gmail.com](mailto:mayank.gupta804@gmail.com)
