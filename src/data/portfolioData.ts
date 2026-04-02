export type Project = {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  link: string;
  featured: boolean;
};

export type Experience = {
  type: "work" | "edu";
  title: string;
  org: string;
  period: string;
  current: boolean;
  points: string[];
};

export type SkillCategory = {
  title: string;
  color: string;
  borderColor: string;
  skills: string[];
};

export const profile = {
  name: "Umer Khayam",
  role: "Full Stack & AI Developer",
  location: "Islamabad, Pakistan",
  email: "umerkhayam1717@gmail.com",
  phone: "+92 316 5511251",
  linkedin: "https://www.linkedin.com/in/umerkhayamsatti/",
  github: "https://github.com/UmerKhayam17",
  summary:
    "Full-stack developer with experience building scalable SaaS platforms, ERP/CRM systems, and AI-powered applications. Skilled in MERN stack, Python ecosystem, production deployments, and CI/CD automation.",
};

export const projects: Project[] = [
  {
    title: "ERP Platform",
    category: "ERP System",
    desc: "Enterprise resource planning platform with multi-tenant modules, real-time business dashboards, and role-based operations.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "REST API"],
    link: "https://erp.clickmasters.pk/",
    featured: true,
  },
  {
    title: "Prime Leads CRM",
    category: "CRM System",
    desc: "Customer relationship platform for lead tracking, sales workflows, and team collaboration.",
    tags: ["React", "Node.js", "MongoDB", "CRM"],
    link: "https://crm.primeleadsllc.com/",
    featured: true,
  },
  {
    title: "ClickMasters Software",
    category: "Business Website",
    desc: "Corporate software services website showcasing solutions, services, and portfolio.",
    tags: ["Next.js", "Tailwind", "SEO", "MongoDB"],
    link: "http://software.clickmasters.pk/",
    featured: true,
  },
  {
    title: "Hospital Management System",
    category: "Healthcare Management System",
    desc: "Healthcare management system with patient records, appointment handling, and operations support.",
    tags: ["React", "Express", "MongoDB", "REST API"],
    link: "http://hms.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Majestic Vacations",
    category: "Travel & Tours Platform",
    desc: "Travel and tours platform for destination discovery, booking flows, and customer engagement.",
    tags: ["React.js", "Node.js", "Stripe", "Affirm", "PayPal", "Klarna", "Maps API"],
    link: "http://themajesticvacations.com/",
    featured: false,
  },
  {
    title: "POS Platform",
    category: "POS System",
    desc: "Point-of-sale system focused on fast billing, branch operations, and secure transactions.",
    tags: ["Next.js", "Node.js", "MongoDB", "POS"],
    link: "https://pos.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Alpha Monitoring",
    category: "AI Monitoring Platform",
    desc: "AI-powered tracking and productivity monitoring system for teams and operations.",
    tags: ["React", "Node.js", "AI", "Analytics"],
    link: "https://alphamonitoring.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Supermarket POS",
    category: "Retail POS System",
    desc: "Retail intelligence platform with inventory, checkout, reporting, and branch-level control.",
    tags: ["Next.js", "Node.js", "POS", "Dashboards"],
    link: "http://supermarketpos.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Clothing POS",
    category: "Fashion POS System",
    desc: "POS solution tailored for apparel stores with SKU handling and sales performance insights.",
    tags: ["Next.js", "Node.js", "POS", "Inventory"],
    link: "https://clothingpos.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Matrix Engineering ERP",
    category: "ERP System",
    desc: "Custom ERP for Matrix Engineering with integrated Inventory, Project Management, HR, and Finance modules.",
    tags: ["Next.js", "Node.js", "ERP", "Inventory", "Project Management", "HR", "Finance"],
    link: "http://matrixengineeringapp.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Matrix Engineering Website",
    category: "Corporate Website",
    desc: "Corporate website for telecom infrastructure services, products, and client engagement.",
    tags: ["Next.js", "Tailwind", "Corporate", "SEO"],
    link: "https://matrixengineering.clickmasters.pk/",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    type: "work",
    title: "Full Stack & AI Developer",
    org: "ClickMasters",
    period: "Oct 2024 – Present",
    current: true,
    points: [
      "Developing scalable SaaS-based CRM and ERP platforms using Next.js, Node.js, MongoDB, and Tailwind CSS",
      "Designing modular backend services and multi-tenant architecture",
      "Building dashboards, automation workflows, and secure authentication systems",
      "Owning end-to-end production deployments across all delivered client projects",
      "Managing GitHub workflows, branch strategy, code reviews, and release coordination",
      "Building CI/CD pipelines for automated build, test, and deployment delivery",
      "Deploying and maintaining apps on VPS environments including DigitalOcean droplets",
      "Configuring Linux servers, Nginx reverse proxy, SSL, PM2, and environment security",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    org: "Smart Solutions",
    period: "Jan 2024 – Sep 2024",
    current: false,
    points: [
      "Built full-stack applications with real-time dashboards and analytics",
      "Integrated third-party APIs such as payment gateways and Google Maps",
      "Improved system performance through optimized MongoDB queries",
    ],
  },
  {
    type: "edu",
    title: "Bachelor of Computer Science",
    org: "PMAS Arid Agriculture University",
    period: "2020 – 2024",
    current: false,
    points: [],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/20",
    skills: ["Node.js", "Express.js", "REST APIs", "Django", "Python", "Microservices"],
  },
  {
    title: "AI / ML",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
    skills: ["Python", "OpenCV", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
  },
  {
    title: "Databases",
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/20",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "DevOps & Tools",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Linux",
      "VPS Hosting",
      "DigitalOcean",
      "Nginx",
      "PM2",
      "SSL/TLS",
      "Docker",
      "Domain & DNS",
      "Vercel",
      "Render",
      "Postman",
    ],
  },
];
