"use client";

import AnimeCard from "@/components/anime/anime-card";
import { animeData } from "@/data/anime-data";
import { pages } from "@/data/common-data";
import { animeSorter } from "@/utils/anime-sorter";
import { searchState, animeSortMethodState } from "@/utils/common-states";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

export default function Anime() {
  const pathname = usePathname();
  const currentPage = pages.filter((a) => pathname.includes(a.path))[0];

  const [sortMethod] = useAtom(animeSortMethodState);
  const [search] = useAtom(searchState);

  const sortedAnime = animeSorter(animeData, sortMethod, search);

  return (
    <div className="bg-[#0d0b0b]">
      <div
        className={
          "max-w-8xl m-auto grid min-h-[60vh] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] flex-wrap items-center justify-center gap-8 px-4 pt-4 pb-32 2xl:px-0 " +
          (search ? "sm:grid-cols-[repeat(auto-fit,minmax(250px,280px))]" : "")
        }
      >
        {sortedAnime.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            name={anime.name}
            episodes={anime.episodes}
            rating={anime.rating}
            watched={anime.watched}
            coverImage={anime.coverImage}
            status={anime.status}
            currentPage={currentPage}
          />
        ))}
      </div>
    </div>
  );
}
