"use client";
import { pages, pagesDataType } from "@/data/common-data";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type popupNavTypes = {
  currentPage: pagesDataType;
  pathname: string;
};

export default function PopupNav({ currentPage, pathname }: popupNavTypes) {
  const [scroll, setScroll] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const listPage =
    pathname === "/games" || pathname === "/anime" || pathname === "/movies";

  const pageIndex = pages.findIndex((a) => a === currentPage);
  const nextList = pages[(pageIndex + 1) % 3];

  useEffect(() => {
    const height = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    setWindowHeight(height);
    setScrollHeight(scrollHeight);

    function scrollBehavior() {
      const scrolled = window.scrollY;
      setScroll(scrolled);
    }

    window.addEventListener("scroll", scrollBehavior);

    return () => window.removeEventListener("scroll", scrollBehavior);
  }, [pathname]);

  const MotionLink = motion.create(Link);

  if (!listPage) return;

  return (
    <AnimatePresence>
      {scroll + windowHeight > scrollHeight * 0.95 && (
        <MotionLink
          href={nextList.path}
          className="fixed bottom-8 left-1/2 z-50 w-fit -translate-x-1/2 rounded-full p-2 px-4 text-center text-sm backdrop-blur-sm duration-100 focus:outline-4 sm:text-lg"

          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}

          style={{
            border: "2px solid " + nextList.accent,
            outlineColor: nextList.accent + "50",
          }}
        >
          Watch{" "}
          <span className="font-semibold" style={{ color: nextList.accent }}>
            {nextList.title}
          </span>
          List
        </MotionLink>
      )}
    </AnimatePresence>
  );
}
