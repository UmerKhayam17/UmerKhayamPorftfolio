"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { type ElementType, type ReactNode, type RefObject, useRef } from "react";

type TimelineContentProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  animationNum?: number;
  customVariants?: Variants;
  timelineRef?: RefObject<HTMLElement | null>;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function TimelineContent({
  as: Tag = "div",
  className,
  children,
  animationNum = 0,
  customVariants,
  timelineRef,
}: TimelineContentProps) {
  const localRef = useRef<HTMLElement | null>(null);
  const isInView = useInView((timelineRef as RefObject<HTMLElement>) ?? localRef, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <motion.div
      ref={!timelineRef ? (localRef as RefObject<HTMLDivElement>) : undefined}
      custom={animationNum}
      variants={customVariants ?? defaultVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
}

