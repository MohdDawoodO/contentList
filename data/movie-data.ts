export const movieData: {
  id: number;
  name: string;
  rating: number;
  episodes?: number;
  status?: "Ongoing" | "Finsished";
  release: number;
  coverImage: string;
  watched: boolean;
  trailer: string;
  type: "Movie" | "TV Show";
}[] = [
  {
    id: 1,
    name: "...",
    release: 2012 + 5 / 12, // year and month
    rating: 8.2, // imdb rating
    coverImage: "@/assets/images/movies/...",
    watched: false,
    trailer: "https://youtube.com/",
    type: "Movie",
  },
  {
    id: 2,
    name: "Sherlock",
    episodes: 12,
    rating: 9, // imdb rating
    release: 2010 + 5 / 12, // year and month
    coverImage: "@/assets/images/movies/...",
    watched: true,
    status: "Finsished",
    trailer: "https://youtube.com/",
    type: "Movie",
  },
];
