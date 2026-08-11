import { bookDataType, bookFiltersType } from "@/data/common-data";

export function bookFilter(data: bookDataType[], filters: bookFiltersType) {
  const filteredData = data
    .filter((a) => {
      switch (filters.readStatus) {
        case "All":
          return a;
        case "Read":
          return a.read;
        case "Not Read":
          return !a.read;
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
