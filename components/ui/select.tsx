import { pagesDataType } from "@/data/common-data";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { PiSortAscendingBold } from "react-icons/pi";
import { TbSortAscending } from "react-icons/tb";

export default function Select({
  state,
  setState,
  items,
  currentPage,
}: {
  state: { method: string; reverse: boolean };
  setState: Function;
  items: string[];
  currentPage: pagesDataType;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative w-fit">
        <button
          onClick={() => setOpen(!open)}
          className="flex h-full w-22 cursor-pointer items-center justify-between rounded-sm p-2 duration-200 hover:opacity-80 focus:outline-4 sm:w-32 sm:gap-2 sm:p-2 sm:px-4"
          style={{
            background: currentPage.accent,
            outlineColor: currentPage.accent + "50",
          }}
        >
          {state.method}
          <FaChevronDown size={12} className="sm:scale-125" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              className="dropdown absolute top-full left-0 z-50 flex w-full translate-y-2 flex-col items-start gap-px overflow-hidden rounded-sm"
              initial={{ y: -20, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -10, scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ background: currentPage.bg }}
            >
              {items.map((item) => (
                <button
                  tabIndex={0}
                  key={item}
                  className="w-full cursor-pointer border-black p-2 text-start outline-0 duration-200 hover:opacity-65 focus:opacity-65"
                  style={{ background: currentPage.secondary }}
                  onClick={() => {
                    setState({ ...state, method: item });
                    setOpen(false);
                  }}
                >
                  <p>{item}</p>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-sm duration-200 hover:opacity-80 focus:outline-4"
        style={{
          background: currentPage.accent,
          outlineColor: currentPage.accent + "50",
        }}
        onClick={() => setState({ ...state, reverse: !state.reverse })}
      >
        {state.reverse ? (
          <PiSortAscendingBold size={20} />
        ) : (
          <TbSortAscending size={20} />
        )}
      </button>
    </>
  );
}
