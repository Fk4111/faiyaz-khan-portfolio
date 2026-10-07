// export const skillCategories = [
//   { id: "all", label: "All Skills" },
//   { id: "frontend", label: "Frontend" },
//   { id: "backend", label: "Backend" },
//   { id: "auth", label: "Auth & Security" },
//   { id: "tools", label: "Tools & DevOps" },
//   { id: "deployment", label: "Deployment & Cloud" },
//   { id: "other", label: "Database & ORM" }
// ];

// export const skillsData = [
//   // Frontend
//   {
//     name: "React.js",
//     category: "frontend",
//     proficiency: "Primary",
//     description: "Building responsive, component-driven interfaces with custom hooks and state management.",
//     featured: true
//   },
//   {
//     name: "Next.js",
//     category: "frontend",
//     proficiency: "Primary",
//     description: "Creating performant, SEO-friendly production websites with App Router and SSR.",
//     featured: true
//   },
//   {
//     name: "JavaScript (ES6+)",
//     category: "frontend",
//     proficiency: "Expert",
//     description: "Modern asynchronous workflows, closures, functional patterns, and DOM manipulation.",
//     featured: true
//   },
//   {
//     name: "Tailwind CSS",
//     category: "frontend",
//     proficiency: "Advanced",
//     description: "Crafting fluid, design-system compliant utility-first UI without style bloat.",
//     featured: true
//   },
//   {
//     name: "Redux / Toolkit",
//     category: "frontend",
//     proficiency: "Advanced",
//     description: "Predictable central application state management with slices and thunks.",
//     featured: false
//   },
//   {
//     name: "HTML5 & CSS3",
//     category: "frontend",
//     proficiency: "Expert",
//     description: "Semantic web architecture, responsive media queries, and accessible standards.",
//     featured: false
//   },
//   {
//     name: "Material UI",
//     category: "frontend",
//     proficiency: "Intermediate",
//     description: "Rapid enterprise component layout using standardized theme providers.",
//     featured: false
//   },
//   {
//     name: "Bootstrap",
//     category: "frontend",
//     proficiency: "Intermediate",
//     description: "Grid layouts and rapid prototyping for quick administrative interfaces.",
//     featured: false
//   },

//   // Backend
//   {
//     name: "Node.js",
//     category: "backend",
//     proficiency: "Primary",
//     description: "Building scalable backend services, event-driven servers, and micro-APIs.",
//     featured: true
//   },
//   {
//     name: "Express.js",
//     category: "backend",
//     proficiency: "Primary",
//     description: "Designing robust middleware chains, RESTful routes, and error handlers.",
//     featured: true
//   },
//   {
//     name: "MongoDB",
//     category: "backend",
//     proficiency: "Primary",
//     description: "Designing, indexing, and querying document schemas for high throughput.",
//     featured: true
//   },
//   {
//     name: "Mongoose",
//     category: "backend",
//     proficiency: "Advanced",
//     description: "Data modeling, schema validation, population, and query aggregation pipelines.",
//     featured: true
//   },
//   {
//     name: "REST APIs",
//     category: "backend",
//     proficiency: "Expert",
//     description: "Architecting standardized, versioned HTTP endpoints with predictable payloads.",
//     featured: true
//   },
//   {
//     name: "Socket.io",
//     category: "backend",
//     proficiency: "Advanced",
//     description: "Full-duplex real-time communication for messaging, alerts, and live sync.",
//     featured: true
//   },

//   // Authentication & Security
//   {
//     name: "JWT (JSON Web Tokens)",
//     category: "auth",
//     proficiency: "Advanced",
//     description: "Stateless session authentication with refresh token rotation strategies.",
//     featured: true
//   },
//   {
//     name: "bcrypt",
//     category: "auth",
//     proficiency: "Advanced",
//     description: "Cryptographic credential hashing with salt rounds for secure authentication.",
//     featured: false
//   },
//   {
//     name: "OAuth 2.0",
//     category: "auth",
//     proficiency: "Intermediate",
//     description: "Third-party social federated sign-in with Google and GitHub providers.",
//     featured: false
//   },
//   {
//     name: "API Key Authentication",
//     category: "auth",
//     proficiency: "Advanced",
//     description: "Server-to-server (S2S) authorization, token rotation, and rate-limiting guards.",
//     featured: true
//   },
//   {
//     name: "CORS & Security Headers",
//     category: "auth",
//     proficiency: "Advanced",
//     description: "Cross-origin resource policy configuration and HTTP security hardening.",
//     featured: false
//   },

