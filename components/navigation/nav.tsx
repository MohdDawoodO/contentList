"use client";

import { content } from "@/data/common-data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import useParallax from "../utils/use-parallax";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();

  useEffect(() => {
    const controller = useParallax();

    return () => {
      controller.abort();
    };
  }, [pathname]);

  if (pathname === "/") return;

  const currentPage = content.filter((a) => pathname.includes(a.path))[0];

  if (!currentPage) return null;

  return (
    <nav className="min-h-[40vh] lg:min-h-[50vh]  relative">
      <div
        key={currentPage.title}
        className="gradient w-full h-full absolute before:w-full before:h-full before:backdrop-blur-xs before:absolute"
        style={{
          backgroundImage: `linear-gradient(#${currentPage.bg}bf, #${currentPage.bg})`,
        }}
      >
        <Image
          className="absolute w-full h-full object-cover object-top -z-1 pointer-events-none"
          src={currentPage.image}
          alt="ss"
          width={1920}
          height={1080}
          loading="eager"
          data-parallax="-65"
        />
      </div>
      <div className="flex h-4/5 w-full justify-center items-center overflow-hidden absolute">
        <Link href={currentPage.path}>
          <h1 className="text-2xl sm:text-3xl font-semibold">
            <span
              key={currentPage.title}
              style={{
                color: "#" + currentPage.accent,
                textShadow: `0px 0px 10px #${currentPage.accent}bf`,
              }}
              className={`w-24 text-end`}
            >
              {currentPage.title}
            </span>
            List
          </h1>
        </Link>
      </div>
    </nav>
  );
}
