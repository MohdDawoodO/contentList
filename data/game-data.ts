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
import tombRaider from "@/assets/images/games/tomb-raider.jpg";
import justCause from "@/assets/images/games/just-cause-3.jpg";
import riseOfTombRaider from "@/assets/images/games/rise-of-the-tomb-raider.jpg";
import shadowOfTombRaider from "@/assets/images/games/shadow-of-the-tomb-raider.jpg";
import godOfWar from "@/assets/images/games/god-of-war.jpg";
import godOfWarRagnarok from "@/assets/images/games/god-of-war-ragnarok.jpg";
import NFSMostWanted from "@/assets/images/games/nfs-most-wanted.jpg";
import CODMW from "@/assets/images/games/cod-mw.jpg";
import CODMW2 from "@/assets/images/games/cod-mw2.jpg";
import CODMW3 from "@/assets/images/games/cod-mw-3.png";
import CODMWRemake from "@/assets/images/games/cod-mw-remake.jpeg";
import CODMW2Remake from "@/assets/images/games/cod-mw2-remake.jpg";
import CODMW3Remake from "@/assets/images/games/cod-mw3-remake.png";
import CODBo from "@/assets/images/games/cod-bo.jpg";
import CODBo2 from "@/assets/images/games/cod-bo2.png";
import CODBo3 from "@/assets/images/games/cod-bo3.jpg";
import CODBoColdWar from "@/assets/images/games/cod-bo-cold-war.jpg";
import plantVsZombies from "@/assets/images/games/plant-vs-zombies.jpg";
import { gameDataType } from "./common-data";

