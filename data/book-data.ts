import aStudyInScarlet from "@/assets/images/books/a-study-in-scarlet.jpg";
import harryPotter from "@/assets/images/books/harry-potter.jpg";
import harryPotter2 from "@/assets/images/books/harry-potter-2.jpg";
import harryPotter3 from "@/assets/images/books/harry-potter-3.jpg";
import harryPotter4 from "@/assets/images/books/harry-potter-4.jpg";
import harryPotter5 from "@/assets/images/books/harry-potter-5.jpg";
import harryPotter6 from "@/assets/images/books/harry-potter-6.jpg";
import harryPotter7 from "@/assets/images/books/harry-potter-7.jpg";
import hisLastBow from "@/assets/images/books/his-last-bow.jpg";
import princeCaspian from "@/assets/images/books/prince-caspian.jpg";
import theAdventuresOfSherlockHolmes from "@/assets/images/books/the-adventures-of-sherlock-holmes.jpg";
import theCaseBookOfSherlockHolmes from "@/assets/images/books/the-casebook-of-sherlock-holmes.jpg";
import theDeathCure from "@/assets/images/books/the-death-cure.jpg";
import theHorseAndHisBoy from "@/assets/images/books/the-horse-and-his-boy.jpg";
import theHoundOfBaskervilles from "@/assets/images/books/the-hound-of-baskervilles.jpg";
import theLastBattle from "@/assets/images/books/the-last-battle.jpg";
import theLionTheWitchAndTheWardrobe from "@/assets/images/books/the-lion-the-witch-and-the-wardrobe.jpg";
import theMagiciansNephew from "@/assets/images/books/the-magicians-nephew.jpg";
import theMazeRunner from "@/assets/images/books/the-maze-runner.png";
import theMemoirsOfSherlockHolmes from "@/assets/images/books/the-memoirs-of-sherlock-holmes.jpg";
import theReturnOfSherlockHolmes from "@/assets/images/books/the-return-of-sherlock-holmes.jpg";
import theScorchTrails from "@/assets/images/books/the-scorch-trails.jpg";
import theSignOfFour from "@/assets/images/books/the-sign-of-four.jpg";
import theSilverChair from "@/assets/images/books/the-silver-chair.jpg";
import theValleyOfFear from "@/assets/images/books/the-valley-of-fear.jpg";
import theVoyageOfDawnTreader from "@/assets/images/books/the-voyage-of-dawn-treader.jpg";
import xkcdHowTo from "@/assets/images/books/xkcd-how-to.png";
import xkcdWhatIf from "@/assets/images/books/xkcd-what-if.jpg";
import xkcdWhatIf2 from "@/assets/images/books/xkcd-what-if-2.jpg";
import theFellowshipOfTheRing from "@/assets/images/books/the-fellowship-of-the-ring.jpg";
import theTwoTowers from "@/assets/images/books/the-two-towers.jpg";
import theReturnOfTheKing from "@/assets/images/books/the-return-of-the-king.jpg";
import { bookDataType } from "./common-data";

