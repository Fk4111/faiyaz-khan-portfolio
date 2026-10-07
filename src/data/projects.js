export const projectsData = [
  {
    id: "knk-partners",
    title: "KNK Admin Panel",
    subtitle: "Court Verification Workflow System (2.5 Months)",
    featured: true,
    tagline: "Production-oriented MERN platform handling background verification, case assignment, employee workload tracking, and automated status workflows.",
    type: "MERN Stack / Background Verification System",
    description: "Built a MERN-based admin panel for court background verification with role-based access (Admin/User), case assignment, employee workload tracking, dashboard analytics, and real-time status workflow management.",
    detailedDescription: "KNK Partners is an end-to-end B2B background verification engine. Built with role-based access control (Admin/user), case allocation pipelines, employee workload metrics, automated status pull/callback APIs, and production security guards (Helmet for HTTPS, Rate Limiting, Joi validation, and Compression).",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Joi",
      "Cors",
      "Helmet",
      "Rate Limiter",
      "Docker",
      "Render"
    ],
    features: [
      "Role-based access control (Admin & User roles)",
      "Vendor-wise case allocation & workload tracking",
      "Status Pull API & Status Callback APIs",
      "Secured with Helmet, Rate Limiter, and CORS guards",
      "Input validation using Joi schemas",
      "Audit logs and comprehensive API activity tracking",
      "Executive dashboard analytics with real-time charts",
      "Deployed frontend to Vercel and backend services to Render"
    ],
    metrics: [
      { label: "Deployment", value: "Vercel + Render" },
      { label: "Security", value: "Helmet + Rate Limit" },
      { label: "Database", value: "MongoDB Atlas" }
    ],
    liveUrl: "https://knkpartner.com",
    badge: "Flagship Production System",
    accentColor: "emerald"
  },
  {
    id: "aptechnosys",
    title: "Aptechnosys Corporate Website",
    subtitle: "Enterprise IT Services Web Platform",
    featured: true,
    tagline: "Redesigned corporate website using Next.js taking performance from 58% to 94% with 100% SEO & Best Practices.",
    type: "Next.js Web Platform",
    description: "Designed and developed a modern, SEO-optimized corporate website for an IT services company using Next.js, JavaScript, Tailwind CSS, and shadcn/ui, Framer Motion. Built a high-performance, fully responsive website featuring service showcases, project portfolio, client testimonials, and a contact form integrated with Resend API for real-time email enquiries.",
    detailedDescription: "Architected a responsive corporate web portal for Aptechnosys. Features server-rendered pages for optimal Core Web Vitals, modular shadcn/ui components, dark/light theme switching, custom transactional email delivery via Resend, and full Vercel edge deployment.",
    technologies: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Resend API",
      "Vercel"
    ],
    features: [
      "Responsive, mobile-first design across all viewports",
      "Elevated performance from 58% to 94% with 100% SEO + Best Practices",
      "Integrated contact form with Resend API for instant lead delivery",
      "Service showcases, portfolio gallery, client testimonials, and FAQ",
      "Modern UI/UX principles with Framer Motion animations",
      "Zero-downtime Vercel production edge deployment"
    ],
    metrics: [
      { label: "Performance", value: "94% (Up from 58%)" },
      { label: "SEO Score", value: "100% Perfect" },
      { label: "Email Tech", value: "Resend API" }
    ],
    liveUrl: "https://aptechnosys.com/",
    githubUrl: "https://github.com/Fk4111/aptechnosysWebsite.git",
    badge: "Live Production Site",
    accentColor: "blue"
  },
  {
    id: "equity-backtester",
    title: "Equity Backtester",
    subtitle: "Quantitative Stock Strategy Backtesting Engine",
    featured: true,
    tagline: "Full-stack quantitative backtesting application analyzing historical equity strategies with fundamental screening and portfolio ranking.",
    type: "Full Stack FinTech Application",
    description: "Developed a full-stack stock backtesting application to analyze historical equity strategies using fundamental screening, portfolio ranking, and periodic rebalancing with Yahoo Finance integration.",
    detailedDescription: "Engineered a financial quantitative tool combining React.js frontend with FastAPI / Python numerical backends and PostgreSQL persistence. Calculates core institutional risk metrics including CAGR, Sharpe Ratio, and Maximum Drawdown with CSV export affordances.",
    technologies: [
      "React.js",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Pandas",
      "Yahoo Finance API"
    ],
    features: [
      "Fundamental screening and portfolio ranking algorithms",
      "Periodic portfolio rebalancing simulation engine",
      "Key risk metrics calculation: CAGR, Sharpe Ratio, Max Drawdown",
      "CSV export and historical tabular reports",
      "PostgreSQL data storage with SQLAlchemy ORM",
      "Integration with Yahoo Finance data streams"
    ],
    metrics: [
      { label: "Metrics", value: "CAGR & Sharpe" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Data Engine", value: "Pandas + Yahoo" }
    ],
    liveUrl: "https://github.com/Fk4111/equity_backtester.git",
    githubUrl: "https://github.com/Fk4111/equity_backtester.git",
    badge: "FinTech & Analytics",
    accentColor: "teal"
  },
  {
    id: "ai-tagline-generator",
    title: "AI Tagline Generator",
    subtitle: "Creative Branding & Prompt Generation Tool",
    featured: false,
    tagline: "Intelligent copywriting assistant generating targeted brand slogans, marketing hooks, and product taglines.",
    type: "AI & Full Stack Application",
    description: "An AI-powered web tool that produces catchy brand taglines and marketing slogans with customizable tones, categories, and one-click copy.",
    detailedDescription: "Built an intuitive developer and marketer branding tool. Backed by Node.js/Express REST endpoints connected to AI generation logic, with MongoDB caching popular generation results to minimize redundant API roundtrips.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    features: [
      "AI-driven creative slogan and tagline generation",
      "Tone customization (professional, bold, playful, modern)",
      "REST API backend with rate-limiting and query validation",
      "MongoDB storage for saved favorites and history",
      "Clean dark UI with instant clipboard copy affordance"
    ],
    metrics: [
      { label: "API Speed", value: "~450ms" },
      { label: "Caching", value: "MongoDB Hits" }
    ],
    liveUrl: "https://ai-tagline-gen.example.com",
    githubUrl: "https://github.com/Fk4111",
    badge: "AI Powered Tool",
    accentColor: "violet"
  },
  {
    id: "certificate-portal",
    title: "Certificate Verification Portal",
    subtitle: "Cryptographic Credential Validation Engine",
    featured: false,
    tagline: "Credential verification system with instant serial lookup, PDF download, and administrative issuing pipeline.",
    type: "Verification & Document Engine",
    description: "A secure certificate validation portal allowing universities and certifying bodies to issue tamper-proof certificates with public verification.",
    detailedDescription: "Designed and implemented a credential verification portal. Features unique certificate hash validation, dynamic vector PDF generation on the backend, public verification URL routing, and credential status management.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    features: [
      "Instant certificate ID lookup & verification status",
      "Server-side PDF certificate compilation and download",
      "Clean verification badge for valid / revoked credentials",
      "Secure REST API with MongoDB indexing on certificate serials"
    ],
    metrics: [
      { label: "Format", value: "Dynamic PDF" },
      { label: "Lookup", value: "Indexed O(1)" }
    ],
    liveUrl: "https://cert-verify.example.com",
    githubUrl: "https://github.com/Fk4111",
    badge: "Credential Security",
    accentColor: "amber"
  }
];

