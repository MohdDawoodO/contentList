import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton({ color }: { color: string }) {
  const [scrollLength, setScrollLength] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollLength);

    function checkScrollLength() {
      const scrolled = window.scrollY;
      setScrollLength(scrolled);
    }

    return () => window.removeEventListener("scroll", checkScrollLength);
  }, []);

  return (
    <AnimatePresence>
      {scrollLength > 1500 && (
        <motion.button
          className="fixed right-10 bottom-10 z-50 cursor-pointer rounded-full bg-[rgba(0,0,0,0.75)] p-2 backdrop-blur-sm 2xl:right-50"
          style={{
            border: "2px solid " + color,
            color,
            boxShadow: `0px 0px 15px ${color}`,
          }}
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
