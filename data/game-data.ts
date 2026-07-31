export const gameData: {
  id: number;
  name: string;
  rating: number;
  release: number;
  coverImage: string;
  played: boolean;
  trailer: string;
}[] = [
  {
    id: 1,
    name: "...",
    release: 2009 + 1 / 12, // year and month
    rating: 9, // (steam rating + ign rating)/2
    coverImage: "@/assets/images/games/...",
    played: true,
    trailer: "https://youtube.com/",
  },
];
