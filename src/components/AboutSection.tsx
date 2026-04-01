import { motion } from "framer-motion";
import { Code2, Database, Cloud, Brain, Layers, Terminal } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: Code2, label: "Full-Stack Development", desc: "End-to-end web applications with React, Node.js, and modern tooling", color: "text-primary" },
  { icon: Brain, label: "AI & Machine Learning", desc: "Intelligent solutions with Python, TensorFlow, and computer vision", color: "text-accent" },
  { icon: Layers, label: "SaaS Architecture", desc: "Multi-tenant platforms with modular, scalable architecture", color: "text-primary" },
  { icon: Database, label: "Database Design", desc: "Optimized schemas with MongoDB, PostgreSQL, and Redis", color: "text-accent" },
  { icon: Cloud, label: "Cloud & DevOps", desc: "Docker, CI/CD pipelines, VPS deployment, and monitoring", color: "text-primary" },
  { icon: Terminal, label: "API Engineering", desc: "RESTful APIs, microservices, and third-party integrations", color: "text-accent" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          badge="About"
          title={<>Know Who <span className="text-gradient-primary">I Am</span></>}
          subtitle="Full-stack developer with experience building scalable SaaS platforms, ERP/CRM systems, and real-time applications. Specialized in MERN stack with growing expertise in AI/ML, Python, Django, and PostgreSQL."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 shadow-card hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-display text-lg">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
