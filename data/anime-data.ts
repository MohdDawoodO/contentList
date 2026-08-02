import { StaticImageData } from "next/image";

import deathNote from "@/assets/images/anime/death-note.jpg";
import bleach from "@/assets/images/anime/bleach.jpg";
import naruto from "@/assets/images/anime/naruto.jpg";
import jujutsuKaisen from "@/assets/images/anime/jujutsu-kaisen.jpg";
import demonSlayer from "@/assets/images/anime/demon-slayer.jpg";
import soloLeveling from "@/assets/images/anime/solo-leveling.jpg";
import attackOnTitan from "@/assets/images/anime/attack-on-titan.jpg";
import dororo from "@/assets/images/anime/dororo.jpg";
import mashle from "@/assets/images/anime/mashle-magic-and-muscles.jpg";
import tokyoGhoul from "@/assets/images/anime/tokyo-ghoul.jpg";
import onimusha from "@/assets/images/anime/onimusha.jpg";
import onePunchMan from "@/assets/images/anime/one-punch-man.jpg";
import drStone from "@/assets/images/anime/dr-stone.jpg";
import promisedNeverland from "@/assets/images/anime/the-promised-neverland.jpg";
import vinlandSaga from "@/assets/images/anime/vinland-saga.jpg";
import spyXFamily from "@/assets/images/anime/spy-x-family.jpg";
import blueLock from "@/assets/images/anime/blue-lock.jpg";
import monster from "@/assets/images/anime/monster.jpg";
import madeInAbyss from "@/assets/images/anime/made-in-abyss.jpg";
import uzumaki from "@/assets/images/anime/uzumaki.jpg";
import beyblade from "@/assets/images/anime/beyblade.jpg";
import moriartyThePatriot from "@/assets/images/anime/moriarty-the-patriot.jpg";
import towerOfGod from "@/assets/images/anime/tower-of-god.jpg";
import summertimeRendering from "@/assets/images/anime/summertime-remdering.jpg";
import starWars from "@/assets/images/anime/star-wars-visions.jpg";
import hunterXHunter from "@/assets/images/anime/hunter-x-hunter.jpg";
import azumanga from "@/assets/images/anime/azumanga-daioh.jpg";
import yourLieInApril from "@/assets/images/anime/your-lie-in-april.jpg";
import kaijuNo8 from "@/assets/images/anime/kaiju-no-8.jpg";
import codeGeass from "@/assets/images/anime/code-geass.jpg";
import gintama from "@/assets/images/anime/gintama.jpg";
import steinsGate from "@/assets/images/anime/steins-gate.jpg";
import fullmetalAlchemist from "@/assets/images/anime/fullmetal-alchemist-brotherhood.jpg";

