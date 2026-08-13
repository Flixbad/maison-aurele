"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.25 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setVisible(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest(
        "a, button, [data-cursor]",
      ) as HTMLElement | null;
      setHovering(Boolean(el));
      setLabel(el?.dataset.cursor || "");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100]"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border-2 border-void bg-acid"
        animate={{
          width: hovering ? (label ? 72 : 48) : 16,
          height: hovering ? (label ? 72 : 48) : 16,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
      >
        {label ? (
          <span className="font-mono text-[9px] font-medium tracking-wider uppercase">
            {label}
          </span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
