"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentID, setCurrentID] = useState(0);

  const titles = [
    {
      title: "Game",
      content: "games",
      accent: "0ebb47",
      bg: "0b0e0c",
      link: "/game",
    },
    {
      title: "Anime",
      content: "anime",
      accent: "d40003",
      bg: "0d0b0b",
      link: "/anime",
    },
    {
      title: "Movie",
      content: "movies",
      accent: "1a6dda",
      bg: "0b0d0e",
      link: "/movie",
    },
  ];

  const content = [
    `Content List is a personal website created by Mohd Dawood to organise and keep track of his ${titles[currentID].content}.`,
    "Although it's built around Mohd Dawood's collection, anyone can customise it by replacing the hardcoded data with their own.",
    "Click the buttons below to see what Mohd Dawood is up to.",
  ];

  setInterval(() => {
    setCurrentID((currentID + 1) % 3);
  }, 5000);

  useEffect(() => {}, []);

  return (
    <main
      className="min-h-dvh duration-1000 transition-colors flex justify-center items-center px-4 sm:px-8"
      style={{ background: "#" + titles[currentID].bg }}
    >
      <div className="flex flex-col justify-center items-center gap-8 max-w-2xl">
        <div className="flex text-3xl font-semibold overflow-hidden">
          {titles.map((title, i) => {
            if (currentID !== i) return;
            return (
              <h1
                key={title.title}
                style={{
                  color: "#" + title.accent,
                }}
                className={`w-24 text-end animate-slide`}
              >
                {title.title}
              </h1>
            );
          })}

          <h1>List</h1>
        </div>

        <div className="flex flex-col text-center text-lg text-[#BDBDBD] gap-4 sm:text-xl">
          {content.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="flex gap-4 sm:gap-6">
          {titles.map((title) => (
            <button
              key={title.title}
              className="p-2 px-4 w-22 rounded-md cursor-pointer hover:translate-y-px active:translate-y-1 duration-100 font-semibold"
              style={{ background: "#" + title.accent }}
            >
              <Link href={title.link}>{title.title}</Link>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
