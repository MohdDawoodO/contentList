"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { content } from "@/data/common-data";

export default function Home() {
  const [currentID, setCurrentID] = useState(0);

  const paragraphs = [
    `Content List is a personal website created by Mohd Dawood to organise and keep track of his ${content[currentID].body}.`,
    "Although it's built around Mohd Dawood's collection, anyone can customise it by replacing the hardcoded data with their own.",
    "Click the buttons below to see what Mohd Dawood is up to.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentID((currentID + 1) % 3);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentID]);

  const MotionImage = motion.create(Image);

  return (
    <main className="min-h-dvh flex justify-center items-center px-4 sm:px-8">
      <AnimatePresence mode="wait">
        {content.map((item, i) => {
          if (currentID !== i) return;
          return (
            <motion.div
              key={item.title}
              className="gradient w-full h-full absolute before:w-full before:h-full before:backdrop-blur-xs before:absolute before:z-1"
              style={{
                backgroundImage: `linear-gradient(#${item.bg}bf, #${item.bg}fc 80%)`,
              }}
            >
              <MotionImage
                className="absolute w-full h-full object-cover object-top -z-1 pointer-events-none"
                src={item.image}
                alt="ss"
                width={1920}
                height={1080}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                loading="eager"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>

      <div className="flex flex-col justify-center items-center gap-8 max-w-2xl z-10">
        <div className="flex text-2xl sm:text-3xl font-semibold overflow-hidden relative">
          <AnimatePresence mode="popLayout">
            {content.map((item, i) => {
              if (currentID !== i) return;
              return (
                <motion.h1
                  key={item.title}
                  style={{
                    color: "#" + item.accent,
                    textShadow: `0px 0px 10px #${item.accent}bf`,
                  }}
                  className={`w-24 text-end`}
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 1 }}
                >
                  {item.title}
                </motion.h1>
              );
            })}
          </AnimatePresence>

          <h1>List</h1>
        </div>

        <div className="flex flex-col text-center text-sm sm:text-lg text-[#BDBDBD] gap-4 md:text-xl">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="flex gap-4 sm:gap-6">
          {content.map((item) => (
            <Link key={item.title} href={item.path}>
              <button
                className="p-2 w-18 sm:w-22 text-sm sm:text-lg rounded-md cursor-pointer hover:translate-y-px active:translate-y-1 duration-100 font-semibold"
                style={{
                  background: "#" + item.accent,
                  boxShadow: `0px 0px 25px #${item.accent}80`,
                }}
              >
                {item.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
