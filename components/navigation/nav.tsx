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
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useParallax from "../utils/use-parallax";
import PopupNav from "./popup-nav";
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
    setAnimeSortMethod({ ...animeSortMethod, method: "Default" });
    setGameSortMethod({ ...gameSortMethod, method: "Rating" });
    setMovieSortMethod({ ...movieSortMethod, method: "Rating" });

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
      <nav className="relative min-h-[40vh] lg:min-h-[50vh]">
        <div
          key={currentPage.title}
          className="background absolute h-full w-full before:absolute before:h-full before:w-full before:backdrop-blur-xs"
          style={{
            backgroundImage: `linear-gradient(${currentPage.bg}bf, ${currentPage.bg})`,
          }}
        >
          <Image
            className="pointer-events-none absolute -z-1 h-full w-full object-cover object-top"
            src={currentPage.image}
            alt="ss"
            width={1920}
            height={1080}
            loading="eager"
            data-parallax="-65"
          />
        </div>

        <div className="absolute flex h-4/5 w-full flex-col items-center justify-center gap-4 sm:gap-8">
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

          <div className="mx-4 flex w-full max-w-2xl flex-col gap-4 px-4 text-sm sm:text-lg">
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
              <div className="flex items-center gap-2">
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

              <div className="flex items-center gap-2">
                <p className="hidden sm:block">Sort By:</p>
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
            </div>
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
      <PopupNav
        currentPage={currentPage}
        pathname={pathname}
        search={search}
        filters={
          animeFilters.genre !== "All" ||
          animeFilters.watchedStatus !== "All" ||
          gameFilters.genre !== "All" ||
          gameFilters.playedStatus !== "All" ||
          movieFilters.genre !== "All" ||
          movieFilters.watchedStatus !== "All" ||
          movieFilters.type !== "All"
        }
      />
    </>
  );
}
