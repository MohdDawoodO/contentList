"use client";

import ContentCard from "@/components/content-card";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { bookData } from "@/data/book-data";
import { pages } from "@/data/common-data";
import { bookFilter } from "@/utils/book-filter";
import { bookSorter } from "@/utils/book-sorter";
import {
  searchState,
  bookSortMethodState,
  bookFiltersState,
} from "@/utils/common-states";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

export default function Book() {
  const pathname = usePathname();
  const currentPage = pages.filter((a) => pathname.includes(a.path))[0];

  const [sortMethod] = useAtom(bookSortMethodState);
  const [filters] = useAtom(bookFiltersState);
  const [search] = useAtom(searchState);

  const sortedBooks = bookSorter(
    bookData,
    sortMethod.method,
    search,
    sortMethod.reverse,
  );

  const filteredBooks = bookFilter(sortedBooks, filters);

  return (
    <div className="min-h-[60vh] bg-[#0e0c0c]">
      <div
        className={
          "max-w-8xl m-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] flex-wrap items-center justify-center gap-8 px-4 pt-4 pb-32 2xl:px-0 " +
          (filteredBooks.length < 5 && filteredBooks.length !== 0
            ? "sm:grid-cols-[repeat(auto-fit,minmax(250px,280px))]"
            : "")
        }
      >
        {filteredBooks.map((book, i) => (
          <ContentCard
            key={i}
            name={book.name}
            rating={book.rating}
            read={book.read}
            coverImage={book.coverImage}
            genre={book.genre}
            release={book.release}
            currentPage={currentPage}
          />
        ))}
        {!filteredBooks.length && (
          <div
            className="flex flex-col justify-center text-center text-sm sm:text-xl"
            style={{ color: currentPage.accent }}
          >
            <p>
              The {currentPage.title.toLowerCase()} you searched for wasn't in
              the list
            </p>
            <p>Try changing search keyword or filters.</p>
          </div>
        )}
        <ScrollToTopButton color={currentPage.accent} />
      </div>
    </div>
  );
}
