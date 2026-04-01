import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const AnimatedCounter = ({ end, suffix = "", label }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold font-display text-gradient-primary">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground mt-1 font-mono uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

export default AnimatedCounter;
