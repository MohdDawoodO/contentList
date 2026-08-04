import { gameDataType, gameSortMethodType } from "@/data/common-data";

export function gameSorter(
  data: gameDataType[],
  method: gameSortMethodType,
  searchInput: string,
  reverse: boolean,
) {
  const filteredData = data.filter((a) =>
    a.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const sortedData = filteredData.sort((a, b) => {
    switch (method) {
      case "Rating":
        if (a.rating === b.rating) {
          return a.release.getTime() - b.release.getTime();
        }
        return b.rating - a.rating;

      case "Alphabets":
        return a.name.localeCompare(b.name);

      case "Date":
        return b.release.getTime() - a.release.getTime();
    }
  });

  if (reverse) return sortedData.reverse();
  return sortedData;
}
