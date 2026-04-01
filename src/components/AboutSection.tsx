import { motion } from "framer-motion";
import { Code2, Database, Cloud, Brain } from "lucide-react";

const highlights = [
  { icon: Code2, label: "MERN Stack", desc: "React, Node, Express, MongoDB" },
  { icon: Brain, label: "AI / ML", desc: "Python, TensorFlow, OpenCV" },
  { icon: Database, label: "Databases", desc: "PostgreSQL, MongoDB, Redis" },
  { icon: Cloud, label: "DevOps", desc: "Docker, CI/CD, VPS, Vercel" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />

          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-3xl">
            Full-stack developer with experience building scalable SaaS platforms, ERP/CRM systems, and real-time applications. 
            Specialized in MERN stack with growing expertise in AI/ML, Python, Django, and PostgreSQL. 
            Experienced in modular architecture, database optimization, and deploying production-grade systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all group"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
