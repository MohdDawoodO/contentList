import { StaticImageData } from "next/image";
import redDeadRedemption from "@/assets/images/games/red-dead-redemption-2.jpg";
import theLastofUs from "@/assets/images/games/the-last-of-us.jpg";
import detroitBecomeHuman from "@/assets/images/games/detroit-become-human.jpg";
import forzaHorizon5 from "@/assets/images/games/forza-horizon-5.jpg";
import forzaHorizon6 from "@/assets/images/games/forza-horizon-6.jpg";
import assassinsCreedBrotherhood from "@/assets/images/games/assassins-creed-2-brotherhood.jpg";
import marvelsSpiderManRemastered from "@/assets/images/games/marvels-spider-man-remastered.jpg";
import assassinsCreed3 from "@/assets/images/games/assassins-creed-3.jpg";
import assassinsCreedBlackFlag from "@/assets/images/games/assassins-creed-black-flag.jpg";
import battlefield5 from "@/assets/images/games/battlefield-5.jpg";
import assassinsCreedUnity from "@/assets/images/games/assassins-creed-unity.jpg";
import battlefield1 from "@/assets/images/games/battlefield-1.jpg";
import watchDogs from "@/assets/images/games/watch-dogs.jpg";
import battlefield3 from "@/assets/images/games/battlefield-3.jpg";
import battlefield6 from "@/assets/images/games/battlefield-6.jpg";
import bioshockInfinite from "@/assets/images/games/bioshock-infinite.jpg";
import deltaForce from "@/assets/images/games/delta-force.jpg";
import dishonored from "@/assets/images/games/dishonored.jpg";
import farCry3 from "@/assets/images/games/far-cry-3.jpg";
import ghostOfTsushima from "@/assets/images/games/ghost-of-tsushima.jpg";
import gtav from "@/assets/images/games/gta-v.jpg";
import hogwartsLegacy from "@/assets/images/games/hogwarts-legacy.jpg";
import hollowKnight from "@/assets/images/games/hollow-knight.jpg";
import hollowKnightSilksong from "@/assets/images/games/hollow-knight-silksong.jpg";
import assassinsCreedRogue from "@/assets/images/games/assassins-creed-rogue.jpg";
import marvelsSpiderMan2 from "@/assets/images/games/marvels-spider-man-2.jpg";
import minecraft from "@/assets/images/games/minecraft.jpg";
import skillwarz from "@/assets/images/games/skillwarz.png";
import spiderManMilesMorales from "@/assets/images/games/spider-man-miles-morales.jpg";
import tinyGlade from "@/assets/images/games/tiny-glade.jpg";

