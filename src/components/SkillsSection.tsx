import { motion } from "framer-motion";
import { Brain, Cloud, Database, Monitor, Server, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/portfolioData";
import { getTechIcon } from "@/lib/techIcons";

const meta: Record<string, { icon: LucideIcon; blurb: string; span?: string }> = {
  "AI / ML": { icon: Brain, blurb: "Vision models on live video, LLM agents, and model training.", span: "lg:col-span-2" },
  Frontend: { icon: Monitor, blurb: "Fast, accessible UIs for web and mobile." },
  Backend: { icon: Server, blurb: "APIs, real-time services, and multi-tenant architecture." },
  Databases: { icon: Database, blurb: "Schema design and query performance." },
  "DevOps & Tools": { icon: Cloud, blurb: "From first commit to a monitored production server." },
};

const SkillsSection = () => (
  <section id="skills" className="section-padding relative bg-card/20 overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto max-w-6xl relative">
      <SectionHeading
        badge="Skills"
        title={<>My Tech <span className="text-gradient-primary">Arsenal</span></>}
        subtitle="Technologies and tools I use to take ideas to production."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {[...skillCategories].sort((a, b) => Number(b.title === "AI / ML") - Number(a.title === "AI / ML")).map((cat, i) => {
          const m = meta[cat.title] ?? { icon: Server, blurb: "" };
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`spotlight group rounded-2xl bg-card border border-border p-6 sm:p-7 shadow-card hover:border-primary/25 hover:shadow-card-hover transition-all duration-500 ${m.span ?? ""} ${
                cat.title === "DevOps & Tools" ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative z-[1]">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <m.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground leading-tight">{cat.title}</h3>
                      <p className="text-xs text-muted-foreground">{m.blurb}</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[11px] font-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                    {cat.skills.length}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const iconMeta = getTechIcon(skill);
                    const Icon = iconMeta?.icon;
                    return (
                      <li
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg border border-border bg-secondary/50 text-secondary-foreground hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-200 font-medium inline-flex items-center gap-2"
                      >
                        {Icon && <Icon className="w-4 h-4 shrink-0" style={{ color: iconMeta.color }} />}
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SkillsSection;
