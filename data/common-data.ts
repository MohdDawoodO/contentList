import gamesBG from "@/assets/backgrounds/games-bg.jpg";
import animeBG from "@/assets/backgrounds/anime-bg.jpg";
import moviesBG from "@/assets/backgrounds/movies-bg.jpg";
import booksBG from "@/assets/backgrounds/books-bg.jpg";
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

type mediaType = "All" | "Cartoon" | "Series" | "Movie";
type watchedStatusType = "All" | "Watched" | "Not Watched";
type playedStatusType = "All" | "Played" | "Not Played";
type readStatusType = "All" | "Read" | "Not Read";

type mediaGenreType =
  | "All"
  | "Action"
  | "Adventure"
  | "Comedy"
  | "Crime"
  | "Dark Fantasy"
  | "Family"
  | "Fantasy"
  | "Horror"
  | "Murder"
  | "Mystery"
  | "Sci-fi"
  | "Thriller";
type gameGenreType =
  | "All"
  | "Action"
  | "Dark Fantasy"
  | "Fantasy"
  | "FPS"
  | "Open World"
  | "Platformer"
  | "RPG"
  | "Racing"
  | "Sandbox"
  | "Shooter"
  | "Strategy"
  | "Survival";

type bookGenreType =
  | "All"
  | "Action"
  | "Adventure"
  | "Crime"
  | "Dark Fantasy"
  | "Fantasy"
  | "Fiction"
  | "Murder"
  | "Survival"
  | "Mystery"
  | "Science"
  | "Studies";

export type movieFiltersType = {
  watchedStatus: watchedStatusType;
  type: mediaType;
  genre: mediaGenreType;
};
export type animeFiltersType = {
  watchedStatus: watchedStatusType;
  genre: mediaGenreType;
};
export type gameFiltersType = {
  playedStatus: playedStatusType;
  genre: gameGenreType;
};
export type bookFiltersType = {
  readStatus: readStatusType;
  genre: bookGenreType;
};

export type movieSortMethodType = "Rating" | "Alphabets" | "Date" | "Episodes";
export type gameSortMethodType = "Rating" | "Alphabets" | "Date";
export type animeSortMethodType =
  "Default" | "Alphabets" | "Episodes" | "Rating";
export type bookSortMethodType = "Rating" | "Alphabets" | "Date";

export type movieDataType = {
  name: string;
  rating: number;
  episodes?: number;
  status?: "Ongoing" | "Finished";
  release: Date;
  coverImage: StaticImageData;
  watched: boolean;
  type: "Movie" | "Series" | "Cartoon";
  genre: mediaGenreType[];
};
export type gameDataType = {
  name: string;
  rating: number;
  release: Date;
  coverImage: StaticImageData;
  played: boolean;
  genre: gameGenreType[];
};
export type animeDataType = {
  name: string;
  episodes: number;
  rating: number;
  coverImage: StaticImageData;
  watched: boolean;
  status: "Ongoing" | "Finished";
  genre: mediaGenreType[];
};
export type bookDataType = {
  name: string;
  rating: number;
  coverImage: StaticImageData;
  release: Date;
  read: boolean;
  genre: bookGenreType[];
};

export const animeSortMethods: animeSortMethodType[] = [
  "Default",
  "Alphabets",
  "Rating",
  "Episodes",
];
export const gameSortMethods: gameSortMethodType[] = [
  "Rating",
  "Alphabets",
  "Date",
];
export const movieSortMethods: movieSortMethodType[] = [
  "Rating",
  "Alphabets",
  "Date",
];
export const bookSortMethods: bookSortMethodType[] = [
  "Rating",
  "Alphabets",
  "Date",
];

export const watchedStatusFilter: watchedStatusType[] = [
  "All",
  "Watched",
  "Not Watched",
];

export const playedStatusFilter: playedStatusType[] = [
  "All",
  "Played",
  "Not Played",
];
export const readStatusFilter: readStatusType[] = ["All", "Read", "Not Read"];

export const movieTypeFilter: mediaType[] = [
  "All",
  "Movie",
  "Cartoon",
  "Series",
];

export const mediaGenreFilter: mediaGenreType[] = [
  "All",
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Dark Fantasy",
  "Family",
  "Fantasy",
  "Horror",
  "Murder",
  "Mystery",
  "Sci-fi",
  "Thriller",
];
export const gameGenreFilter: gameGenreType[] = [
  "All",
  "Action",
  "Dark Fantasy",
  "Fantasy",
  "FPS",
  "Open World",
  "Platformer",
  "RPG",
  "Racing",
  "Sandbox",
  "Shooter",
  "Strategy",
  "Survival",
];
export const bookGenreFilter: bookGenreType[] = [
  "All",
  "Action",
  "Adventure",
  "Crime",
  "Dark Fantasy",
  "Fantasy",
  "Fiction",
  "Murder",
  "Mystery",
  "Science",
  "Studies",
  "Survival",
];

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
  {
    title: "Book",
    body: "books",
    accent: "#c46d60",
    secondary: "#56150B",
    bg: "#0e0c0c",
    path: "/books",
    image: booksBG,
  },
];
