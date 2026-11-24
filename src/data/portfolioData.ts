export const projectDomains = ["AI & Computer Vision", "SaaS & Business Platforms", "POS & Retail", "Web & Mobile"] as const;
export type ProjectDomain = (typeof projectDomains)[number];

export type Project = {
  title: string;
  category: string;
  domain: ProjectDomain;
  desc: string;
  tags: string[];
  /** Live site or public repo. Omit for private / client-confidential work. */
  link?: string;
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
  whatsapp: "923165511251",
  linkedin: "https://www.linkedin.com/in/umerkhayamsatti/",
  github: "https://github.com/UmerKhayam17",
  availability: "Open to freelance & full-time roles",
  /** Professional experience start, used to compute "years experience". */
  careerStart: new Date(2024, 0, 1),
  tagline:
    "I build production SaaS, ERP/CRM platforms and real-time AI systems — from multi-tenant web apps to computer-vision pipelines running across hundreds of live cameras.",
  summary:
    "Full-stack & AI developer who designs, builds, and deploys complete products end to end. On the web side I ship multi-tenant SaaS, ERP, CRM, and POS platforms with React/Next.js, Node.js, and MongoDB/PostgreSQL. On the AI side I build computer-vision and LLM systems: face recognition, person re-identification, license plate recognition, and video search on live CCTV, plus AI voice agents and local-LLM SEO automation. I also own production: Linux servers, Nginx, CI/CD, and GPU inference services.",
  roles: [
    "Full Stack Developer",
    "AI / Computer Vision Engineer",
    "SaaS Architect",
    "AI Agent Developer",
    "MERN & Django Engineer",
  ],
  focus: [
    "Multi-tenant SaaS, ERP & CRM",
    "Real-time computer vision",
    "LLM & voice AI agents",
    "Production DevOps",
  ],
};