export const gameData: gameDataType[] = [
  {
    name: "Red Dead Redemption 2",
    release: new Date("2018-10-26"),
    rating: 9.6,
    coverImage: redDeadRedemption,
    played: true,
    genre: ["Action", "Shooter", "Open World"],
  },
  {
    name: "The Last of Us",
    release: new Date("2013-06-14"),
    rating: 9.5,
    coverImage: theLastofUs,
    played: false,
    genre: ["Survival", "Action", "Shooter"],
  },
  {
    name: "Detroit: Become Human",
    release: new Date("2018-05-25"),
    rating: 9.1,
    coverImage: detroitBecomeHuman,
    played: true,
    genre: ["Action", "RPG"],
  },
  {
    name: "Forza Horizon 5",
    release: new Date("2021-11-09"),
    rating: 9.1,
    coverImage: forzaHorizon5,
    played: true,
    genre: ["Racing", "Open World"],
  },
  {
    name: "Forza Horizon 6",
    release: new Date("2026-05-19"),
    rating: 9.5,
    coverImage: forzaHorizon6,
    played: true,
    genre: ["Racing", "Open World"],
  },
  {
    name: "Assassin's Creed 2: Brotherhood",
    release: new Date("2010-11-16"),
    rating: 8.5,
    coverImage: assassinsCreedBrotherhood,
    played: true,
    genre: ["Action", "Open World"],
  },
  {
    name: "Assassin's Creed 3",
    release: new Date("2012-10-30"),
    rating: 7.4,
    coverImage: assassinsCreed3,
    played: true,
    genre: ["Action", "Open World"],
  },
  {
    name: "Assassin's Creed 4: Black Flag",
    release: new Date("2013-10-29"),
    rating: 8.7,
    coverImage: assassinsCreedBlackFlag,
    played: true,
    genre: ["Action", "Open World"],
  },
  {
    name: "Assassin's Creed Rogue",
    release: new Date("2014-11-11"),
    rating: 7.9,
    coverImage: assassinsCreedRogue,
    played: true,
    genre: ["Action", "Open World"],
  },
  {
    name: "Assassin's Creed Unity",
    release: new Date("2014-11-13"),
    rating: 7.3,
    coverImage: assassinsCreedUnity,
    played: true,
    genre: ["Action", "Open World"],
  },
  {
    name: "Battlefield 1",
    release: new Date("2016-10-21"),
    rating: 8.7,
    coverImage: battlefield1,
    played: true,
    genre: ["Action", "FPS"],
  },
  {
    name: "Battlefield 5",
    release: new Date("2018-11-20"),
    rating: 6.9,
    coverImage: battlefield5,
    played: true,
    genre: ["Action", "FPS"],
  },
  {
    name: "Battlefield 6",
    release: new Date("2025-10-10"),
    rating: 7.2,
    coverImage: battlefield6,
    played: false,
    genre: ["Action", "FPS"],
  },
  {
    name: "Bioshock Infinite",
    release: new Date("2013-03-26"),
    rating: 9.1,
    coverImage: bioshockInfinite,
    played: true,
    genre: ["Action", "Fantasy"],
  },
  {
    name: "Delta Force",
    release: new Date("2024-12-04"),
    rating: 6.5,
    coverImage: deltaForce,
    played: true,
    genre: ["Action", "FPS"],
  },
  {
    name: "Dishonored",
    release: new Date("2012-10-09"),
    rating: 9.2,
    coverImage: dishonored,
    played: false,
    genre: ["Action", "Dark Fantasy"],
  },
  {
    name: "Far Cry 3",
    release: new Date("2012-11-29"),
    rating: 8.9,
    coverImage: farCry3,
    played: false,
    genre: ["Action", "FPS", "Open World"],
  },
  {
    name: "Ghost of Tsushima",
    release: new Date("2020-07-17"),
    rating: 9,
    coverImage: ghostOfTsushima,
    played: false,
    genre: ["Action", "Open World"],
  },
  {
    name: "Grand Theft Auto 5",
    release: new Date("2013-09-17"),
    rating: 9.4,
    coverImage: gtav,
    played: true,
    genre: ["Action", "Open World"],
  },
  {
    name: "Hogwarts Legacy",
    release: new Date("2023-05-05"),
    rating: 8.8,
    coverImage: hogwartsLegacy,
    played: false,
    genre: ["Action", "RPG", "Open World"],
  },
  {
    name: "Hollow Knight",
    release: new Date("2017-02-24"),
    rating: 9.4,
    coverImage: hollowKnight,
    played: true,
    genre: ["Action", "Fantasy", "Platformer"],
  },
  {
    name: "Hollow Knight: Silksong",
    release: new Date("2025-09-04"),
    rating: 9,
    coverImage: hollowKnightSilksong,
    played: false,
    genre: ["Action", "Fantasy", "Platformer"],
  },
  {
    name: "Marvel's Spider-Man Remastered",
    release: new Date("2020-11-12"),
    rating: 9.3,
    coverImage: marvelsSpiderManRemastered,
    played: true,
    genre: ["Action", "Fantasy", "Open World"],
  },
  {
    name: "Marvel's Spider-Man 2",
    release: new Date("2023-10-20"),
    rating: 8.6,
    coverImage: marvelsSpiderMan2,
    played: true,
    genre: ["Action", "Fantasy", "Open World"],
  },
  {
    name: "Minecraft",
    release: new Date("2009-05-17"),
    rating: 8.9,
    coverImage: minecraft,
    played: true,
    genre: ["Survival", "Sandbox", "Open World"],
  },
  {
    name: "Skillwarz",
    release: new Date("2026-07-30"),
    rating: 8,
    coverImage: skillwarz,
    played: true,
    genre: ["Action", "FPS"],
  },
  {
    name: "Spider-Man: Miles Morales",
    release: new Date("2020-11-12"),
    rating: 8.7,
    coverImage: spiderManMilesMorales,
    played: true,
    genre: ["Action", "Fantasy", "Open World"],
  },
  {
    name: "Tiny Glade",
    release: new Date("2024-09-23"),
    rating: 8.5,
    coverImage: tinyGlade,
    played: true,
    genre: ["Sandbox"],
  },
  {
    name: "Watch Dogs",
    release: new Date("2014-05-27"),
    rating: 7.6,
    coverImage: watchDogs,
    played: true,
    genre: ["Action", "Shooter", "Open World"],
  },
  {
    name: "Battlefield 3",
    release: new Date("2011-10-25"),
    rating: 7.7,
    coverImage: battlefield3,
    played: true,
    genre: ["Action", "FPS"],
  },
  {
    name: "Tomb Raider",
    release: new Date("2013-03-05"),
    rating: 8.9,
    coverImage: tombRaider,
    played: true,
    genre: ["Action", "Survival", "Fantasy"],
  },
  {
    name: "Just Cause 3",
    release: new Date("2015-12-01"),
    rating: 7.3,
    coverImage: justCause,
    played: true,
    genre: ["Action", "Open World"],
  },
  {
    name: "Rise of the Tomb Raider",
    release: new Date("2015-11-10"),
    rating: 9,
    coverImage: riseOfTombRaider,
    played: false,
    genre: ["Action", "Survival", "Fantasy"],
  },
  {
    name: "Shadow of the Tomb Raider",
    release: new Date("2018-09-14"),
    rating: 8.9,
    coverImage: shadowOfTombRaider,
    played: false,
    genre: ["Action", "Survival", "Fantasy"],
  },
  {
    name: "God of War",
    release: new Date("2015-12-01"),
    rating: 9.8,
    coverImage: godOfWar,
    played: false,
    genre: ["Action", "Fantasy"],
  },
  {
    name: "God of War Ragnarök",
    release: new Date("2022-11-19"),
    rating: 9.4,
    coverImage: godOfWarRagnarok,
    played: false,
    genre: ["Action", "Fantasy"],
  },
  {
    name: "Need for Speed: Most Wanted",
    release: new Date("2005-11-15"),
    rating: 7.9,
    coverImage: NFSMostWanted,
    played: true,
    genre: ["Racing", "Open World"],
  },
  {
    name: "Call of Duty 4: Modern Warfare",
    release: new Date("2007-11-12"),
    rating: 9.1,
    coverImage: CODMW,
    played: false,
    genre: ["Action", "FPS"],
  },
  {
    name: "Call of Duty: Modern Warfare II",
    release: new Date("2009-11-10"),
    rating: 9.1,
    coverImage: CODMW2,
    played: false,
    genre: ["Action", "FPS"],
  },
  {
    name: "Call of Duty: Modern Warfare III",
    release: new Date("2011-11-08"),
    rating: 8.7,
    coverImage: CODMW3,
    played: false,
    genre: ["Action", "FPS"],
  },
  {
    name: "Call of Duty: Modern Warfare Remake",
    release: new Date("2016-11-04"),
    rating: 7.9,
    coverImage: CODMWRemake,
    played: false,
    genre: ["Action", "FPS"],
  },
  {
    name: "Call of Duty: Modern Warfare II Remake",
    release: new Date("2022-10-28"),
    rating: 6.8,
    coverImage: CODMW2Remake,
    played: false,
    genre: ["Action", "FPS"],
  },
  {
    name: "Call of Duty: Modern Warfare III Remake",
    release: new Date("2023-11-10"),
    rating: 5.7,
    coverImage: CODMW3Remake,
    played: false,
    genre: ["Action", "FPS"],
  },
  {
    name: "Call of Duty: Black Ops",
    release: new Date("2010-11-09"),
    rating: 8.9,
    coverImage: CODBo,
    played: false,
    genre: ["Action", "FPS"],
  },
  {
    name: "Call of Duty: Black Ops II",
    release: new Date("2012-11-13"),
    rating: 9.1,
    coverImage: CODBo2,
    played: false,
    genre: ["Action", "FPS"],
  },
  {
    name: "Call of Duty: Black Ops III",
    release: new Date("2015-11-06"),
    rating: 8.3,
    coverImage: CODBo3,
    played: false,
    genre: ["Action", "FPS"],
  },
  {
    name: "Call of Duty: Black Ops Cold War",
    release: new Date("2020-11-13"),
    rating: 7.7,
    coverImage: CODBoColdWar,
    played: false,
    genre: ["Action", "FPS"],
  },
  {
    name: "Plant Vs. Zombies",
    release: new Date("2009-05-05"),
    rating: 8.6,
    coverImage: plantVsZombies,
    played: true,
    genre: ["Action", "Strategy"],
  },
];
