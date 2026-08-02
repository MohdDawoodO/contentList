import { atom } from "jotai";
import { animeSortMethodType } from "./anime-sorter";

export const sortMethodState = atom<animeSortMethodType>("Default");
export const searchAnimeState = atom("");
