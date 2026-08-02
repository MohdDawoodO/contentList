"use client";

import { pages } from "@/data/common-data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import useParallax from "../utils/use-parallax";
import Link from "next/link";
import PopupNav from "./popup-nav";
import Select from "./select-dropdown";
import { searchAnimeState } from "@/utils/common-states";
import { useAtom } from "jotai";

export default function Nav() {
  const pathname = usePathname();
  const [search, setSearch] = useAtom(searchAnimeState);

  useEffect(() => {
    const controller = useParallax();
    scrollTo(0, 0);
    return () => {
      controller.abort();
    };
  }, [pathname]);

  if (pathname === "/") return;

  const currentPage = pages.filter((a) => pathname.includes(a.path))[0];

  if (!currentPage) return null;

  return (
    <>
      <nav className="relative min-h-[40vh] lg:min-h-[50vh]">
        <div
          key={currentPage.title}
          className="background absolute h-full w-full before:absolute before:h-full before:w-full before:backdrop-blur-xs"
          style={{
            backgroundImage: `linear-gradient(${currentPage.bg}bf, ${currentPage.bg})`,
          }}
        >
          <Image
            className="pointer-events-none absolute -z-1 h-full w-full object-cover object-top"
            src={currentPage.image}
            alt="ss"
            width={1920}
            height={1080}
            loading="eager"
            data-parallax="-65"
          />
        </div>
        <div className="absolute flex h-4/5 w-full flex-col items-center justify-center gap-4 sm:gap-8">
          <Link href={currentPage.path}>
            <h1 className="text-2xl font-semibold sm:text-3xl">
              <span
                key={currentPage.title}
                style={{
                  color: currentPage.accent,
                  textShadow: `0px 0px 10px ${currentPage.accent}bf`,
                }}
                className={`w-24 text-end`}
              >
                {currentPage.title}
              </span>
              List
            </h1>
          </Link>
          <div className="mx-4 flex w-full max-w-2xl px-4 text-sm sm:text-lg">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder={
                "Type name of" +
                " " +
                (currentPage.title === "Anime" ? "an" : "a") +
                " " +
                currentPage.title.toLowerCase()
              }
              className="p-x2 inline-block w-full rounded-l-sm bg-white p-2 font-semibold transition-all duration-200 focus:outline-4 sm:p-2 sm:px-4"
              style={{
                color: currentPage.accent,
                background: currentPage.bg + "75",
                border: "2px solid " + currentPage.accent,
                outlineColor: currentPage.accent + "50",
              }}
            />
            <Select currentPage={currentPage} />
          </div>
        </div>
      </nav>
      <PopupNav currentPage={currentPage} pathname={pathname} />
    </>
  );
}
