import { pagesDataType } from "@/data/common-data";
import { motion } from "motion/react";
import Link from "next/link";

export default function NavLinks({
  currentPage,
}: {
  currentPage: pagesDataType;
}) {
  const links = [
    { name: "Game", path: "/games" },
    { name: "Anime", path: "/anime" },
    { name: "Movie", path: "/movies" },
  ];

  return (
    <div className="flex w-full max-w-2xl justify-between border-b-2 border-zinc-700 py-4 pt-8 text-lg sm:pt-12 sm:text-xl lg:pt-24">
      {links.map((link) => (
        <li key={link.name} className="list-none">
          <Link href={link.path}>
            <motion.span
              className="font-semibold duration-200"
              style={{
                color:
                  currentPage.path === link.path ? currentPage.accent : "white",
              }}
            >
              {link.name}
            </motion.span>
            List
          </Link>
          {currentPage.path === link.path && (
            <motion.div
              layoutId="nav-line"
              className="line h-1 w-full rounded-full"
              style={{ background: currentPage.accent }}
            />
          )}
        </li>
      ))}
    </div>
  );
}
