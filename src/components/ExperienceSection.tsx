import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "MERN Stack Developer",
    org: "ClickMasters",
    period: "Oct 2024 – Present",
    points: [
      "Developing scalable SaaS-based CRM and ERP platforms using MERN stack",
      "Designing modular backend services and multi-tenant architecture",
      "Building dashboards, automation workflows, and secure auth systems",
      "Handling deployments and optimizing databases for production",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    org: "Smart Solutions",
    period: "Jan 2024 – Sep 2024",
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
    points: [],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Experience & <span className="text-gradient-primary">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                  {exp.type === "work" ? (
                    <Briefcase className="w-3.5 h-3.5 text-primary" />
                  ) : (
                    <GraduationCap className="w-3.5 h-3.5 text-primary" />
                  )}
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.org}</p>
                  {exp.points.length > 0 && (
                    <ul className="space-y-1.5">
                      {exp.points.map((p, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0">▸</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