export const projects: Project[] = [
  {
    title: "AI Video Surveillance Platform",
    category: "AI Surveillance Platform",
    domain: "AI & Computer Vision",
    desc: "Multi-city intelligent surveillance system built for ~500 live cameras: face recognition, person re-identification, license plate recognition (ANPR), pose and object tracking, cross-camera person journeys, forensic video search, camera health monitoring, and real-time alerts.",
    tags: ["Python", "Django", "PostgreSQL", "FastAPI", "YOLO", "PyTorch", "ONNX", "PaddleOCR", "React", "Socket.IO"],
    featured: true,
  },
  {
    title: "AlphaERP — AI SEO & Marketing Automation",
    category: "AI SaaS Platform",
    domain: "SaaS & Business Platforms",
    desc: "Multi-tenant SEO SaaS covering keyword research and clustering, AI content generation and review, site audits, competitor gap analysis, Search Console/GA4 analytics, and publishing to WordPress or Shopify — powered by a local LLM with no third-party AI keys.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MongoDB", "Redis", "FastAPI", "Ollama"],
    featured: true,
  },
  {
    title: "ERP Platform",
    category: "ERP System",
    domain: "SaaS & Business Platforms",
    desc: "Enterprise resource planning platform with multi-tenant modules, real-time business dashboards, and role-based operations.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "REST API"],
    link: "https://erp.clickmasters.pk/",
    featured: true,
  },
  {
    title: "Prime Leads CRM",
    category: "CRM System",
    domain: "SaaS & Business Platforms",
    desc: "Customer relationship platform for lead tracking, sales workflows, and team collaboration.",
    tags: ["React", "Node.js", "MongoDB", "CRM"],
    link: "https://crm.primeleadsllc.com/",
    featured: true,
  },
  {
    title: "ClickMasters Software",
    category: "Business Website",
    domain: "Web & Mobile",
    desc: "Corporate software services website showcasing solutions, services, and portfolio.",
    tags: ["Next.js", "Tailwind", "SEO", "MongoDB"],
    link: "http://software.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Hospital Management System",
    category: "Healthcare Management System",
    domain: "SaaS & Business Platforms",
    desc: "Healthcare management system with patient records, appointment handling, and operations support.",
    tags: ["React", "Express", "MongoDB", "REST API"],
    link: "http://hms.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Majestic Vacations",
    category: "Travel & Tours Platform",
    domain: "Web & Mobile",
    desc: "Travel and tours platform for destination discovery, booking flows, and customer engagement.",
    tags: ["React.js", "Node.js", "Stripe", "Affirm", "PayPal", "Klarna", "Maps API"],
    link: "http://themajesticvacations.com/",
    featured: false,
  },
  {
    title: "POS Platform",
    category: "POS System",
    domain: "POS & Retail",
    desc: "Point-of-sale system focused on fast billing, branch operations, and secure transactions.",
    tags: ["Next.js", "Node.js", "MongoDB", "POS"],
    link: "https://pos.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Alpha Monitoring",
    category: "AI Monitoring Platform",
    domain: "AI & Computer Vision",
    desc: "AI-powered tracking and productivity monitoring system for teams and operations.",
    tags: ["React", "Node.js", "AI", "Analytics"],
    link: "https://alphamonitoring.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Supermarket POS",
    category: "Retail POS System",
    domain: "POS & Retail",
    desc: "Retail intelligence platform with inventory, checkout, reporting, and branch-level control.",
    tags: ["Next.js", "Node.js", "POS", "Dashboards"],
    link: "http://supermarketpos.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Clothing POS",
    category: "Fashion POS System",
    domain: "POS & Retail",
    desc: "POS solution tailored for apparel stores with SKU handling and sales performance insights.",
    tags: ["Next.js", "Node.js", "POS", "Inventory"],
    link: "https://clothingpos.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Matrix Engineering ERP",
    category: "ERP System",
    domain: "SaaS & Business Platforms",
    desc: "Custom ERP for Matrix Engineering with integrated Inventory, Project Management, HR, and Finance modules.",
    tags: ["Next.js", "Node.js", "ERP", "Inventory", "Project Management", "HR", "Finance"],
    link: "http://matrixengineeringapp.clickmasters.pk/",
    featured: false,
  },
  {
    title: "Matrix Engineering Website",
    category: "Corporate Website",
    domain: "Web & Mobile",
    desc: "Corporate website for telecom infrastructure services, products, and client engagement.",
    tags: ["Next.js", "Tailwind", "Corporate", "SEO"],
    link: "https://matrixengineering.clickmasters.pk/",
    featured: false,
  },
  {
    title: "AI Voice Agent — Call Center Intake",
    category: "AI Voice Agent",
    domain: "AI & Computer Vision",
    desc: "AI voice assistant for inbound call centers that qualifies callers against versioned server-side rules and transfers qualified leads to a live agent queue, with PBX (Asterisk AMI/ARI) integration and an admin console.",
    tags: ["Node.js", "PostgreSQL", "React", "TypeScript", "AI", "Telephony"],
    featured: false,
  },
  {
    title: "Field Staff Mobile App",
    category: "Mobile App",
    domain: "Web & Mobile",
    desc: "Android & iOS field-staff app with live map location, attendance, duty GPS tracking, and an offline queue that syncs when the network returns. Shipped alongside an installable PWA.",
    tags: ["React Native", "Expo", "TypeScript", "Django", "Maps API"],
    link: "https://github.com/UmerKhayam17/CIIS-_MobileAPP",
    featured: false,
  },
  {
    title: "LeadFinder Pro",
    category: "Lead Generation Tool",
    domain: "SaaS & Business Platforms",
    desc: "B2B lead generation app that searches Google Maps / Places for businesses, crawls their websites for public contact emails, and streams results live with pause, resume, and cancel.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Python", "Nginx", "PM2"],
    link: "https://github.com/UmerKhayam17/pixel-perfect-echo-782",
    featured: false,
  },
  {
    title: "Dental Hospital Management System",
    category: "Healthcare Management System",
    domain: "SaaS & Business Platforms",
    desc: "Clinic management system for a dental hospital: patients, doctors, appointments, procedures, OPD billing and refunds, inventory, staff, and expenses.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    featured: false,
  },
  {
    title: "License Plate Recognition",
    category: "Computer Vision",
    domain: "AI & Computer Vision",
    desc: "YOLO license plate detector trained on 10,000+ images, paired with OCR to read plate numbers from images, video files, or a live webcam.",
    tags: ["Python", "YOLO", "OpenCV", "PyTorch", "OCR"],
    featured: false,
  },
  {
    title: "Phone-Usage Detection Model",
    category: "Computer Vision",
    domain: "AI & Computer Vision",
    desc: "Dual-branch fusion network that combines a ConvNeXt visual encoder with a 14-D body-pose kinematic MLP to detect phone use on CCTV while suppressing false positives. Trained on 13,000+ samples.",
    tags: ["Python", "PyTorch", "Deep Learning", "Pose Estimation"],
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
      "Developing scalable SaaS-based CRM, ERP, and POS platforms using Next.js, Node.js, MongoDB, and Tailwind CSS",
      "Building a multi-city AI video surveillance platform for ~500 cameras: face recognition, person re-ID, ANPR, pose and object tracking, and forensic video search (Django, FastAPI, YOLO, PyTorch)",
      "Training custom computer-vision models (license plate detection, phone-usage detection with a dual-branch fusion network) and serving them on GPU",
      "Shipping AI products: an AI SEO automation SaaS on a local LLM (Ollama) and an AI voice agent for call-center intake with PBX integration",
      "Delivering a React Native/Expo field-staff app and PWA with offline-first GPS tracking and attendance",
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
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "React Native", "Expo", "Bootstrap", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/20",
    skills: ["Node.js", "Express.js", "REST APIs", "Django", "FastAPI", "Python", "Prisma", "Socket.IO", "Microservices"],
  },
  {
    title: "AI / ML",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
    skills: ["Python", "PyTorch", "TensorFlow", "YOLO", "OpenCV", "ONNX", "Ollama", "Face Recognition", "OCR / ANPR", "NLP", "Computer Vision"],
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
