import { bookDataType, bookSortMethodType } from "@/data/common-data";
import FuzzySearch from "fuzzy-search";

export function bookSorter(
  data: bookDataType[],
  method: bookSortMethodType,
  searchInput: string,
  reverse: boolean,
) {
  const searcher = new FuzzySearch(data, ["name"], {
    caseSensitive: false,
  });
  const result = searcher.search(searchInput);

  const sortedData = result.sort((a, b) => {
    switch (method) {
      case "Rating":
        if (a.rating === b.rating) {
          return a.release.getTime() - b.release.getTime();
        }
        return b.rating - a.rating;

      case "Alphabets":
        return a.name.localeCompare(b.name);

      case "Date":
        return a.release.getTime() - b.release.getTime();
    }
  });

  if (reverse) return sortedData.reverse();
  return sortedData;
}