//   // Tools & DevOps
//   {
//     name: "Git",
//     category: "tools",
//     proficiency: "Advanced",
//     description: "Version control, branching strategies, rebasing, and clean commit history.",
//     featured: true
//   },
//   {
//     name: "GitHub",
//     category: "tools",
//     proficiency: "Advanced",
//     description: "Collaborative pull requests, code reviews, issue tracking, and actions.",
//     featured: true
//   },
//   {
//     name: "Postman",
//     category: "tools",
//     proficiency: "Advanced",
//     description: "API testing, automated test collections, mock servers, and payload validation.",
//     featured: true
//   },
//   {
//     name: "Docker",
//     category: "tools",
//     proficiency: "Intermediate",
//     description: "Containerizing MERN applications for reliable cross-environment execution.",
//     featured: true
//   },
//   {
//     name: "ESLint & Prettier",
//     category: "tools",
//     proficiency: "Advanced",
//     description: "Enforcing consistent code quality, styling conventions, and syntax safety.",
//     featured: false
//   },
//   {
//     name: "Jenkins",
//     category: "tools",
//     proficiency: "Foundational",
//     description: "Continuous integration workflows and automated pipeline triggers.",
//     featured: false
//   },

//   // Deployment
//   {
//     name: "Vercel",
//     category: "deployment",
//     proficiency: "Advanced",
//     description: "Zero-configuration edge deployments for Next.js and React client bundles.",
//     featured: true
//   },
//   {
//     name: "Netlify",
//     category: "deployment",
//     proficiency: "Advanced",
//     description: "Continuous deployment for static frontends with custom redirect rules.",
//     featured: false
//   },
//   {
//     name: "Railway",
//     category: "deployment",
//     proficiency: "Intermediate",
//     description: "Provisioning full-stack Node.js servers, Redis instances, and databases.",
//     featured: false
//   },
//   {
//     name: "AWS (S3 & EC2)",
//     category: "deployment",
//     proficiency: "Intermediate",
//     description: "Cloud infrastructure provisioning, compute instances, and static assets.",
//     featured: true
//   },

//   // Other & Relational DBs
//   {
//     name: "SQL",
//     category: "other",
//     proficiency: "Intermediate",
//     description: "Relational database querying, joins, constraints, and data normalization.",
//     featured: false
//   },
//   {
//     name: "Prisma ORM",
//     category: "other",
//     proficiency: "Intermediate",
//     description: "Type-safe database modeling, schema migrations, and client querying.",
//     featured: false
//   },
//   {
//     name: "Supabase",
//     category: "other",
//     proficiency: "Intermediate",
//     description: "Postgres-backed backend-as-a-service with instant APIs and realtime triggers.",
//     featured: false
//   }
// ];


export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
  },
  {
    id: "backend",
    label: "Backend",
  },
  {
    id: "database",
    label: "Database",
  },
  {
    id: "tools",
    label: "Tools & Cloud",
  },
];

export const skillsData = {
  frontend: [
    {
      name: "React.js",
      description: "Building modern component-driven interfaces.",
      featured: true,
    },
    {
      name: "Next.js",
      description: "Building performant and SEO-friendly applications.",
      featured: true,
    },
    {
      name: "JavaScript",
      description: "Modern ES6+ development and asynchronous workflows.",
      featured: true,
    },
    {
      name: "Tailwind CSS",
      description: "Responsive and utility-first UI development.",
      featured: true,
    },
    {
      name: "Redux",
      description: "Application state management.",
      featured: false,
    },
    {
      name: "HTML5 & CSS3",
      description: "Semantic and responsive web development.",
      featured: false,
    },
    {
      name: "Material UI",
      description: "Reusable component-based interfaces.",
      featured: false,
    },
  ],

  backend: [
    {
      name: "Node.js",
      description: "Building scalable backend services and APIs.",
      featured: true,
    },
    {
      name: "Express.js",
      description: "REST API development and backend middleware.",
      featured: true,
    },
    {
      name: "REST APIs",
      description: "Designing and integrating production APIs.",
      featured: true,
    },
    {
      name: "Socket.io",
      description: "Real-time communication and live updates.",
      featured: false,
    },
    {
      name: "JWT",
      description: "Authentication and authorization.",
      featured: false,
    },
    {
      name: "OAuth",
      description: "Third-party authentication and social login.",
      featured: false,
    },
  ],

  database: [
    {
      name: "MongoDB",
      description: "NoSQL database design and querying.",
      featured: true,
    },
    {
      name: "Mongoose",
      description: "Schema modeling, validation and queries.",
      featured: true,
    },
    {
      name: "SQL",
      description: "Relational queries, joins and data management.",
      featured: false,
    },
    {
      name: "Supabase",
      description: "PostgreSQL-backed application development.",
      featured: false,
    },
    {
      name: "Prisma",
      description: "Database ORM and schema management.",
      featured: false,
    },
  ],

  tools: [
    {
      name: "Git",
      description: "Version control and collaborative development.",
      featured: true,
    },
    {
      name: "GitHub",
      description: "Repositories, pull requests and collaboration.",
      featured: true,
    },
    {
      name: "Postman",
      description: "API testing and debugging.",
      featured: true,
    },
    {
      name: "Docker",
      description: "Containerizing and deploying applications.",
      featured: true,
    },
    {
      name: "Vercel",
      description: "Frontend and Next.js deployments.",
      featured: false,
    },
    {
      name: "Railway",
      description: "Backend and application deployment.",
      featured: false,
    },
    {
      name: "AWS",
      description: "Cloud infrastructure and deployment.",
      featured: false,
    },
  ],
};