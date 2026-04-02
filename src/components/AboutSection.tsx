import { motion } from "framer-motion";
import { Code2, Database, Cloud, Brain, Layers, Terminal, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";

type HighlightItem = CardStackItem & {
  icon: LucideIcon;
  color: string;
};

const highlights: HighlightItem[] = [
  {
    id: "full-stack",
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end web applications built with React.js, Node.js, and modern JavaScript tooling - from pixel-perfect UIs to robust server-side logic.",
    color: "text-primary",
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent, data-driven solutions using Python, TensorFlow, PyTorch, and OpenCV - including computer vision and NLP integrations.",
    color: "text-accent",
  },
  {
    id: "saas-architecture",
    icon: Layers,
    title: "SaaS Architecture",
    description:
      "Multi-tenant SaaS platforms engineered with modular, scalable architecture - built to handle real users, real data, and real growth.",
    color: "text-primary",
  },
  {
    id: "database-design",
    icon: Database,
    title: "Database Design",
    description:
      "Optimized database schemas and query performance across MongoDB, PostgreSQL, MySQL, and Redis for high-load production systems.",
    color: "text-accent",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Production deployments via Docker, CI/CD pipelines, Nginx, VPS hosting, DigitalOcean, Vercel, and Render - with SSL/TLS and domain configuration.",
    color: "text-primary",
  },
  {
    id: "api-engineering",
    icon: Terminal,
    title: "API Engineering",
    description:
      "Secure, well-documented RESTful APIs and microservices with third-party integrations - payment gateways, Google Maps, and more.",
    color: "text-accent",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          badge="About"
          title={<>Know Who <span className="text-gradient-primary">I Am</span></>}
          subtitle="Full-stack & AI developer with a proven record of building and shipping scalable SaaS platforms, ERP/CRM systems, and real-time web applications. I specialize in the MERN stack with deep expertise in React.js, Node.js, and MongoDB - and I'm actively expanding into AI/ML with Python, TensorFlow, Django, and PostgreSQL. Every system I build is designed for performance, security, and long-term maintainability."
        />

        {/* Mobile/tablet: show all cards in a clean responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
          {highlights.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group card-spline relative h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 shadow-card hover:shadow-card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-display text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: keep the current animated stack */}
        <div className="hidden lg:block">
          <CardStack
            items={highlights}
            initialIndex={0}
            maxVisible={5}
            cardWidth={720}
            cardHeight={300}
            overlap={0.72}
            spreadDeg={34}
            depthPx={95}
            tiltXDeg={9}
            activeLiftPx={16}
            activeScale={1.02}
            inactiveScale={0.96}
            springStiffness={170}
            springDamping={32}
            autoAdvance
            intervalMs={4800}
            pauseOnHover
            showDots
            className="mx-auto"
            renderCard={(item) => (
              <motion.div className="group card-spline relative h-full p-7 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 shadow-card hover:shadow-card-hover">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 font-display text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
