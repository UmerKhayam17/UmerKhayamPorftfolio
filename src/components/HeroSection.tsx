import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import ParticleField from "./ParticleField";
import TypewriterText from "./TypewriterText";
import AnimatedCounter from "./AnimatedCounter";
import avatarImg from "@/assets/avatar.png";
import { downloadResume } from "@/lib/downloadResume";
import { profile } from "@/data/portfolioData";
import { BackgroundPathsEffect } from "@/components/ui/background-paths";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-hero overflow-hidden">
      <ParticleField />
      <BackgroundPathsEffect />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-primary/5 animate-float opacity-30" />
      <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full border border-accent/5 animate-float-delayed opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/15 bg-primary/5 mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-sm text-primary/80 font-mono">Available for freelance & full-time</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-display leading-[0.95] sm:leading-[0.9]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-foreground"
              >
                Umer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block text-gradient-primary"
              >
                Khayam
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl mb-3 font-display font-medium min-h-[2em]"
            >
              <TypewriterText />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base text-muted-foreground/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Full-stack engineer delivering scalable SaaS, ERP/CRM, and AI-enabled products with clean architecture, secure APIs, and reliable production deployments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex w-full sm:w-auto flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Let's Talk
              </a>
              <a
                href="#projects"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                View Projects
              </a>
              {/* <button
                type="button"
                onClick={downloadResume}
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 py-3.5 rounded-xl text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-3 mt-10 justify-center lg:justify-start"
            >
              <a href={profile.github} target="_blank" rel="noopener" className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/umerkhayamsatti/" target="_blank" rel="noopener" className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:umerkhayam1717@gmail.com" className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0 relative mt-2 sm:mt-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ rotateY: -8, rotateX: 6, scale: 1.02 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative" style={{ perspective: "1200px" }}>
              {/* Glow behind avatar */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[60px] opacity-20 scale-110" />
              
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/20 shadow-glow">
                <img src={avatarImg} alt="Umer Khayam" className="w-full h-full object-cover" width={320} height={320} />
              </div>

              {/* Orbiting ring */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-primary/10" style={{ animation: "spin 20s linear infinite" }} />
              <div className="absolute -inset-8 sm:-inset-12 rounded-full border border-primary/5" style={{ animation: "spin 30s linear infinite reverse" }} />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -right-1 sm:-right-4 top-6 sm:top-8 px-2.5 sm:px-3 py-1.5 rounded-lg glass-card text-[10px] sm:text-xs font-mono text-primary"
                style={{ transform: "translateZ(18px)" }}
              >
                Full STACK
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-2 sm:-left-6 bottom-10 sm:bottom-12 px-2.5 sm:px-3 py-1.5 rounded-lg glass-card text-[10px] sm:text-xs font-mono text-accent"
                style={{ transform: "translateZ(18px)" }}
              >
                AI/ML
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 sm:mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 max-w-3xl mx-auto lg:mx-0"
        >
          <AnimatedCounter end={2} suffix="+" label="Years Experience" />
          <AnimatedCounter end={10} suffix="+" label="Projects Delivered" />
          <AnimatedCounter end={5} suffix="+" label="SaaS Platforms" />
          <AnimatedCounter end={15} suffix="+" label="Technologies" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/40 hover:text-primary transition-colors z-10"
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
