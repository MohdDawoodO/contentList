export function animeSorter(
  data: {
    id: number;
    name: string;
    episodes: number;
    rating: number;
    coverImage: string;
    watched: boolean;
    status: "ongoing" | "finished";
  }[],
) {
  const sortedData = data.sort((a, b) => {
    if (a.rating === b.rating) {
      return a.episodes - b.episodes;
    }

    if (a.episodes > 100 || b.episodes > 100) {
      return a.episodes - b.episodes;
    }
    return b.rating - a.rating;
  });

  return sortedData;
}