export const animeData: {
  id: number;
  name: string;
  episodes: number;
  rating: number;
  coverImage: StaticImageData;
  watched: boolean;
  status: "Ongoing" | "Finished";
  trailer: string;
}[] = [
  {
    id: 1,
    name: "Death Note",
    episodes: 37,
    rating: 8.9,
    coverImage: deathNote,
    watched: true,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 2,
    name: "Bleach",
    episodes: 418,
    rating: 8.6,
    coverImage: bleach,
    watched: true,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 3,
    name: "Naruto",
    episodes: 720,
    rating: 8.5,
    coverImage: naruto,
    watched: true,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 4,
    name: "Jujutsu Kaisen",
    episodes: 59,
    rating: 8.5,
    coverImage: jujutsuKaisen,
    watched: true,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 5,
    name: "Demon Slayer",
    episodes: 63,
    rating: 8.5,
    coverImage: demonSlayer,
    watched: true,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 6,
    name: "Solo Leveling",
    episodes: 25,
    rating: 8.5,
    coverImage: soloLeveling,
    watched: true,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 7,
    name: "Attack on Titan",
    episodes: 89,
    rating: 9.1,
    coverImage: attackOnTitan,
    watched: true,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 8,
    name: "Dororo",
    episodes: 24,
    rating: 8.2,
    coverImage: dororo,
    watched: false,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 9,
    name: "Mashle: Magic and Muscles",
    episodes: 24,
    rating: 7.5,
    coverImage: mashle,
    watched: true,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 10,
    name: "Tokyo Ghoul",
    episodes: 50,
    rating: 7.7,
    coverImage: tokyoGhoul,
    watched: false,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 11,
    name: "Onimusha",
    episodes: 8,
    rating: 6.8,
    coverImage: onimusha,
    watched: true,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 12,
    name: "One Punch Man",
    episodes: 36,
    rating: 8.6,
    coverImage: onePunchMan,
    watched: false,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 13,
    name: "Dr Stone",
    episodes: 95,
    rating: 8.1,
    coverImage: drStone,
    watched: false,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 14,
    name: "The Promised Neverland",
    episodes: 12,
    rating: 8.9,
    coverImage: promisedNeverland,
    watched: true,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 15,
    name: "Vinland Saga",
    episodes: 48,
    rating: 8.9,
    coverImage: vinlandSaga,
    watched: true,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 16,
    name: "Spy x Family",
    episodes: 50,
    rating: 8.2,
    coverImage: spyXFamily,
    watched: true,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 17,
    name: "Blue Lock",
    episodes: 38,
    rating: 8.1,
    coverImage: blueLock,
    watched: false,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 18,
    name: "Monster",
    episodes: 74,
    rating: 8.8,
    coverImage: monster,
    watched: false,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 19,
    name: "Made in Abyss",
    episodes: 25,
    rating: 8.3,
    coverImage: madeInAbyss,
    watched: false,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 20,
    name: "Uzumaki",
    episodes: 4,
    rating: 6.4,
    coverImage: uzumaki,
    watched: false,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 21,
    name: "Beyblade",
    episodes: 864,
    rating: 7.0,
    coverImage: beyblade,
    watched: false,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 22,
    name: "Moriarty The Patriot",
    episodes: 26,
    rating: 8.0,
    coverImage: moriartyThePatriot,
    watched: false,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 23,
    name: "Tower of God",
    episodes: 39,
    rating: 7.4,
    coverImage: towerOfGod,
    watched: false,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 24,
    name: "Summertime Rendering",
    episodes: 25,
    rating: 8.2,
    coverImage: summertimeRendering,
    watched: false,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 25,
    name: "Star Wars: Visions",
    episodes: 27,
    rating: 7.0,
    coverImage: starWars,
    watched: false,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 26,
    name: "Hunter x Hunter",
    episodes: 148,
    rating: 9.0,
    coverImage: hunterXHunter,
    watched: false,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 27,
    name: "Azumanga Daioh",
    episodes: 26,
    rating: 8.2,
    coverImage: azumanga,
    watched: false,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 28,
    name: "Your Lie in April",
    episodes: 22,
    rating: 8.6,
    coverImage: yourLieInApril,
    watched: false,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 29,
    name: "Kaiju No. 8",
    episodes: 23,
    rating: 8.2,
    coverImage: kaijuNo8,
    watched: true,
    status: "Ongoing",
    trailer: "https://youtube.com/",
  },
  {
    id: 30,
    name: "Code Geass",
    episodes: 62,
    rating: 8.7,
    coverImage: codeGeass,
    watched: false,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 31,
    name: "Gintama",
    episodes: 367,
    rating: 8.7,
    coverImage: gintama,
    watched: false,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 32,
    name: "Steins; Gate",
    episodes: 48,
    rating: 8.8,
    coverImage: steinsGate,
    watched: false,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
  {
    id: 33,
    name: "Fullmetal Alchemist: Brotherhood",
    episodes: 64,
    rating: 9.1,
    coverImage: fullmetalAlchemist,
    watched: true,
    status: "Finished",
    trailer: "https://youtube.com/",
  },
];
