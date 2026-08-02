import { StaticImageData } from "next/image";

import sherlock from "@/assets/images/movies/sherlock.jpg";
import interstellar from "@/assets/images/movies/interstellar.jpg";
import pussInBoots from "@/assets/images/movies/puss-in-boots.jpg";
import theAdventuresOfTintin from "@/assets/images/movies/the-adventures-of-tintin.jpg";
import wallE from "@/assets/images/movies/wall-e.jpg";

export const movieData: {
  id: number;
  name: string;
  rating: number;
  episodes?: number;
  status?: "Ongoing" | "Finished";
  release: Date;
  coverImage: StaticImageData;
  watched: boolean;
  trailer: string;
  type: "movie" | "series";
}[] = [
  {
    id: 1,
    name: "Sherlock",
    release: new Date("2010-07-05"),
    rating: 9,
    episodes: 12,
    status: "Finished",
    coverImage: sherlock,
    watched: true,
    trailer: "https://youtube.com/",
    type: "series",
  },
  {
    id: 2,
    name: "Interstellar",
    release: new Date("2014-11-05"),
    rating: 8.7,
    coverImage: interstellar,
    watched: false,
    trailer: "https://youtube.com/",
    type: "movie",
  },
  {
    id: 3,
    name: "Puss in Boots: The Last Wish",
    release: new Date("2022-12-21"),
    rating: 7.9,
    coverImage: pussInBoots,
    watched: true,
    trailer: "https://youtube.com/",
    type: "movie",
  },
  {
    id: 4,
    name: "The Adventures of Tintin",
    release: new Date("2011-10-22"),
    rating: 7.3,
    coverImage: theAdventuresOfTintin,
    watched: true,
    trailer: "https://youtube.com/",
    type: "movie",
  },
  {
    id: 5,
    name: "Wall-E",
    release: new Date("2008-06-27"),
    rating: 7.3,
    coverImage: wallE,
    watched: true,
    trailer: "https://youtube.com/",
    type: "movie",
  },
];
