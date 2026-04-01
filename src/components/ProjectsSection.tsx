import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "SaaS Based ERP",
    desc: "Enterprise resource planning platform with multi-tenant architecture, real-time dashboards, role-based access, and modular services for complete business management.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "REST API"],
    featured: true,
  },
  {
    title: "ERP For Matrix Engineering",
    desc: "Custom ERP solution for an engineering firm with inventory management, invoicing, project tracking, and HR modules.",
    tags: ["MERN", "PostgreSQL", "Docker", "Nginx"],
    featured: true,
  },
  {
    title: "Hospital Management System",
    desc: "Full-featured HMS with patient records, appointments scheduling, billing automation, and analytics dashboards.",
    tags: ["React", "Express", "MongoDB", "REST API"],
    featured: false,
  },
  {
    title: "Travels & Tours Platform",
    desc: "Complete booking platform with Google Maps integration, payment gateway, itinerary builder, and admin management panel.",
    tags: ["Next.js", "Node.js", "Stripe", "Maps API"],
    featured: false,
  },
  {
    title: "CRM System",
    desc: "Customer relationship management with lead tracking, sales pipeline, automation workflows, and comprehensive reporting.",
    tags: ["React", "Node.js", "MongoDB", "Redis"],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative bg-card/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          badge="Portfolio"
          title={<>Featured <span className="text-gradient-primary">Projects</span></>}
          subtitle="Production-deployed applications built for real clients and businesses."
        />

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 shadow-card hover:shadow-glow hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-display mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-lg bg-secondary/70 text-secondary-foreground font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-card/70 border border-border hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors font-display">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 text-xs rounded-md bg-secondary/50 text-muted-foreground font-mono">
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
