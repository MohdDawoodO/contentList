"use client";

import {
  animeSortMethods,
  gameGenreFilter,
  gameSortMethods,
  mediaGenreFilter,
  movieSortMethods,
  movieTypeFilter,
  pages,
  playedStatusFilter,
  watchedStatusFilter,
} from "@/data/common-data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useParallax from "../utils/use-parallax";
import Select from "../ui/select";
import {
  searchState,
  animeSortMethodState,
  movieSortMethodState,
  gameSortMethodState,
  animeFiltersState,
  movieFiltersState,
  gameFiltersState,
} from "@/utils/common-states";
import { useAtom } from "jotai";
import Filters from "../ui/filters";
import { AnimatePresence, motion } from "motion/react";
import NavLinks from "./nav-links";
import NavBackground from "./nav-background";

export default function Nav() {
  const pathname = usePathname();
  const [search, setSearch] = useAtom(searchState);

  const [animeSortMethod, setAnimeSortMethod] = useAtom(animeSortMethodState);
  const [movieSortMethod, setMovieSortMethod] = useAtom(movieSortMethodState);
  const [gameSortMethod, setGameSortMethod] = useAtom(gameSortMethodState);

  const [animeFilters, setAnimeFilters] = useAtom(animeFiltersState);
  const [gameFilters, setGameFilters] = useAtom(gameFiltersState);
  const [movieFilters, setMovieFilters] = useAtom(movieFiltersState);

  const [open, setOpen] = useState(false);

  function movieSortMethodsHandler() {
    if (movieFilters.type === "Series")
      return [...movieSortMethods, "Episodes"];
    return movieSortMethods;
  }

  useEffect(() => {
    setMovieSortMethod({ ...movieSortMethod, method: "Rating" });
  }, [movieFilters.type]);

  useEffect(() => {
    const controller = useParallax();
    scrollTo(0, 0);
    setSearch("");
    setAnimeSortMethod({ method: "Default", reverse: false });
    setGameSortMethod({ method: "Rating", reverse: false });
    setMovieSortMethod({ method: "Rating", reverse: false });

    setAnimeFilters({ genre: "All", watchedStatus: "All" });
    setGameFilters({ genre: "All", playedStatus: "All" });
    setMovieFilters({ genre: "All", type: "All", watchedStatus: "All" });

    return () => {
      controller.abort();
    };
  }, [pathname]);

  if (pathname === "/") return;

  const currentPage = pages.filter((a) => pathname === a.path)[0];

  if (!currentPage) return null;

  return (
    <>
      <nav className="relative flex min-h-[40vh] items-end lg:min-h-[50vh]">
        <NavBackground currentPage={currentPage} />

        <div className="relative flex w-full flex-col items-center justify-center gap-4 pt-8 pb-4 sm:gap-8 sm:pt-12 lg:pb-8">
          <div>
            <h1 className="text-2xl font-semibold sm:text-3xl">
              <span
                key={currentPage.title}
                style={{
                  color: currentPage.accent,
                  textShadow: `0px 0px 10px ${currentPage.accent}bf`,
                }}
                className={`w-24 text-end`}
              >
                {currentPage.title}
              </span>
              List
            </h1>
          </div>

          <div className="flex w-full max-w-2xl flex-col gap-4 px-4 text-sm sm:text-lg lg:px-0">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder={
                "Type name of" +
                " " +
                (currentPage.title === "Anime" ? "an" : "a") +
                " " +
                currentPage.title.toLowerCase()
              }
              className="p-x2 inline-block w-full rounded-sm bg-white p-2 font-semibold transition-all duration-200 focus:outline-4 sm:p-2 sm:px-4"
              style={{
                color: currentPage.accent,
                background: currentPage.bg + "75",
                border: "2px solid " + currentPage.accent,
                outlineColor: currentPage.accent + "50",
              }}
            />
            <div className="flex justify-between">
              <div className="flex items-center">
                <Filters
                  open={open}
                  setOpen={setOpen}
                  genreFilter={
                    pathname === "/games" ? gameGenreFilter : mediaGenreFilter
                  }
                  mediaTypeFilter={
                    pathname === "/movies" ? movieTypeFilter : undefined
                  }
                  statusFilter={
                    pathname === "/games"
                      ? playedStatusFilter
                      : watchedStatusFilter
                  }
                  state={
                    pathname === "/anime"
                      ? animeFilters
                      : pathname === "/games"
                        ? gameFilters
                        : movieFilters
                  }
                  setState={
                    pathname === "/anime"
                      ? setAnimeFilters
                      : pathname === "/games"
                        ? setGameFilters
                        : setMovieFilters
                  }
                  currentPage={currentPage}
                />
              </div>

              <Select
                state={
                  pathname === "/anime"
                    ? animeSortMethod
                    : pathname === "/games"
                      ? gameSortMethod
                      : movieSortMethod
                }
                setState={
                  pathname === "/anime"
                    ? setAnimeSortMethod
                    : pathname === "/games"
                      ? setGameSortMethod
                      : setMovieSortMethod
                }
                items={
                  pathname === "/anime"
                    ? animeSortMethods
                    : pathname === "/games"
                      ? gameSortMethods
                      : movieSortMethodsHandler()
                }
                currentPage={currentPage}
              />
            </div>
            <NavLinks currentPage={currentPage} />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            className="bg fixed top-0 left-0 z-10 h-full w-full bg-black opacity-50 backdrop-blur-2xl"
          />
        )}
      </AnimatePresence>
    </>
  );
}
