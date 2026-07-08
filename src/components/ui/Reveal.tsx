import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealDirection = "up" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "up" (default, vertical fade) · "left"/"right" (horizontal slide-in) */
  direction?: RevealDirection;
}

const offsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
};

/**
 * Scroll-driven reveal wrapper built on Motion's `whileInView`: animates in
 * on viewport entry and automatically reverts to `initial` when it scrolls
 * back out (viewport.once is false), so it replays every time. Soft spring
 * physics — a gentle settle, not a snap — for the "alive" but non-jarring
 * feel. Respects prefers-reduced-motion via <MotionConfig> in App.tsx.
 */
export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const { x, y } = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 20,
        mass: 0.8,
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
