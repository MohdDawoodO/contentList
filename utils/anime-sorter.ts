import { StaticImageData } from "next/image";

type dataType = {
  id: number;
  name: string;
  episodes: number;
  rating: number;
  coverImage: StaticImageData;
  watched: boolean;
  status: "Ongoing" | "Finished";
}[];

export type methodType = "Default" | "(a-z)" | "Episodes" | "Rating";

export function animeSorter(
  data: dataType,
  method: methodType,
  searchInput: string,
) {
  const filteredData = data.filter((a) =>
    a.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  switch (method) {
    case "Default":
      return filteredData.sort((a, b) => {
        if (a.rating === b.rating) {
          return a.episodes - b.episodes;
        }

        if (a.episodes > 100 || b.episodes > 100) {
          return a.episodes - b.episodes;
        }
        return b.rating - a.rating;
      });

    case "(a-z)":
      return filteredData.sort((a, b) => a.name.localeCompare(b.name));

    case "Rating":
      return filteredData.sort((a, b) => b.rating - a.rating);

    case "Episodes":
      return filteredData.sort((a, b) => a.episodes - b.episodes);
  }
}
