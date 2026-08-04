import { animeDataType, animeFiltersType } from "@/data/common-data";

export function animeFilter(data: animeDataType[], filters: animeFiltersType) {
  const filteredData = data
    .filter((a) => {
      switch (filters.watchedStatus) {
        case "All":
          return a;
        case "Watched":
          return a.watched;
        case "Not Watched":
          return !a.watched;
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
