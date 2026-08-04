import { movieDataType, movieFiltersType } from "@/data/common-data";

export function movieFilter(data: movieDataType[], filters: movieFiltersType) {
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
      switch (filters.type) {
        case "All":
          return b;
        case "Cartoon":
          return b.type === "Cartoon";
        case "Movie":
          return b.type === "Movie";
        case "Series":
          return b.type === "Series";
      }
    })
    .filter((c) => {
      if (filters.genre === "All") {
        return c;
      }
      if (c.genre.includes(filters.genre)) {
        return c;
      }
    });

  return filteredData;
}
