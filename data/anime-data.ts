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
import kaijuNo8 from "@/assets/images/anime/kaiju-no-8.jpg";
import codeGeass from "@/assets/images/anime/code-geass.jpg";
import gintama from "@/assets/images/anime/gintama.jpg";
import steinsGate from "@/assets/images/anime/steins-gate.jpg";
import fullmetalAlchemist from "@/assets/images/anime/fullmetal-alchemist-brotherhood.jpg";
import spiritedAway from "@/assets/images/movies/spirited-away.jpg";
import gachiakuta from "@/assets/images/anime/gachiakuta.jpg";
import erased from "@/assets/images/anime/erased.jpg";
import futureDiary from "@/assets/images/anime/future-diary.jpg";
import suzume from "@/assets/images/anime/suzume.jpg";
import ninetyOneDays from "@/assets/images/anime/91-days.jpg";
import { animeDataType } from "./common-data";

export const animeData: animeDataType[] = [
  {
    name: "Death Note",
    episodes: 37,
    rating: 8.9,
    coverImage: deathNote,
    watched: true,
    status: "Finished",
    genre: ["Murder", "Mystery", "Thriller"],
  },
  {
    name: "Bleach",
    episodes: 418,
    rating: 8.6,
    coverImage: bleach,
    watched: true,
    status: "Ongoing",
    genre: ["Action", "Adventure", "Comedy", "Fantasy"],
  },
  {
    name: "Naruto",
    episodes: 720,
    rating: 8.5,
    coverImage: naruto,
    watched: true,
    status: "Finished",
    genre: ["Action", "Adventure", "Comedy", "Family"],
  },
  {
    name: "Jujutsu Kaisen",
    episodes: 59,
    rating: 8.5,
    coverImage: jujutsuKaisen,
    watched: true,
    status: "Ongoing",
    genre: ["Action", "Adventure", "Murder", "Fantasy"],
  },
  {
    name: "Demon Slayer",
    episodes: 63,
    rating: 8.5,
    coverImage: demonSlayer,
    watched: true,
    status: "Ongoing",
    genre: ["Action", "Adventure", "Family"],
  },
  {
    name: "Solo Leveling",
    episodes: 25,
    rating: 8.5,
    coverImage: soloLeveling,
    watched: true,
    status: "Ongoing",
    genre: ["Action", "Adventure", "Sci-fi"],
  },
  {
    name: "Attack on Titan",
    episodes: 89,
    rating: 9.1,
    coverImage: attackOnTitan,
    watched: true,
    status: "Finished",
    genre: ["Mystery", "Thriller", "Dark Fantasy", "Action"],
  },
  {
    name: "Dororo",
    episodes: 24,
    rating: 8.2,
    coverImage: dororo,
    watched: false,
    status: "Finished",
    genre: ["Action", "Adventure", "Dark Fantasy"],
  },
  {
    name: "Mashle: Magic and Muscles",
    episodes: 24,
    rating: 7.5,
    coverImage: mashle,
    watched: true,
    status: "Ongoing",
    genre: ["Action", "Comedy", "Fantasy", "Family"],
  },
  {
    name: "Tokyo Ghoul",
    episodes: 50,
    rating: 7.7,
    coverImage: tokyoGhoul,
    watched: false,
    status: "Finished",
    genre: ["Action", "Adventure", "Dark Fantasy", "Sci-fi"],
  },
  {
    name: "Onimusha",
    episodes: 8,
    rating: 6.8,
    coverImage: onimusha,
    watched: true,
    status: "Finished",
    genre: ["Action", "Adventure", "Sci-fi", "Thriller"],
  },
  {
    name: "One Punch Man",
    episodes: 36,
    rating: 8.6,
    coverImage: onePunchMan,
    watched: false,
    status: "Ongoing",
    genre: ["Action", "Comedy", "Family", "Fantasy"],
  },
  {
    name: "Dr Stone",
    episodes: 95,
    rating: 8.1,
    coverImage: drStone,
    watched: false,
    status: "Finished",
    genre: ["Adventure", "Sci-fi", "Comedy"],
  },
  {
    name: "The Promised Neverland",
    episodes: 12,
    rating: 8.9,
    coverImage: promisedNeverland,
    watched: true,
    status: "Finished",
    genre: [
      "Action",
      "Adventure",
      "Dark Fantasy",
      "Thriller",
      "Murder",
      "Family",
    ],
  },
  {
    name: "Vinland Saga",
    episodes: 48,
    rating: 8.9,
    coverImage: vinlandSaga,
    watched: true,
    status: "Ongoing",
    genre: ["Action", "Adventure", "Murder", "Family"],
  },
  {
    name: "Spy x Family",
    episodes: 50,
    rating: 8.2,
    coverImage: spyXFamily,
    watched: true,
    status: "Ongoing",
    genre: ["Action", "Comedy", "Family", "Sci-fi"],
  },
  {
    name: "Blue Lock",
    episodes: 38,
    rating: 8.1,
    coverImage: blueLock,
    watched: false,
    status: "Ongoing",
    genre: ["Thriller"],
  },
  {
    name: "Monster",
    episodes: 74,
    rating: 8.8,
    coverImage: monster,
    watched: false,
    status: "Finished",
    genre: ["Murder", "Mystery", "Thriller", "Adventure"],
  },
  {
    name: "Made in Abyss",
    episodes: 25,
    rating: 8.3,
    coverImage: madeInAbyss,
    watched: false,
    status: "Ongoing",
    genre: ["Dark Fantasy", "Adventure", "Sci-fi"],
  },
  {
    name: "Uzumaki",
    episodes: 4,
    rating: 6.4,
    coverImage: uzumaki,
    watched: false,
    status: "Finished",
    genre: ["Dark Fantasy", "Horror"],
  },
  {
    name: "Beyblade",
    episodes: 864,
    rating: 7.0,
    coverImage: beyblade,
    watched: false,
    status: "Ongoing",
    genre: ["Action", "Adventure"],
  },
  {
    name: "Moriarty The Patriot",
    episodes: 26,
    rating: 8.0,
    coverImage: moriartyThePatriot,
    watched: false,
    status: "Ongoing",
    genre: ["Crime", "Mystery", "Thriller"],
  },
  {
    name: "Tower of God",
    episodes: 39,
    rating: 7.4,
    coverImage: towerOfGod,
    watched: false,
    status: "Ongoing",
    genre: ["Action", "Fantasy", "Dark Fantasy"],
  },
  {
    name: "Summertime Rendering",
    episodes: 25,
    rating: 8.2,
    coverImage: summertimeRendering,
    watched: false,
    status: "Finished",
    genre: ["Mystery", "Thriller", "Sci-fi"],
  },
  {
    name: "Star Wars: Visions",
    episodes: 27,
    rating: 7.0,
    coverImage: starWars,
    watched: false,
    status: "Ongoing",
    genre: ["Action", "Adventure", "Sci-fi"],
  },
  {
    name: "Hunter x Hunter",
    episodes: 148,
    rating: 9.0,
    coverImage: hunterXHunter,
    watched: false,
    status: "Ongoing",
    genre: ["Horror", "Action", "Fantasy", "Dark Fantasy"],
  },
  {
    name: "Azumanga Daioh",
    episodes: 26,
    rating: 8.2,
    coverImage: azumanga,
    watched: false,
    status: "Finished",
    genre: ["Comedy"],
  },
  {
    name: "Kaiju No. 8",
    episodes: 23,
    rating: 8.2,
    coverImage: kaijuNo8,
    watched: true,
    status: "Ongoing",
    genre: ["Action", "Comedy", "Fantasy"],
  },
  {
    name: "Code Geass",
    episodes: 62,
    rating: 8.7,
    coverImage: codeGeass,
    watched: false,
    status: "Finished",
    genre: ["Sci-fi", "Thriller"],
  },
  {
    name: "Gintama",
    episodes: 367,
    rating: 8.7,
    coverImage: gintama,
    watched: false,
    status: "Finished",
    genre: ["Action", "Comedy", "Adventure"],
  },
  {
    name: "Steins; Gate",
    episodes: 48,
    rating: 8.8,
    coverImage: steinsGate,
    watched: false,
    status: "Finished",
    genre: ["Thriller", "Sci-fi"],
  },
  {
    name: "Fullmetal Alchemist: Brotherhood",
    episodes: 64,
    rating: 9.1,
    coverImage: fullmetalAlchemist,
    watched: true,
    status: "Finished",
    genre: ["Dark Fantasy", "Thriller", "Action"],
  },
  {
    name: "Gachiakuta",
    episodes: 24,
    rating: 8,
    coverImage: gachiakuta,
    watched: false,
    status: "Ongoing",
    genre: ["Dark Fantasy", "Thriller", "Action"],
  },
  {
    name: "Spirited Away",
    rating: 8.6,
    episodes: 1,
    coverImage: spiritedAway,
    watched: false,
    status: "Finished",
    genre: ["Adventure", "Fantasy", "Family"],
  },
  {
    name: "Suzume",
    rating: 7.6,
    episodes: 1,
    coverImage: suzume,
    watched: true,
    status: "Finished",
    genre: ["Adventure", "Fantasy", "Family"],
  },
  {
    name: "Erased",
    rating: 8.4,
    episodes: 12,
    coverImage: erased,
    watched: false,
    status: "Finished",
    genre: ["Mystery", "Thriller", "Sci-fi"],
  },
  {
    name: "Future Diary",
    rating: 7.4,
    episodes: 26,
    coverImage: futureDiary,
    watched: false,
    status: "Finished",
    genre: ["Action", "Thriller", "Horror"],
  },
  {
    name: "91 Days",
    rating: 7.6,
    episodes: 12,
    coverImage: ninetyOneDays,
    watched: false,
    status: "Finished",
    genre: ["Crime", "Thriller"],
  },
];
