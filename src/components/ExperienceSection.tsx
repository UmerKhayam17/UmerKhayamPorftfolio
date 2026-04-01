import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    type: "work" as const,
    title: "MERN Stack Developer",
    org: "ClickMasters",
    period: "Oct 2024 – Present",
    current: true,
    points: [
      "Developing scalable SaaS-based CRM and ERP platforms using MERN stack",
      "Designing modular backend services and multi-tenant architecture",
      "Building dashboards, automation workflows, and secure authentication systems",
      "Handling deployments and optimizing databases for production systems",
    ],
  },
  {
    type: "work" as const,
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
    type: "edu" as const,
    title: "Bachelor of Computer Science",
    org: "PMAS Arid Agriculture University",
    period: "2020 – 2024",
    current: false,
    points: [],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          badge="Journey"
          title={<>Experience & <span className="text-gradient-primary">Education</span></>}
          subtitle="My professional journey and academic background."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-6 w-[38px] h-[38px] rounded-full flex items-center justify-center ${
                  exp.current 
                    ? "bg-primary/10 border-2 border-primary shadow-glow" 
                    : "bg-card border-2 border-border"
                }`}>
                  {exp.type === "work" ? (
                    <Briefcase className={`w-4 h-4 ${exp.current ? "text-primary" : "text-muted-foreground"}`} />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>

                <div className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  exp.current 
                    ? "bg-card border-primary/15 shadow-card hover:shadow-glow" 
                    : "bg-card/50 border-border hover:border-border"
                }`}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-primary">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-display">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">{exp.org}</p>
                  {exp.points.length > 0 && (
                    <ul className="space-y-2.5">
                      {exp.points.map((p, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-3 leading-relaxed">
                          <span className="text-primary mt-0.5 shrink-0">▹</span>
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
