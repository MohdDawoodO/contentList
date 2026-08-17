"use client";

import ContentCard from "@/components/content-card";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { pages } from "@/data/common-data";
import { movieData } from "@/data/movie-data";
import {
  searchState,
  movieSortMethodState,
  movieFiltersState,
} from "@/utils/common-states";
import { movieFilter } from "@/utils/movie-filter";
import { movieSorter } from "@/utils/movie-sorter";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

export default function Movie() {
  const pathname = usePathname();
  const currentPage = pages.filter((a) => pathname.includes(a.path))[0];

  const [sortMethod] = useAtom(movieSortMethodState);
  const [filters] = useAtom(movieFiltersState);
  const [search] = useAtom(searchState);

  const sortedMovies = movieSorter(
    movieData,
    sortMethod.method,
    search,
    sortMethod.reverse,
  );

  const filteredMovies = movieFilter(sortedMovies, filters);

  return (
    <div className="min-h-[60vh] bg-[#0b0d0e]">
      <div
        className={
          "max-w-8xl m-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] flex-wrap items-center justify-center gap-8 px-4 pt-4 pb-32 2xl:px-0 " +
          (filteredMovies.length < 5 && filteredMovies.length !== 0
            ? "sm:grid-cols-[repeat(auto-fit,minmax(250px,280px))]"
            : "")
        }
      >
        {filteredMovies.map((movie, i) => (
          <ContentCard
            key={i}
            name={movie.name}
            episodes={movie.episodes}
            rating={movie.rating}
            watched={movie.watched}
            coverImage={movie.coverImage}
            status={movie.status}
            genre={movie.genre}
            release={movie.release}
            currentPage={currentPage}
          />
        ))}
        {!filteredMovies.length && (
          <div
            className="flex flex-col justify-center text-center text-sm sm:text-xl"
            style={{ color: currentPage.accent }}
          >
            <p>
              The {currentPage.title.toLowerCase()} you searched for wasn't in
              the list
            </p>
            <p>Try changing search keyword or filters.</p>
          </div>
        )}
        <ScrollToTopButton color={currentPage.accent} />
      </div>
    </div>
  );
}