export const gameData: {
  id: number;
  name: string;
  rating: number;
  release: Date;
  coverImage: StaticImageData;
  played: boolean;
}[] = [
  {
    id: 1,
    name: "Red Dead Redemption 2",
    release: new Date("2018-10-26"),
    rating: 9.6,
    coverImage: redDeadRedemption,
    played: true,
  },
  {
    id: 2,
    name: "The Last of Us",
    release: new Date("2013-06-14"),
    rating: 9.5,
    coverImage: theLastofUs,
    played: false,
  },
  {
    id: 3,
    name: "Detroit: Become Human",
    release: new Date("2018-05-25"),
    rating: 9.1,
    coverImage: detroitBecomeHuman,
    played: true,
  },
  {
    id: 4,
    name: "Forza Horizon 5",
    release: new Date("2021-11-09"),
    rating: 9.1,
    coverImage: forzaHorizon5,
    played: true,
  },
  {
    id: 5,
    name: "Forza Horizon 6",
    release: new Date("2026-05-19"),
    rating: 9.5,
    coverImage: forzaHorizon6,
    played: true,
  },
  {
    id: 6,
    name: "Assassin's Creed 2: Brotherhood",
    release: new Date("2010-11-16"),
    rating: 8.5,
    coverImage: assassinsCreedBrotherhood,
    played: true,
  },
  {
    id: 7,
    name: "Assassin's Creed 3",
    release: new Date("2012-10-30"),
    rating: 7.4,
    coverImage: assassinsCreed3,
    played: true,
  },
  {
    id: 8,
    name: "Assassin's Creed 4: Black Flag",
    release: new Date("2013-10-29"),
    rating: 8.7,
    coverImage: assassinsCreedBlackFlag,
    played: true,
  },
  {
    id: 9,
    name: "Assassin's Creed Rogue",
    release: new Date("2014-11-11"),
    rating: 7.9,
    coverImage: assassinsCreedRogue,
    played: true,
  },
  {
    id: 10,
    name: "Assassin's Creed Unity",
    release: new Date("2014-11-13"),
    rating: 7.3,
    coverImage: assassinsCreedUnity,
    played: true,
  },
  {
    id: 11,
    name: "Battlefield 1",
    release: new Date("2016-10-21"),
    rating: 8.7,
    coverImage: battlefield1,
    played: true,
  },
  {
    id: 12,
    name: "Battlefield 5",
    release: new Date("2018-11-20"),
    rating: 6.9,
    coverImage: battlefield5,
    played: true,
  },
  {
    id: 13,
    name: "Battlefield 6",
    release: new Date("2025-10-10"),
    rating: 7.2,
    coverImage: battlefield6,
    played: false,
  },
  {
    id: 14,
    name: "Bioshock Infinite",
    release: new Date("2013-03-26"),
    rating: 9.1,
    coverImage: bioshockInfinite,
    played: true,
  },
  {
    id: 15,
    name: "Delta Force",
    release: new Date("2024-12-04"),
    rating: 6.5,
    coverImage: deltaForce,
    played: true,
  },
  {
    id: 16,
    name: "Dishonored",
    release: new Date("2012-10-09"),
    rating: 9.2,
    coverImage: dishonored,
    played: false,
  },
  {
    id: 17,
    name: "Far Cry 3",
    release: new Date("2012-11-29"),
    rating: 8.9,
    coverImage: farCry3,
    played: false,
  },
  {
    id: 18,
    name: "Ghost of Tsushima",
    release: new Date("2020-07-17"),
    rating: 9,
    coverImage: ghostOfTsushima,
    played: false,
  },
  {
    id: 19,
    name: "Grand Theft Auto 5",
    release: new Date("2013-09-17"),
    rating: 9.4,
    coverImage: gtav,
    played: true,
  },
  {
    id: 20,
    name: "Hogwarts Legacy",
    release: new Date("2023-05-05"),
    rating: 8.8,
    coverImage: hogwartsLegacy,
    played: false,
  },
  {
    id: 21,
    name: "Hollow Knight",
    release: new Date("2017-02-24"),
    rating: 9.4,
    coverImage: hollowKnight,
    played: true,
  },
  {
    id: 22,
    name: "Hollow Knight: Silksong",
    release: new Date("2025-09-04"),
    rating: 9,
    coverImage: hollowKnightSilksong,
    played: false,
  },
  {
    id: 23,
    name: "Marvel's Spider-Man Remastered",
    release: new Date("2020-11-12"),
    rating: 9.3,
    coverImage: marvelsSpiderManRemastered,
    played: true,
  },
  {
    id: 24,
    name: "Marvel's Spider-Man 2",
    release: new Date("2023-10-20"),
    rating: 8.6,
    coverImage: marvelsSpiderMan2,
    played: true,
  },
  {
    id: 25,
    name: "Minecraft",
    release: new Date("2009-05-17"),
    rating: 8.9,
    coverImage: minecraft,
    played: true,
  },
  {
    id: 26,
    name: "Skillwarz",
    release: new Date("2026-07-30"),
    rating: 8,
    coverImage: skillwarz,
    played: true,
  },
  {
    id: 27,
    name: "Spider-Man: Miles Morales",
    release: new Date("2020-11-12"),
    rating: 8.7,
    coverImage: spiderManMilesMorales,
    played: true,
  },
  {
    id: 28,
    name: "Tiny Glade",
    release: new Date("2024-09-23"),
    rating: 8.5,
    coverImage: tinyGlade,
    played: true,
  },
  {
    id: 29,
    name: "Watch Dogs",
    release: new Date("2014-05-27"),
    rating: 7.6,
    coverImage: watchDogs,
    played: true,
  },
  {
    id: 30,
    name: "Battlefield 3",
    release: new Date("2011-10-25"),
    rating: 7.7,
    coverImage: battlefield3,
    played: true,
  },
];
