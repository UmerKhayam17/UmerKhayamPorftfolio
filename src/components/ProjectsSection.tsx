import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolioData";
import { getTechIcon } from "@/lib/techIcons";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = Array.from(new Set(projects.map((project) => project.category)));
  const filterOptions = ["All", ...categories];
  const filteredProjects = useMemo(
    () => (selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)),
    [selectedCategory],
  );
  const featuredProjects = filteredProjects.filter((project) => project.featured);
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-padding relative bg-card/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          badge="Portfolio"
          title={<>Featured <span className="text-gradient-primary">Projects</span></>}
          subtitle="Production-deployed applications built for real clients and businesses."
        />

        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {filterOptions.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-xs rounded-full border font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary/15 text-primary border-primary/30"
                  : "bg-secondary/60 text-secondary-foreground border-border hover:border-primary/20 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured projects */}
        {featuredProjects.length > 0 && (
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-6">
            {featuredProjects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateY: 4, rotateX: 3, y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group card-spline relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 shadow-card hover:shadow-glow hover:-translate-y-1 overflow-hidden"
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
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
                  <div className="mb-3">
                    <span className="inline-flex px-2.5 py-1 text-[11px] font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-lg bg-secondary/70 text-secondary-foreground font-mono inline-flex items-center gap-1.5">
                        {(() => {
                          const iconMeta = getTechIcon(tag);
                          if (!iconMeta) return null;
                          const Icon = iconMeta.icon;
                          return <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: iconMeta.color }} />;
                        })()}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {otherProjects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotateY: 3, rotateX: 2, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group card-spline relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 shadow-card hover:shadow-glow hover:-translate-y-1 overflow-hidden"
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
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
                <div className="mb-3">
                  <span className="inline-flex px-2.5 py-1 text-[11px] font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-lg bg-secondary/70 text-secondary-foreground font-mono inline-flex items-center gap-1.5">
                      {(() => {
                        const iconMeta = getTechIcon(tag);
                        if (!iconMeta) return null;
                        const Icon = iconMeta.icon;
                        return <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: iconMeta.color }} />;
                      })()}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
