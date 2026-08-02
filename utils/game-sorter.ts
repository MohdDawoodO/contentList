import { StaticImageData } from "next/image";

type dataType = {
  id: number;
  name: string;
  rating: number;
  release: Date;
  coverImage: StaticImageData;
  played: boolean;
  trailer: string;
}[];

export type gameSortMethodType = "Default" | "(a-z)" | "Release" | "Rating";

export function gameSorter(
  data: dataType,
  method: gameSortMethodType,
  searchInput: string,
) {
  const filteredData = data.filter((a) =>
    a.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  switch (method) {
    case "Default":
      return filteredData.sort((a, b) => {
        if (a.rating === b.rating) {
          a.release.getTime() - b.release.getTime();
        }

        return b.rating - a.rating;
      });

    case "(a-z)":
      return filteredData.sort((a, b) => a.name.localeCompare(b.name));

    case "Rating":
      return filteredData.sort((a, b) => b.rating - a.rating);

    case "Release":
      return filteredData.sort(
        (a, b) => b.release.getTime() - a.release.getTime(),
      );
  }
}
