import { StaticImageData } from "next/image";
import redDeadRedemption from "@/assets/images/games/red-dead-redemption-2.jpg";
import theLastofUs from "@/assets/images/games/the-last-of-us.jpg";
import detroitBecomeHuman from "@/assets/images/games/detroit-become-human.jpg";
import forzaHorizon5 from "@/assets/images/games/forza-horizon-5.jpg";
import forzaHorizon6 from "@/assets/images/games/forza-horizon-6.jpg";

export const gameData: {
  id: number;
  name: string;
  rating: number;
  release: Date;
  coverImage: StaticImageData;
  played: boolean;
  trailer: string;
}[] = [
  {
    id: 1,
    name: "Red Dead Redemption 2",
    release: new Date("2018-10-26"),
    rating: 9.8, // imdb rating
    coverImage: redDeadRedemption,
    played: true,
    trailer: "https://youtube.com/",
  },
  {
    id: 2,
    name: "The Last of Us",
    release: new Date("2013-06-14"),
    rating: 9.7,
    coverImage: theLastofUs,
    played: false,
    trailer: "https://youtube.com/",
  },
  {
    id: 3,
    name: "Detroit: Become Human",
    release: new Date("2018-05-25"),
    rating: 9.1,
    coverImage: detroitBecomeHuman,
    played: true,
    trailer: "https://youtube.com/",
  },
  {
    id: 4,
    name: "Forza Horizon 5",
    release: new Date("2021-11-09"),
    rating: 9.5,
    coverImage: forzaHorizon5,
    played: true,
    trailer: "https://youtube.com/",
  },
  {
    id: 5,
    name: "Forza Horizon 6",
    release: new Date("2026-05-19"),
    rating: 9.5,
    coverImage: forzaHorizon6,
    played: true,
    trailer: "https://youtube.com/",
  },
];
