import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
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
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
  },
  {
    title: "DevOps & Tools",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
    skills: ["Docker", "CI/CD", "Nginx", "Git", "GitHub", "Linux", "Vercel", "Render", "Postman"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative bg-card/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          badge="Skills"
          title={<>My Tech <span className="text-gradient-primary">Arsenal</span></>}
          subtitle="Technologies and tools I use to bring ideas to production."
        />

        <div className="space-y-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-start gap-5 p-5 rounded-2xl bg-card/50 border border-border"
            >
              <div className={`shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r ${cat.color} border ${cat.borderColor}`}>
                <span className="text-sm font-mono font-semibold text-foreground whitespace-nowrap">{cat.title}</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm rounded-xl border border-border bg-secondary/50 text-secondary-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
