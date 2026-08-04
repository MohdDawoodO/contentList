import { animeDataType, animeSortMethodType } from "@/data/common-data";

export function animeSorter(
  data: animeDataType[],
  method: animeSortMethodType,
  searchInput: string,
  reverse: boolean,
) {
  const filteredData = data.filter((a) =>
    a.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const sortedData = filteredData.sort((a, b) => {
    switch (method) {
      case "Default":
        if (a.rating === b.rating) {
          return a.episodes - b.episodes;
        }
        if (a.episodes > 100 || b.episodes > 100) {
          return a.episodes - b.episodes;
        }
        return b.rating - a.rating;

      case "Rating":
        return b.rating - a.rating;

      case "Alphabets":
        return a.name.localeCompare(b.name);

      case "Episodes":
        return a.episodes - b.episodes;
    }
  });

  if (reverse) return sortedData.reverse();
  return sortedData;
}
