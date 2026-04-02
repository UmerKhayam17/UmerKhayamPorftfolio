import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, center }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={center ? "text-center" : ""}
  >
    {badge && (
      <motion.span
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="inline-block px-3 py-1 text-xs font-mono rounded-full border border-primary/20 text-primary bg-primary/5 mb-4 uppercase tracking-widest"
      >
        {badge}
      </motion.span>
    )}
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display tracking-tight mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className={`text-muted-foreground text-base sm:text-lg leading-relaxed ${center ? "max-w-2xl mx-auto" : "max-w-3xl"}`}>
        {subtitle}
      </p>
    )}
    <motion.div
      initial={{ scaleX: 0, opacity: 0.5 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`w-20 h-1 origin-left bg-gradient-primary rounded-full mt-6 mb-12 ${center ? "mx-auto origin-center" : ""}`}
    />
  </motion.div>
);

export default SectionHeading;
