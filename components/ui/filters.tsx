import { pagesDataType } from "@/data/common-data";
import { AnimatePresence, motion } from "motion/react";
import { FaChevronDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export default function Filters({
  open,
  setOpen,
  statusFilter,
  mediaTypeFilter,
  genreFilter,
  state,
  setState,
  currentPage,
}: {
  open: boolean;
  setOpen: Function;
  statusFilter: string[];
  mediaTypeFilter?: string[];
  genreFilter: string[];
  state: any;
  setState: Function;
  currentPage: pagesDataType;
}) {
  return (
    <div className="relative z-20 w-fit">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-full cursor-pointer items-center justify-between rounded-sm p-2 duration-200 hover:opacity-80 focus:outline-4 sm:gap-2 sm:p-2 sm:px-4"
        style={{
          background: currentPage.accent,
          outlineColor: currentPage.accent + "50",
        }}
      >
        Filters
        <FaChevronDown size={12} className="sm:scale-125" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="dropdown absolute top-full left-0 z-50 flex h-80 w-30 translate-y-2 scrollbar-none flex-col items-start gap-1 overflow-y-scroll sm:h-100 sm:w-36"
            initial={{ y: -30, scale: 0.9, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -30, scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="flex min-h-fit w-full flex-col gap-px overflow-hidden rounded-sm"
              style={{ background: currentPage.bg }}
            >
              {statusFilter.map((status) => (
                <button
                  tabIndex={0}
                  key={status}
                  className="flex w-full cursor-pointer items-center justify-between p-2 text-start outline-0 duration-200 hover:opacity-65 focus:opacity-65"
                  style={{ background: currentPage.secondary }}
                  onClick={() => {
                    if (state.watchedStatus) {
                      setState({ ...state, watchedStatus: status });
                      return;
                    }
                    setState({ ...state, playedStatus: status });
                  }}
                >
                  <p>{status}</p>
                  {status === state.watchedStatus && (
                    <TiTick size={16} className="sm:scale-110" />
                  )}
                  {status === state.playedStatus && (
                    <TiTick size={16} className="sm:scale-110" />
                  )}
                </button>
              ))}
            </div>
            <div
              className="flex min-h-fit w-full flex-col gap-px overflow-hidden rounded-sm"
              style={{ background: currentPage.bg }}
            >
              {mediaTypeFilter &&
                mediaTypeFilter.map((media) => (
                  <button
                    tabIndex={0}
                    key={media}
                    className="flex w-full cursor-pointer items-center justify-between p-2 text-start outline-0 duration-200 hover:opacity-65 focus:opacity-65"
                    style={{ background: currentPage.secondary }}
                    onClick={() => setState({ ...state, type: media })}
                  >
                    <p>{media}</p>
                    {media === state.type && (
                      <TiTick size={16} className="sm:scale-110" />
                    )}
                  </button>
                ))}
            </div>
            <div
              className="flex min-h-fit w-full flex-col gap-px overflow-hidden rounded-sm"
              style={{ background: currentPage.bg }}
            >
              {genreFilter.map((genre) => (
                <button
                  tabIndex={0}
                  key={genre}
                  className="flex w-full cursor-pointer items-center justify-between p-2 text-start outline-0 duration-200 hover:opacity-65 focus:opacity-65"
                  style={{ background: currentPage.secondary }}
                  onClick={() => setState({ ...state, genre: genre })}
                >
                  <p>{genre}</p>
                  {genre === state.genre && (
                    <TiTick size={16} className="sm:scale-110" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
