import { movieDataType, movieSortMethodType } from "@/data/common-data";

export function movieSorter(
  data: movieDataType[],
  method: movieSortMethodType,
  searchInput: string,
  reverse: boolean,
) {
  const filteredData = data.filter((a) =>
    a.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const sortedData = filteredData.sort((a, b) => {
    switch (method) {
      case "Date":
        return a.release.getTime() - b.release.getTime();

      case "Alphabets":
        return a.name.localeCompare(b.name);

      case "Episodes":
        if (a.episodes && b.episodes) return a.episodes - b.episodes;
    }
    return b.rating - a.rating;
  });

  if (reverse) return sortedData.reverse();
  return sortedData;
}
