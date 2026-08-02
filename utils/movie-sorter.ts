import { StaticImageData } from "next/image";

type dataType = {
  id: number;
  name: string;
  rating: number;
  episodes?: number;
  status?: "Ongoing" | "Finished";
  release: Date;
  coverImage: StaticImageData;
  watched: boolean;
  trailer: string;
  type: "movie" | "series";
}[];

export type movieSortMethodType =
  "Default" | "(a-z)" | "Release" | "Episodes" | "Rating";

export function movieSorter(
  data: dataType,
  method: movieSortMethodType,
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
    case "Episodes":
      return filteredData.sort((a, b) => {
        if (a.episodes && b.episodes) return a.episodes - b.episodes;
        return 2 - 1;
      });
  }
}
