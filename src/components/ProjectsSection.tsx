import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SaaS Based ERP",
    desc: "Enterprise resource planning platform with multi-tenant architecture, real-time dashboards, and modular services.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    title: "ERP For Matrix Engineering",
    desc: "Custom ERP solution for engineering firm with inventory, invoicing, and project management modules.",
    tags: ["MERN", "PostgreSQL", "Docker"],
  },
  {
    title: "Hospital Management System",
    desc: "Full-featured HMS with patient records, appointments, billing, and analytics dashboards.",
    tags: ["React", "Express", "MongoDB", "REST API"],
  },
  {
    title: "Travels & Tours Platform",
    desc: "Booking platform with Google Maps integration, payment gateway, and admin management panel.",
    tags: ["Next.js", "Node.js", "Stripe", "Maps API"],
  },
  {
    title: "CRM System",
    desc: "Customer relationship management with leads tracking, automation workflows, and reporting.",
    tags: ["React", "Node.js", "MongoDB", "Redis"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Live <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
