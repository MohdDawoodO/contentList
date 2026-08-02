import { pagesDataType } from "@/data/common-data";
import { animeSortMethodType } from "@/utils/anime-sorter";
import { sortMethodState } from "@/utils/common-states";
import { SetStateAction } from "jotai";
import { useAtom } from "jotai";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Select({
  state: sortMethod,
  setState: setSortMethod,
  currentPage,
}: {
  state: string;
  setState: Function;
  currentPage: pagesDataType;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSortMethod("Default");
  }, []);

  const animeSortTypes: animeSortMethodType[] = [
    "Default",
    "(a-z)",
    "Episodes",
    "Rating",
  ];

  return (
    <div className="relative h-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-full w-22 cursor-pointer items-center justify-between rounded-r-sm p-2 duration-200 focus:outline-4 sm:w-32 sm:gap-2 sm:p-2 sm:px-4"
        style={{
          background: currentPage.accent,
          outlineColor: currentPage.accent + "50",
        }}
      >
        {sortMethod} <FaChevronDown size={12} className="sm:scale-125" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="dropdown absolute top-full left-0 flex w-full translate-y-2 flex-col items-start gap-px overflow-hidden rounded-sm"
            initial={{ y: -20, scale: 0.9, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -10, scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {animeSortTypes.map((method) => (
              <button
                tabIndex={0}
                key={method}
                className="w-full cursor-pointer border-black p-2 text-start outline-0 duration-200 hover:opacity-65 focus:opacity-65"
                style={{ background: currentPage.secondary }}
                onClick={() => {
                  setSortMethod(method);
                  setOpen(false);
                }}
              >
                <p>{method}</p>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
