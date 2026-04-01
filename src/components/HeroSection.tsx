import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(174 72% 56%) 1px, transparent 1px), linear-gradient(90deg, hsl(174 72% 56%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Available for work</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              <span className="text-foreground">Umer</span>{" "}
              <span className="text-gradient-primary">Khayam</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
              Full Stack & AI Developer
            </p>
            <p className="text-base text-muted-foreground/70 mb-8 max-w-lg mx-auto lg:mx-0">
              Building scalable SaaS platforms, ERP/CRM systems, and real-time applications with MERN stack & AI integration.
            </p>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow">
                <Mail className="w-4 h-4" /> Get in Touch
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-card transition-colors">
                View Projects
              </a>
            </div>

            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener" className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:umerkhayam1717@gmail.com" className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/20 shadow-glow">
                <img src={avatarImg} alt="Umer Khayam" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-4 rounded-full border border-primary/10 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
