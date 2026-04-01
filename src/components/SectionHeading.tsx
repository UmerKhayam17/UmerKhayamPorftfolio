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
      <span className="inline-block px-3 py-1 text-xs font-mono rounded-full border border-primary/20 text-primary bg-primary/5 mb-4 uppercase tracking-widest">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className={`text-muted-foreground text-lg leading-relaxed ${center ? "max-w-2xl mx-auto" : "max-w-3xl"}`}>
        {subtitle}
      </p>
    )}
    <div className={`w-20 h-1 bg-gradient-primary rounded-full mt-6 mb-12 ${center ? "mx-auto" : ""}`} />
  </motion.div>
);

export default SectionHeading;
