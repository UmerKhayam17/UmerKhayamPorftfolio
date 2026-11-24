import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { openCommandMenu } from "@/lib/commandMenu";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass shadow-card" : "bg-transparent"}`}
    >
      <motion.div className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-primary" style={{ scaleX: smoothProgress }} />

      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        <a href="#" className="text-xl sm:text-2xl font-extrabold font-display group" aria-label="Back to top">
          <span className="text-gradient-primary">UK</span>
          <span className="text-primary group-hover:opacity-0 transition-opacity">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-card/50 backdrop-blur px-1.5 py-1">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-4 py-1.5 text-sm rounded-full font-medium transition-colors duration-300 ${
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-primary shadow-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCommandMenu}
            className="hidden sm:inline-flex items-center gap-2 h-9 pl-3 pr-2 rounded-lg border border-border bg-card/60 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span className="hidden lg:inline">Search</span>
            <kbd className="ml-1 rounded border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-mono">{isMac ? "⌘" : "Ctrl"} K</kbd>
          </button>
          <button
            type="button"
            onClick={openCommandMenu}
            aria-label="Open command menu"
            className="sm:hidden w-9 h-9 rounded-lg border border-border bg-card/60 text-muted-foreground flex items-center justify-center"
          >
            <Search className="w-4 h-4" />
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex ml-1 px-5 py-2 text-sm rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all duration-300"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden w-9 h-9 flex items-center justify-center text-foreground rounded-lg hover:bg-card transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass border-t border-border"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-sm rounded-lg transition-all ${
                    active === l.id ? "text-primary bg-primary/10 font-semibold" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-primary font-semibold">
                Hire Me →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
