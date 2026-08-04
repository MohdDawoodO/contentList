import { gameDataType, gameFiltersType } from "@/data/common-data";

export function gameFilter(data: gameDataType[], filters: gameFiltersType) {
  const filteredData = data
    .filter((a) => {
      switch (filters.playedStatus) {
        case "All":
          return a;
        case "Played":
          return a.played;
        case "Not Played":
          return !a.played;
      }
    })
    .filter((b) => {
      if (filters.genre === "All") {
        return b;
      }

      if (b.genre.includes(filters.genre)) {
        return b;
      }
    });

  return filteredData;
}
