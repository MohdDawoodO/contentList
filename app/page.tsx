"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { pages } from "@/data/common-data";

export default function Home() {
  const [currentID, setCurrentID] = useState(0);

  const paragraphs = [
    `Content List is a personal website created by Mohd Dawood to organise and keep track of his ${pages[currentID].body}.`,
    "Although it's built around Mohd Dawood's collection, anyone can customise it by replacing the hardcoded data with their own.",
    "Click the buttons below to see what Mohd Dawood is up to.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentID((currentID + 1) % 4);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentID]);

  const MotionImage = motion.create(Image);

  return (
    <main className="flex min-h-dvh items-center justify-center px-4 sm:px-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={pages[currentID].title}
          className="gradient absolute h-full w-full before:absolute before:z-1 before:h-full before:w-full before:backdrop-blur-xs"
          style={{
            backgroundImage: `linear-gradient(${pages[currentID].bg}bf, ${pages[currentID].bg}fc 80%)`,
          }}
        >
          <MotionImage
            className="pointer-events-none absolute -z-1 h-full w-full object-cover object-top"
            src={pages[currentID].image}
            alt="background"
            width={1920}
            height={1080}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      <div className="z-10 flex max-w-2xl flex-col items-center justify-center gap-8">
        <div className="relative flex overflow-hidden text-2xl font-semibold sm:text-3xl">
          <AnimatePresence mode="popLayout">
            <motion.h1
              key={pages[currentID].title}
              style={{
                color: pages[currentID].accent,
                textShadow: `0px 0px 10px ${pages[currentID].accent}bf`,
              }}
              className="w-18 text-end sm:w-24"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 1 }}
            >
              {pages[currentID].title}
            </motion.h1>
          </AnimatePresence>

          <h1>List</h1>
        </div>

        <div className="flex flex-col gap-4 text-center text-sm text-[#BDBDBD] sm:text-lg md:text-xl">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="flex gap-4 sm:gap-6">
          {pages.map((page) => (
            <Link key={page.title} href={page.path} tabIndex={-1}>
              <button
                className="xs:w-18 w-16 cursor-pointer rounded-md p-2 text-sm font-semibold duration-100 hover:translate-y-px focus:outline-4 active:translate-y-1 sm:w-22 sm:text-lg"
                style={{
                  background: page.accent,
                  boxShadow: `0px 0px 25px ${page.accent}80`,
                  outlineColor: page.accent + "50",
                }}
              >
                {page.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
