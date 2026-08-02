import gamesBG from "@/assets/backgrounds/games-bg.jpg";
import animeBG from "@/assets/backgrounds/anime-bg.jpg";
import moviesBG from "@/assets/backgrounds/movies-bg.jpg";
import { StaticImageData } from "next/image";

export type pagesDataType = {
  title: string;
  body: string;
  accent: string;
  bg: string;
  secondary: string;
  path: string;
  image: StaticImageData;
};

export const pages = [
  {
    title: "Game",
    body: "games",
    accent: "#0ebb47",
    bg: "#0b0e0c",
    secondary: "#034519",
    path: "/games",
    image: gamesBG,
  },
  {
    title: "Anime",
    body: "anime",
    accent: "#d40003",
    secondary: "#450303",
    bg: "#0d0b0b",
    path: "/anime",
    image: animeBG,
  },
  {
    title: "Movie",
    body: "movies",
    accent: "#1a6dda",
    secondary: "#031e45",
    bg: "#0b0d0e",
    path: "/movies",
    image: moviesBG,
  },
];
