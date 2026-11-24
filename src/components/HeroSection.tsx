import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import ParticleField from "./ParticleField";
import SandParticleAvatar from "./SandParticleAvatar";
import TypewriterText from "./TypewriterText";
import AnimatedCounter from "./AnimatedCounter";
import avatarImg from "@/assets/avatar.png";
import { profile, projects, skillCategories } from "@/data/portfolioData";
import { BackgroundPathsEffect } from "@/components/ui/background-paths";

const YEAR_MS = 365.25 * 24 * 3600 * 1000;
const yearsExperience = Math.max(1, Math.floor((Date.now() - profile.careerStart.getTime()) / YEAR_MS));
const aiSystems = projects.filter((p) => p.domain === "AI & Computer Vision").length;
const technologies = new Set(skillCategories.flatMap((c) => c.skills)).size;

const stats = [
  { end: yearsExperience, suffix: "+", label: "Years Experience" },
  { end: 25, suffix: "+", label: "Projects Delivered" },
  { end: aiSystems, suffix: "", label: "AI Systems Shipped" },
  { end: Math.floor(technologies / 5) * 5, suffix: "+", label: "Technologies" },
];

const socials = [
  { href: profile.github, label: "GitHub", icon: Github, external: true },
  { href: profile.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail, external: false },
];

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center bg-gradient-hero overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-28">
      <ParticleField />
      <BackgroundPathsEffect />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_1fr] items-center gap-14 lg:gap-10">
          {/* ── Text ── */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 rounded-full border border-primary/15 bg-card/70 backdrop-blur mb-7 text-xs sm:text-sm"
            >
              <span className="inline-flex items-center gap-2 text-primary font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                {profile.availability}
              </span>
              <span className="hidden sm:inline h-3 w-px bg-border" />
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" /> {profile.location}
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight mb-5 font-display leading-[0.95]">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="block text-foreground">
                {first}
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="block text-gradient-primary pb-2">
                {rest.join(" ")}
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl mb-4 font-display font-semibold min-h-[1.6em]"
            >
              <TypewriterText />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-9"
            >
              {profile.focus.map((f) => (
                <li key={f} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-card/80 border border-border text-secondary-foreground">
                  {f}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent("Project inquiry")}`}
                className="group inline-flex justify-center items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" /> Let's Talk
              </a>
              <a
                href="#projects"
                className="group inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-card/70 text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <div className="flex items-center gap-2 justify-center sm:ml-2 mt-2 sm:mt-0">
                {socials.map(({ href, label, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="p-3 rounded-xl border border-border bg-card/70 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Avatar ── */}
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease }}
          >
            <div className="absolute inset-6 bg-gradient-primary rounded-full blur-[80px] opacity-20 pointer-events-none" />

            <div className="relative">
              <SandParticleAvatar
                src={avatarImg}
                size={440}
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem]"
              />

              <div className="absolute inset-0 rounded-full border border-primary/10 pointer-events-none" style={{ animation: "spin 24s linear infinite" }} />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute right-0 top-[12%] px-3 py-1.5 rounded-lg glass-card shadow-card text-[11px] sm:text-xs font-mono font-medium text-primary pointer-events-none"
              >
                {"</>"} Full Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute left-0 bottom-[18%] px-3 py-1.5 rounded-lg glass-card shadow-card text-[11px] sm:text-xs font-mono font-medium text-accent pointer-events-none"
              >
                ◉ Computer Vision
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.6 }}
                className="absolute right-[4%] bottom-[6%] px-3 py-1.5 rounded-lg glass-card shadow-card text-[11px] sm:text-xs font-mono font-medium text-primary pointer-events-none"
              >
                ✦ AI Agents
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-3 text-center text-[11px] font-mono text-muted-foreground/60 pointer-events-none"
            >
              hover the portrait ✦
            </motion.p>
          </motion.div>
        </div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 rounded-2xl glass-card shadow-card overflow-hidden"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "py-6 px-4 border-border",
                i % 2 === 1 ? "border-l" : "",
                i >= 2 ? "border-t md:border-t-0" : "",
                i > 0 ? "md:border-l" : "",
              ].join(" ")}
            >
              <AnimatedCounter end={s.end} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-primary transition-colors z-10 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.a>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
};

export default HeroSection;
