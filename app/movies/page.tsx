"use client";

import MovieCard from "@/components/movies/movie-card";
import { pages } from "@/data/common-data";
import { movieData } from "@/data/movie-data";
import { searchState, movieSortMethodState } from "@/utils/common-states";
import { movieSorter } from "@/utils/movie-sorter";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

export default function Movie() {
  const pathname = usePathname();
  const currentPage = pages.filter((a) => pathname.includes(a.path))[0];

  const [sortMethod] = useAtom(movieSortMethodState);
  const [search] = useAtom(searchState);

  const sortedMovies = movieSorter(movieData, sortMethod, search);

  return (
    <div className="min-h-lvh bg-[#0b0d0e]">
      <div
        className={
          "max-w-8xl m-auto grid min-h-[60vh] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] flex-wrap items-center justify-center gap-8 px-4 pt-4 pb-32 2xl:px-0 " +
          (search ? "sm:grid-cols-[repeat(auto-fit,minmax(250px,280px))]" : "")
        }
      >
        {sortedMovies.map((movie) => (
          <MovieCard
            release={movie.release}
            type={movie.type}
            key={movie.id}
            id={movie.id}
            name={movie.name}
            episodes={movie.episodes}
            rating={movie.rating}
            watched={movie.watched}
            coverImage={movie.coverImage}
            status={movie.status}
            currentPage={currentPage}
          />
        ))}
      </div>
    </div>
  );
}
