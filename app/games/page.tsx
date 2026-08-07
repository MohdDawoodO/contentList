"use client";

import GameCard from "@/components/games/game-card";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { pages } from "@/data/common-data";
import { gameData } from "@/data/game-data";
import {
  searchState,
  gameSortMethodState,
  gameFiltersState,
} from "@/utils/common-states";
import { gameFilter } from "@/utils/game-filter";
import { gameSorter } from "@/utils/game-sorter";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

export default function Game() {
  const pathname = usePathname();
  const currentPage = pages.filter((a) => pathname.includes(a.path))[0];

  const [sortMethod] = useAtom(gameSortMethodState);
  const [filters] = useAtom(gameFiltersState);
  const [search] = useAtom(searchState);

  const sortedGames = gameSorter(
    gameData,
    sortMethod.method,
    search,
    sortMethod.reverse,
  );

  const filteredGames = gameFilter(sortedGames, filters);

  return (
    <div className="min-h-[60vh] bg-[#0b0e0c]">
      <div
        className={
          "max-w-8xl m-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] flex-wrap items-center justify-center gap-8 px-4 pt-4 pb-32 2xl:px-0 " +
          (filteredGames.length < 5 && filteredGames.length !== 0
            ? "sm:grid-cols-[repeat(auto-fit,minmax(250px,280px))]"
            : "")
        }
      >
        {filteredGames.map((game, i) => (
          <GameCard
            key={i}
            name={game.name}
            rating={game.rating}
            played={game.played}
            coverImage={game.coverImage}
            genre={game.genre}
            release={game.release}
            currentPage={currentPage}
          />
        ))}
        {!filteredGames.length && (
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
