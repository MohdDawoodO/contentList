import { atom } from "jotai";
import { animeSortMethodType } from "./anime-sorter";
import { gameSortMethodType } from "./game-sorter";
import { movieSortMethodType } from "./movie-sorter";

export const animeSortMethodState = atom<animeSortMethodType>("Default");
export const gameSortMethodState = atom<gameSortMethodType>("Default");
export const movieSortMethodState = atom<movieSortMethodType>("Default");
export const searchState = atom("");
