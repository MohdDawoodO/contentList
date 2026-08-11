import {
  animeFiltersType,
  animeSortMethodType,
  bookFiltersType,
  bookSortMethodType,
  gameFiltersType,
  gameSortMethodType,
  movieFiltersType,
  movieSortMethodType,
} from "@/data/common-data";
import { atom } from "jotai";

export const animeSortMethodState = atom<{
  method: animeSortMethodType;
  reverse: boolean;
}>({ method: "Default", reverse: false });
export const gameSortMethodState = atom<{
  method: gameSortMethodType;
  reverse: boolean;
}>({ method: "Rating", reverse: false });
export const movieSortMethodState = atom<{
  method: movieSortMethodType;
  reverse: boolean;
}>({ method: "Rating", reverse: false });
export const bookSortMethodState = atom<{
  method: bookSortMethodType;
  reverse: boolean;
}>({ method: "Rating", reverse: false });

export const searchState = atom("");

export const animeFiltersState = atom<animeFiltersType>({
  watchedStatus: "All",
  genre: "All",
});
export const gameFiltersState = atom<gameFiltersType>({
  playedStatus: "All",
  genre: "All",
});
export const movieFiltersState = atom<movieFiltersType>({
  watchedStatus: "All",
  type: "All",
  genre: "All",
});
export const bookFiltersState = atom<bookFiltersType>({
  readStatus: "All",
  genre: "All",
});
