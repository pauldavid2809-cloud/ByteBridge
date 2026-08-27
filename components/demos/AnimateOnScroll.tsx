"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  threshold?: number;
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Scroll-triggered entrance animation wrapper.
 * Uses `useInView` for performant intersection-based triggering.
 * Respects prefers-reduced-motion via motion/react defaults.
 */
export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  y = 24,
  once = true,
  threshold = 0.15,
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Staggered children wrapper — each child animates with incremental delay.
 */
export function StaggerOnScroll({
  children,
  className = "",
  staggerDelay = 0.08,
  baseDelay = 0,
  y = 20,
  threshold = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
  y?: number;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
              transition={{
                duration: 0.45,
                delay: baseDelay + i * staggerDelay,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
