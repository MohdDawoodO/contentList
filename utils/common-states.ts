import { atom } from "jotai";
import { methodType } from "./anime-sorter";

export const sortMethodState = atom<methodType>("Default");
export const searchAnimeState = atom("");