export const bookData: bookDataType[] = [
  {
    name: "A Study in Scarlet",
    genre: ["Murder", "Mystery", "Fiction"],
    rating: 8.2,
    coverImage: aStudyInScarlet,
    read: true,
    release: new Date("1887-12-01"),
  },
  {
    name: "The Sign of Four",
    genre: ["Murder", "Mystery", "Fiction"],
    rating: 7.8,
    coverImage: theSignOfFour,
    read: true,
    release: new Date("1890-02-01"),
  },
  {
    name: "The Adventures of Sherlock Holmes",
    genre: ["Crime", "Mystery", "Fiction"],
    rating: 8.6,
    coverImage: theAdventuresOfSherlockHolmes,
    read: true,
    release: new Date("1892-10-14"),
  },
  {
    name: "The Memoirs of Sherlock Holmes",
    genre: ["Crime", "Mystery", "Fiction"],
    rating: 8.6,
    coverImage: theMemoirsOfSherlockHolmes,
    read: false,
    release: new Date("1894-02-01"),
  },
  {
    name: "The Hound of Baskervilles",
    genre: ["Crime", "Mystery", "Fiction"],
    rating: 8.2,
    coverImage: theHoundOfBaskervilles,
    read: false,
    release: new Date("1902-03-01"),
  },
  {
    name: "The Return of Sherlock Holmes",
    genre: ["Crime", "Mystery", "Fiction"],
    rating: 8.6,
    coverImage: theReturnOfSherlockHolmes,
    read: false,
    release: new Date("1905-03-07"),
  },
  {
    name: "The Valley of Fear",
    genre: ["Crime", "Mystery", "Fiction"],
    rating: 8,
    coverImage: theValleyOfFear,
    read: false,
    release: new Date("1915-02-27"),
  },
  {
    name: "His Last Bow",
    genre: ["Crime", "Mystery", "Fiction"],
    rating: 8.4,
    coverImage: hisLastBow,
    read: false,
    release: new Date("1917-09-22"),
  },
  {
    name: "The Case-Book of Sherlock Holmes",
    genre: ["Crime", "Mystery", "Fiction"],
    rating: 8.2,
    coverImage: theCaseBookOfSherlockHolmes,
    read: false,
    release: new Date("1927-04-01"),
  },
  {
    name: "Harry Potter and the Philosopher's Stone",
    genre: ["Action", "Adventure", "Fantasy", "Fiction"],
    rating: 9,
    coverImage: harryPotter,
    read: true,
    release: new Date("1997-06-26"),
  },
  {
    name: "Harry Potter and the Chamber of Secrets",
    genre: ["Action", "Adventure", "Fantasy", "Fiction"],
    rating: 8.8,
    coverImage: harryPotter2,
    read: false,
    release: new Date("1998-07-02"),
  },
  {
    name: "Harry Potter and Prisoner of Azkaban",
    genre: ["Action", "Adventure", "Fantasy", "Fiction"],
    rating: 9.2,
    coverImage: harryPotter3,
    read: false,
    release: new Date("1999-07-08"),
  },
  {
    name: "Harry Potter and the Goblet of Fire",
    genre: ["Action", "Adventure", "Dark Fantasy", "Fiction"],
    rating: 9.2,
    coverImage: harryPotter4,
    read: false,
    release: new Date("2000-07-08"),
  },
  {
    name: "Harry Potter and the Order of Phoenix",
    genre: ["Action", "Adventure", "Dark Fantasy", "Fiction"],
    rating: 9,
    coverImage: harryPotter5,
    read: false,
    release: new Date("2003-06-21"),
  },
  {
    name: "Harry Potter and the Half Blood Prince",
    genre: ["Action", "Adventure", "Dark Fantasy", "Fiction"],
    rating: 9.2,
    coverImage: harryPotter6,
    read: false,
    release: new Date("2005-07-16"),
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    genre: ["Action", "Adventure", "Dark Fantasy", "Fiction"],
    rating: 9.2,
    coverImage: harryPotter7,
    read: false,
    release: new Date("2007-07-21"),
  },
  {
    name: "XKCD's How To?",
    genre: ["Science", "Studies"],
    rating: 8.4,
    coverImage: xkcdHowTo,
    read: false,
    release: new Date("2019-09-13"),
  },
  {
    name: "XKCD's What If?",
    genre: ["Science", "Studies"],
    rating: 8.2,
    coverImage: xkcdWhatIf,
    read: false,
    release: new Date("2014-09-02"),
  },
  {
    name: "XKCD's What If? 2",
    genre: ["Science", "Studies"],
    rating: 8.8,
    coverImage: xkcdWhatIf2,
    read: false,
    release: new Date("2022-09-13"),
  },
  {
    name: "The Maze Runner",
    genre: ["Survival", "Fantasy", "Science", "Fiction"],
    rating: 8.2,
    coverImage: theMazeRunner,
    read: false,
    release: new Date("2009-10-06"),
  },
  {
    name: "The Scorch Trails",
    genre: ["Survival", "Fantasy", "Science", "Fiction"],
    rating: 7.8,
    coverImage: theScorchTrails,
    read: false,
    release: new Date("2010-10-18"),
  },
  {
    name: "The Death Cure",
    genre: ["Survival", "Fantasy", "Science", "Fiction"],
    rating: 7.6,
    coverImage: theDeathCure,
    read: false,
    release: new Date("2018-01-26"),
  },
  {
    name: "The Lion, the Witch, and the Wardrobe",
    genre: ["Adventure", "Fantasy", "Action", "Fiction"],
    rating: 8.4,
    coverImage: theLionTheWitchAndTheWardrobe,
    read: false,
    release: new Date("1950-10-16"),
  },
  {
    name: "Prince Caspian",
    genre: ["Adventure", "Fantasy", "Action", "Fiction"],
    rating: 8,
    coverImage: princeCaspian,
    read: false,
    release: new Date("1951-10-15"),
  },
  {
    name: "The Voyage of the Dawn Treader",
    genre: ["Adventure", "Fantasy", "Action", "Fiction"],
    rating: 8.2,
    coverImage: theVoyageOfDawnTreader,
    read: false,
    release: new Date("1952-10-15"),
  },
  {
    name: "The Silver Chair",
    genre: ["Adventure", "Fantasy", "Action", "Fiction"],
    rating: 8,
    coverImage: theSilverChair,
    read: false,
    release: new Date("1953-10-07"),
  },
  {
    name: "The Horse and His Boy",
    genre: ["Adventure", "Fantasy", "Action", "Fiction"],
    rating: 7.8,
    coverImage: theHorseAndHisBoy,
    read: false,
    release: new Date("1954-10-06"),
  },
  {
    name: "The Magician's Nephew",
    genre: ["Adventure", "Fantasy", "Action", "Fiction"],
    rating: 8.2,
    coverImage: theMagiciansNephew,
    read: false,
    release: new Date("1955-05-02"),
  },
  {
    name: "The Last Battle",
    genre: ["Adventure", "Fantasy", "Action", "Fiction"],
    rating: 8,
    coverImage: theLastBattle,
    read: false,
    release: new Date("1956-09-04"),
  },
  {
    name: "The Fellowship of the Ring",
    genre: ["Adventure", "Fantasy", "Fiction", "Action"],
    rating: 8.8,
    coverImage: theFellowshipOfTheRing,
    read: false,
    release: new Date("1954-10-21"),
  },
  {
    name: "The Two Towers",
    genre: ["Adventure", "Fantasy", "Fiction", "Action"],
    rating: 9,
    coverImage: theTwoTowers,
    read: false,
    release: new Date("1955-04-21"),
  },
  {
    name: "The Return of the King",
    genre: ["Adventure", "Fantasy", "Fiction", "Action"],
    rating: 9.2,
    coverImage: theReturnOfTheKing,
    read: false,
    release: new Date("1955-10-20"),
  },
];
