export type DesignMode = "orbital" | "industrial" | "spatial" | "blueprint";

export interface DesignThemeConfig {
  id: DesignMode;
  name: string;
  shortName: string;
  subtitle: string;
  badge: string;
  accentHex: string;
  secondaryHex: string;
}

export const DESIGN_THEMES: DesignThemeConfig[] = [
  {
    id: "orbital",
    name: "Design 1: Orbital Telemetry HUD",
    shortName: "01 // Orbital HUD",
    subtitle: "Deep-Space Command Center • Cyan/Amber Telemetry • Live Node Graph",
    badge: "SYS_TELEMETRY_ACTIVE",
    accentHex: "#00F0FF",
    secondaryHex: "#FFB800",
  },
  {
    id: "industrial",
    name: "Design 2: Industrial Hardware Deck",
    shortName: "02 // Industrial Deck",
    subtitle: "Teenage Eng. / Nothing OS • Carbon/Titanium • Tactile Modules",
    badge: "SYS_DECK_ONLINE",
    accentHex: "#FF4500",
    secondaryHex: "#10B981",
  },
  {
    id: "spatial",
    name: "Design 3: Spatial Glass & Aurora Bento",
    shortName: "03 // Spatial Bento",
    subtitle: "VisionOS / Raycast • Frosted Cosmic Glass • Modular Bento Grid",
    badge: "SPATIAL_UI_V3",
    accentHex: "#A855F7",
    secondaryHex: "#34D399",
  },
  {
    id: "blueprint",
    name: "Design 4: CAD Schematic Blueprint",
    shortName: "04 // CAD Blueprint",
    subtitle: "Neo-Brutalist Engineering Spec • 1px Grid Crosshairs • Cobalt/Volt",
    badge: "CAD_REV_9.4 // SCALE 1:1",
    accentHex: "#3B82F6",
    secondaryHex: "#CCFF00",
  },
];

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mayank Gupta",
    handle: "mayankgupta804",
    domain: "mayankgupta.space",
    role: "Senior Software Engineer",
    headline: "Architecting High-Throughput Distributed Systems in Go & Elixir",
    subheadline:
      "Senior Software Engineer with 9+ years of experience designing low-latency microservices, concurrent backend pipelines, and resilient cloud-native architectures on Linux.",
    location: "Bangalore, India",
    coordinates: "12.9716° N, 77.5946° E",
    email: "mayank.gupta804@gmail.com",
    github: "https://github.com/mayankgupta804",
    linkedin: "https://www.linkedin.com/in/mayankgupta804",
    resumeUrl: "/Mayank_Gupta_Resume.pdf",
    avatarUrl: "/profile.png",
    availability: "Open to Staff / Senior Backend & Distributed Systems Roles",
    aboutQuote:
      "Software Engineer with ~9 years of experience building reliable, high-performance backend systems. I spend my days architecting distributed systems and microservices primarily in Go, driven by a deep fascination with scale, site reliability, and clean engineering on Linux.",
  },

  metrics: [
    {
      label: "Production Experience",
      value: "9+ Yrs",
      detail: "Scaling distributed backend systems",
      code: "EXP_09Y",
    },
    {
      label: "Zero-to-Prod Elixir",
      value: "3 Wks",
      detail: "Learned & shipped Gojek Free Trial API",
      code: "VEL_3WK",
    },
    {
      label: "Quality Gate",
      value: ">90%",
      detail: "Unit test coverage across banking auth",
      code: "COV_90P",
    },
    {
      label: "Polyglot Runtime",
      value: "6 Langs",
      detail: "Go • Elixir • Python • Java • Clojure • TS",
      code: "POLY_06",
    },
  ],

  engineRoom: {
    coreStack: [
      { name: "Go (Golang)", level: 98, role: "Primary Systems Language • 9+ Yrs", category: "Language" },
      { name: "Elixir / OTP", level: 88, role: "Fault-Tolerant Concurrent Workers & APIs", category: "Language" },
      { name: "Python", level: 85, role: "High-Performance APIs & ML Integrations", category: "Language" },
      { name: "Java", level: 82, role: "Enterprise Microservices & Automation", category: "Language" },
      { name: "Clojure", level: 80, role: "Functional Immutable Web APIs", category: "Language" },
      { name: "TypeScript / React", level: 78, role: "Dynamic Full-Stack Web Interfaces", category: "Frontend" },
    ],
    architecture: [
      "Distributed Systems & Concurrency Patterns",
      "Low-Latency Microservices Architecture",
      "Vector Databases & Real-Time Recommendation Engines",
      "High-Throughput Event-Driven Pipelines",
      "Site Reliability Engineering (SRE) & Linux Internals",
      "AI-Augmented R&D & Rapid System Prototyping (Claude / Gemini)",
    ],
    infrastructure: [
      { category: "Databases & Cache", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Vector DBs"] },
      { category: "Message Brokers (MOMs)", items: ["Apache Kafka", "RabbitMQ", "Async Worker Pools"] },
      { category: "Cloud & DevOps", items: ["Linux", "Docker", "Kubernetes", "AWS", "Jenkins CI/CD"] },
      { category: "Protocols & Testing", items: ["gRPC", "REST APIs", "TDD (>90% Cov)", "Appium", "Rest Assured"] },
    ],
    systemNodes: [
      { id: "gateway", label: "API Gateway", tech: "Go / gRPC", latency: "0.8ms", throughput: "45k rps" },
      { id: "auth", label: "Kavach Auth Engine", tech: "Go / Redis", latency: "1.2ms", throughput: "30k rps" },
      { id: "trial", label: "Merchant State Engine", tech: "Elixir / OTP", latency: "2.1ms", throughput: "25k rps" },
      { id: "broker", label: "Event Backbone", tech: "Apache Kafka", latency: "1.5ms", throughput: "120k msg/s" },
      { id: "workers", label: "Promo Async Workers", tech: "Go + Elixir", latency: "3.4ms", throughput: "80k jobs/m" },
      { id: "storage", label: "Distributed Store", tech: "PostgreSQL / Vector DB", latency: "2.0ms", throughput: "99.99% SLA" },
    ],
  },

  caseStudies: [
    {
      id: "gojek-promotions",
      title: "Gojek Merchant Free Trial & SKU Promotions Platform",
      organization: "Gojek (via Josh Software)",
      period: "Mar 2025 – Present",
      tags: ["Elixir", "Go", "Distributed State Machine", "Async Workers", "GoBiz App"],
      metric: "3-Week Zero-to-Prod Delivery",
      summary:
        "Learned Elixir from scratch to architect and ship a complex, multi-state Free Trial backend API within 3 weeks, alongside a greenfield SKU promotions platform and high-volume Go/Elixir background workers.",
      highlights: [
        "Engineered deterministic multi-state transitions for dynamic merchant trial lifecycles.",
        "Architected greenfield backend APIs for SKU-level merchant promotions and GoBiz reporting.",
        "Built resilient asynchronous background workers in Go and Elixir to process high-volume promotion bursts.",
      ],
    },
    {
      id: "hdfc-kavach",
      title: "Kavach — Two-Step QR & Mobile Token Auth Platform",
      organization: "HDFC Bank (via Josh Software)",
      period: "Apr 2023 – Mar 2025",
      tags: ["Go", "Cybersecurity", "Zero-Trust Auth", "Microservices", ">90% Test Coverage"],
      metric: "High-Volume Banking Security",
      summary:
        "Co-developed Kavach, a two-step QR-code and mobile token authentication platform mitigating phishing risks across high-volume digital banking transactions during HDFC's core platform rewrite.",
      highlights: [
        "Re-architected legacy mobile login into a modular, low-latency Go authentication microservice.",
        "Enforced strict engineering quality gates with continual refactoring and >90% unit test coverage.",
        "Protected millions of digital banking sessions against phishing and unauthorized token replay.",
      ],
    },
    {
      id: "routematic-tracking",
      title: "Real-Time Fleet Telemetry & Vehicle Tracking Engine",
      organization: "Routematic",
      period: "May 2019 – Aug 2020",
      tags: ["Go", "High Concurrency", "Real-Time Geo Telemetry", "Developer Gateway"],
      metric: "Sub-Second Map Telemetry",
      summary:
        "Refactored and re-architected a legacy vehicle tracking platform in Go to handle high-concurrency GPS telemetry streams with lower latency updates and cleaner real-time map rendering.",
      highlights: [
        "Replaced bottlenecked legacy services with concurrent Go workers for high-frequency location ingestion.",
        "Designed and deployed a third-party developer integration system that accelerated provider onboarding.",
        "Maintained operational reliability across dozens of microservices during active production on-call rotations.",
      ],
    },
    {
      id: "testvagrant-optimus",
      title: "Optimus Mobile Automation & Distributed QA Suite",
      organization: "Testvagrant Technologies",
      period: "Jan 2017 – Jul 2018",
      tags: ["Java", "Appium", "Rest Assured", "Framework Architecture"],
      metric: "Multi-Client Test Acceleration",
      summary:
        "Co-developed the Optimus mobile test automation framework and architected a scalable functional & REST API validation suite for Gojek and enterprise clients.",
      highlights: [
        "Streamlined test authoring for developers and QA engineers, shifting quality assurance left.",
        "Validated mission-critical mobile and REST API workflows at scale.",
      ],
    },
  ],

  experience: [
    {
      company: "Josh Software",
      role: "Senior Software Engineer",
      location: "Bangalore, India",
      period: "April 2023 – Present",
      current: true,
      clients: [
        {
          name: "Gojek | Consultant – Merchant Growth",
          period: "Mar 2025 – Present",
          stack: ["Elixir", "Go", "PostgreSQL", "Kafka", "Microservices"],
          bullets: [
            "Learned Elixir from scratch to design and deliver a complex Free Trial flow backend API within 3 weeks.",
            "Engineered the complex multi-state logic for the Free Trial engine to support dynamic merchant states.",
            "Partnered daily with mobile engineers to define API payloads and guarantee an effortless frontend integration.",
            "Developed reporting backend APIs for diverse merchant promotion flows on the GoBiz mobile app.",
            "Designed the initial technical flow and architected backend APIs for a greenfield SKU promotions platform.",
            "Engineered robust background workers in Go/Elixir to asynchronously process high-volume merchant promotions.",
          ],
        },
        {
          name: "HDFC Bank | Consultant – Mobile Banking",
          period: "Apr 2023 – Mar 2025",
          stack: ["Go", "Microservices", "Redis", "QR/Token Auth", "Unit Testing"],
          bullets: [
            "Collaborated on re-architecting the core authentication system during the platform rewrite, transitioning the legacy mobile login flow into a modern, secure, and modular architecture.",
            "Designed and built secure authentication and profile APIs using Go.",
            "Maintained codebases for multiple microservices by continual refactoring while ensuring unit test coverage never dropped below 90%.",
            "Co-developed a secure, two-step QR-code and mobile token authentication platform called Kavach to mitigate phishing risks, protecting high-volume digital banking transactions against unauthorized access.",
          ],
        },
      ],
    },
    {
      company: "Swymcorp",
      role: "Software Engineer",
      location: "Bangalore, India (Remote)",
      period: "January 2022 – January 2023",
      current: false,
      stack: ["Clojure", "Distributed Systems", "REST APIs", "System Architecture"],
      bullets: [
        "Designed and deployed robust Clojure-based Web APIs for internal microservices and external public consumers, ensuring secure and predictable data delivery.",
        "Partnered with engineering squads to diagnose performance bottlenecks, implementing optimizations that enhanced system stability under peak traffic loads.",
        "Spearheaded technical research initiatives on emerging tools and architectures, translating complex findings into actionable insights for leadership.",
        "Produced clear system architecture diagrams and API schemas, improving engineering velocity and reducing documentation gaps across teams.",
        "Mentored engineering interns on clean code paradigms and modern SDLC methodologies, accelerating their code-review approval velocity and converting them into full-time roles.",
      ],
    },
    {
      company: "Squadcast",
      role: "Senior Software Engineer",
      location: "Bangalore, India (Remote)",
      period: "August 2020 – November 2021",
      current: false,
      stack: ["Go", "Microservices", "Real-Time Analytics", "React", "MongoDB"],
      bullets: [
        "Architected and led the development of a highly scalable microservices ecosystem, significantly boosting overall system performance and operational reliability.",
        "Accelerated team velocity and engineering growth by mentoring junior developers and establishing standardized, modern software design best practices.",
        "Bootstrapped the initial analytics dashboard iteration, delivering critical real-time incident metrics to improve stakeholder visibility and response times.",
        "Championed high code quality standards by spearheading rigorous code reviews, ensuring codebase maintainability, and reducing post-release bugs.",
      ],
    },
    {
      company: "Routematic",
      role: "Product Engineer",
      location: "Bangalore, India",
      period: "May 2019 – August 2020",
      current: false,
      stack: ["Go", "Java", "Python", "PHP", "Real-Time Geo Tracking"],
      bullets: [
        "Refactored and re-architected a legacy vehicle tracking platform using Go, improving system scalability and availability to handle higher concurrent traffic.",
        "Designed and deployed a developer integration system, accelerating the onboarding pipeline for third-party providers.",
        "Optimized the real-time tracking experience for customers, resulting in lower latency updates and cleaner map rendering.",
        "Ensured high system reliability across dozens of microservices by debugging complex production issues during active on-call rotations.",
        "Authored clean, maintainable, and highly performant scripts and services using a diverse technology stack (Go, Java, PHP, Python).",
      ],
    },
    {
      company: "Mate Labs",
      role: "Full Stack Developer",
      location: "Bangalore, India",
      period: "July 2018 – May 2019",
      current: false,
      stack: ["Python", "Flask", "AWS", "Jenkins CI/CD", "TDD"],
      bullets: [
        "Engineered high-performance Python/Flask backend APIs to enable seamless, low-latency communication with the core machine learning platform.",
        "Collaborated via pair programming with cross-functional engineers to accelerate API integrations and isolate complex production bugs.",
        "Mentored junior developers and interns on software engineering best practices, Agile workflows, and Test-Driven Development (TDD).",
        "Architected and deployed automated CI/CD pipelines using Jenkins on AWS, streamlining deployment frequency and reducing manual release overhead.",
        "Designed and established the core API testing framework from scratch, raising test coverage standards across the engineering department.",
      ],
    },
    {
      company: "Testvagrant Technologies",
      role: "Software Engineer",
      location: "Bangalore, India",
      period: "January 2017 – July 2018",
      current: false,
      stack: ["Java", "Appium", "Rest Assured", "Optimus Framework"],
      bullets: [
        "Consulted with cross-functional client teams to diagnose testing bottlenecks, accelerating development cycles and shifting quality assurance left.",
        "Co-developed the Optimus mobile automation framework, streamlining test authoring for developers and QA engineers to improve overall test coverage.",
        "Architected a scalable test automation suite using Java, Appium, and Rest Assured for Gojek (among other clients), validating critical functional and REST API workflows.",
      ],
    },
  ],

  githubRepos: [
    {
      name: "grpc-exploration",
      language: "Go",
      description: "High-performance gRPC API design, protobuf schemas, and service-to-service streaming patterns in Go.",
      url: "https://github.com/mayankgupta804/grpc-exploration",
      highlight: "Distributed RPC",
    },
    {
      name: "simple-order-service",
      language: "Go",
      description: "Clean microservice backend architecture in Go demonstrating modular domain boundaries and RESTful order processing.",
      url: "https://github.com/mayankgupta804/simple-order-service",
      highlight: "Go Microservice",
    },
    {
      name: "shopping-cart-backend",
      language: "Go",
      description: "Scalable e-commerce cart backend service built in Go with clean state management and API contracts.",
      url: "https://github.com/mayankgupta804/shopping-cart-backend",
      highlight: "Backend Architecture",
    },
    {
      name: "bike-station-backend",
      language: "Clojure",
      description: "Functional RESTful API service architecture in Clojure exploring immutable data pipelines and clean routing.",
      url: "https://github.com/mayankgupta804/bike-station-backend",
      highlight: "Functional Clojure",
    },
    {
      name: "parking-lot",
      language: "Go",
      description: "Low-level system design and concurrency-safe state modeling implemented in idiomatic Go.",
      url: "https://github.com/mayankgupta804/parking-lot",
      highlight: "System Design",
    },
    {
      name: "neetcode-submissions",
      language: "Go",
      description: "Algorithmic optimization, data structures, and concurrency problem solutions written in Go.",
      url: "https://github.com/mayankgupta804/neetcode-submissions",
      highlight: "Algorithms in Go",
    },
    {
      name: "game-hub",
      language: "TypeScript",
      description: "Interactive RAWG.io video game discovery web app built with React & TypeScript, deployed on Vercel.",
      url: "https://github.com/mayankgupta804/game-hub",
      liveUrl: "https://game-hub-ruby-delta.vercel.app",
      highlight: "React + TypeScript",
    },
    {
      name: "multi-docker",
      language: "Docker / JS",
      description: "Multi-container Docker orchestration workflow connecting worker, API, and caching layers.",
      url: "https://github.com/mayankgupta804/multi-docker",
      highlight: "Container Orchestration",
    },
  ],

  beyondTheIde: {
    intro:
      "When I step away from the terminal, I like keeping life simple, active, and hands-on—usually outdoors on a mountain trail, at the gym, or unwinding with a guitar:",
    mountainsAndTravel: {
      title: "Mountains, Travel & Hiking",
      subtitle: "High-Altitude Trails • Exploring New Places",
      tag: "OUTDOORS // HIKING_&_TRAVEL",
      description:
        "I love travelling and heading to the mountains whenever I get the chance. Hiking quiet trails, breathing crisp mountain air (especially around Uttarakhand), and exploring new places at an unhurried pace is how I reset.",
      highlights: [
        { label: "Mountain Escapes", value: "Uttarakhand & Himalayas", note: "Multi-day hikes, ridge trails & quiet hill towns" },
        { label: "Slow Travel", value: "Road Trips & Exploration", note: "Discovering local culture, food, and scenic routes" },
      ],
      trailPoints: [
        { stage: "Basecamp", elev: "920m", place: "Bangalore Outskirts" },
        { stage: "Foothills", elev: "1,850m", place: "Pine & Cedar Trails" },
        { stage: "Ridge Line", elev: "2,900m", place: "Garhwal Mountain Pass" },
        { stage: "Summit View", elev: "3,680m", place: "Uttarakhand High Trail" },
      ],
    },
    fitnessAndRunning: {
      title: "Working Out & Distance Running",
      subtitle: "Strength Training • Endurance Runs",
      tag: "MOVEMENT // DAILY_DISCIPLINE",
      description:
        "Software engineering is sedentary by nature, so working out and running are non-negotiable parts of my routine. I enjoy consistent strength training at the gym and lacing up for long-distance runs to keep both body and mind sharp.",
      pillars: [
        { name: "Strength & Conditioning", detail: "Regular gym sessions and compound lifts for long-term health and energy." },
        { name: "Endurance Running", detail: "Logging steady miles on the road and trail, including distance events like the Bangalore Ultra." },
        { name: "Active Recovery", detail: "Outdoor walks, mobility work, and staying active on weekends." },
      ],
    },
    musicAndDiy: {
      title: "Rock, Metal & Hands-On DIY",
      subtitle: "Casual Guitar • Open-Minded Listener • Tinkering",
      tag: "OFF_HOURS // MUSIC_&_DIY",
      description:
        "I’m a longtime fan of rock and metal and enjoy playing guitar in my free time—not as an elitist or gear snob, just someone who genuinely loves good riffs, jamming with friends, and all kinds of great music. That same hands-on curiosity carries over into DIY projects and taking care of my car.",
      notes: [
        { title: "Six Strings & Good Music", detail: "Playing guitar to unwind, jamming rock and metal favorites, and appreciating great music across genres." },
        { title: "DIY & Car Care", detail: "Maintaining my own vehicle, geeking out over simple detailing care, and fixing things around the house." },
      ],
    },
  },

  education: {
    degree: "Bachelor of Science in Electrical Engineering",
    institution: "ITER, Bhubaneswar, IN",
    graduated: "January 2016",
    competencies: [
      {
        title: "Technical Mastery",
        detail: "Well-versed in concurrent programming, OOP, and functional paradigms, with deep knowledge of data structures and algorithmic optimization.",
      },
      {
        title: "Polyglot Engineering",
        detail: "Adaptable across diverse languages and frameworks including Go, Elixir, Clojure, Python (Django/Flask), and React/TypeScript.",
      },
      {
        title: "Cloud-Native & Architecture",
        detail: "Expert in microservices architecture, distributed system design, vector databases, and scalable Linux/Kubernetes development.",
      },
      {
        title: "R&D & Team Synergy",
        detail: "Driven by technical curiosity and AI-augmented workflows, acting as a collaborative catalyst and mentor for cross-functional squads.",
      },
    ],
  },
};
