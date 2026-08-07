"use client";

import AnimeCard from "@/components/anime/anime-card";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { animeData } from "@/data/anime-data";
import { pages } from "@/data/common-data";
import { animeFilter } from "@/utils/anime-filter";
import { animeSorter } from "@/utils/anime-sorter";
import {
  searchState,
  animeSortMethodState,
  animeFiltersState,
} from "@/utils/common-states";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

export default function Anime() {
  const pathname = usePathname();
  const currentPage = pages.filter((a) => pathname.includes(a.path))[0];

  const [sortMethod] = useAtom(animeSortMethodState);
  const [filters] = useAtom(animeFiltersState);
  const [search] = useAtom(searchState);

  const sortedAnime = animeSorter(
    animeData,
    sortMethod.method,
    search,
    sortMethod.reverse,
  );

  const filteredAnime = animeFilter(sortedAnime, filters);

  return (
    <div className="min-h-[60vh] bg-[#0d0b0b]">
      <div
        className={
          "max-w-8xl m-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] flex-wrap items-center justify-center gap-8 px-4 pt-4 pb-32 2xl:px-0 " +
          (filteredAnime.length < 5 && filteredAnime.length !== 0
            ? "sm:grid-cols-[repeat(auto-fit,minmax(250px,280px))]"
            : "")
        }
      >
        {filteredAnime.map((anime, i) => (
          <AnimeCard
            key={i}
            name={anime.name}
            episodes={anime.episodes}
            rating={anime.rating}
            watched={anime.watched}
            coverImage={anime.coverImage}
            status={anime.status}
            genre={anime.genre}
            currentPage={currentPage}
          />
        ))}
        {!filteredAnime.length && (
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
