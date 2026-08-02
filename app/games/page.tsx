"use client";

import GameCard from "@/components/games/game-card";
import { pages } from "@/data/common-data";
import { gameData } from "@/data/game-data";
import { gameSortMethodState, searchState } from "@/utils/common-states";
import { gameSorter } from "@/utils/game-sorter";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

export default function Movie() {
  const pathname = usePathname();
  const currentPage = pages.filter((a) => pathname.includes(a.path))[0];

  const [sortMethod] = useAtom(gameSortMethodState);
  const [search] = useAtom(searchState);

  const sortedGames = gameSorter(gameData, sortMethod, search);

  return (
    <div className="min-h-lvh bg-[#0b0e0c]">
      <div
        className={
          "max-w-8xl m-auto grid min-h-[60vh] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] flex-wrap items-center justify-center gap-8 px-4 pt-4 pb-32 2xl:px-0 " +
          (search ? "sm:grid-cols-[repeat(auto-fit,minmax(250px,280px))]" : "")
        }
      >
        {sortedGames.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            played={game.played}
            rating={game.rating}
            release={game.release}
            coverImage={game.coverImage}
            currentPage={currentPage}
          />
        ))}
      </div>
    </div>
  );
}
