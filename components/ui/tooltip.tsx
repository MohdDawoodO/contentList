import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Tooltip({
  children,
  tooltip,
  position,
}: {
  children: React.ReactNode;
  tooltip: string;
  position: "right" | "left";
}) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
      <AnimatePresence>
        {hovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className={`absolute top-10/9 min-w-fit rounded-md bg-white p-1 px-2 text-black ${position === "right" ? "right-0" : "left-0"}`}
          >
            <h1 className="min-w-fit">{tooltip}</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
