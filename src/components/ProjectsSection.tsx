import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, ExternalLink, Globe, LayoutDashboard, Lock, ShoppingCart, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projectDomains, projects, type Project, type ProjectDomain } from "@/data/portfolioData";

const domainIcons: Record<ProjectDomain, LucideIcon> = {
  "AI & Computer Vision": Cpu,
  "SaaS & Business Platforms": LayoutDashboard,
  "POS & Retail": ShoppingCart,
  "Web & Mobile": Globe,
};
import { getTechIcon } from "@/lib/techIcons";

type ProjectCardProps = { project: Project; index: number; featured?: boolean };

const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  const Tag = project.link ? motion.a : motion.div;
  const DomainIcon = domainIcons[project.domain];
  const linkProps = project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Tag
      {...linkProps}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={featured ? { rotateY: 4, rotateX: 3, y: -6 } : { rotateY: 3, rotateX: 2, y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.07 }}
      className="spotlight group card-spline relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 shadow-card hover:shadow-glow hover:-translate-y-1 overflow-hidden"
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className={`rounded-xl flex items-center justify-center ${featured ? "w-12 h-12 bg-gradient-primary shadow-glow" : "w-10 h-10 bg-primary/10"}`}>
            <DomainIcon className={featured ? "w-6 h-6 text-primary-foreground" : "w-5 h-5 text-primary"} />
          </div>
          {project.link ? (
            <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
          ) : (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70" title="Private client project">
              <Lock className="w-3 h-3" /> Private
            </span>
          )}
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
          {project.tags.map((tag) => {
            const iconMeta = getTechIcon(tag);
            const Icon = iconMeta?.icon;
            return (
              <span key={tag} className="px-3 py-1 text-xs rounded-lg bg-secondary/70 text-secondary-foreground font-mono inline-flex items-center gap-1.5">
                {Icon && <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: iconMeta.color }} />}
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </Tag>
  );
};

const ProjectsSection = () => {
  const [selected, setSelected] = useState<ProjectDomain | "All">("All");
  const filterOptions = [
    { value: "All" as const, count: projects.length },
    ...projectDomains.map((d) => ({ value: d, count: projects.filter((p) => p.domain === d).length })),
  ];
  const filteredProjects = useMemo(
    () => (selected === "All" ? projects : projects.filter((project) => project.domain === selected)),
    [selected],
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
          subtitle="Production systems built for real clients — from SaaS and ERP platforms to AI surveillance and computer vision. Some client work is private, so it is listed without a link."
        />

        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2 mb-8 sm:mb-10">
          {filterOptions.map(({ value, count }) => {
            const active = selected === value;
            return (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelected(value)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                    : "bg-card text-secondary-foreground border-border hover:border-primary/30 hover:text-primary"
                }`}
              >
                {value}
                <span className={`text-[11px] font-mono px-1.5 rounded-md ${active ? "bg-white/20" : "bg-secondary"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Featured projects */}
        {featuredProjects.length > 0 && (
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={`${selected}-${project.title}`} project={project} index={i} featured />
            ))}
          </div>
        )}

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {otherProjects.map((project, i) => (
            <ProjectCard key={`${selected}-${project.title}`} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
