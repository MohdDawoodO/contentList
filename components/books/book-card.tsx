import { bookDataType, pagesDataType } from "@/data/common-data";
import Image from "next/image";
import Badge from "../ui/badge";
import { FaBook, FaStar } from "react-icons/fa";
import Tooltip from "../ui/tooltip";

export default function BookCard({
  name,
  rating,
  coverImage,
  read,
  release,
  genre,
  currentPage,
}: bookDataType & { currentPage: pagesDataType }) {
  return (
    <div className="group flex h-full flex-col self-start rounded-md">
      <div className="relative min-h-fit overflow-hidden rounded-t-md">
        <Image
          src={coverImage}
          alt={name}
          width={600}
          height={800}
          className="pointer-events-none aspect-3/4 object-cover duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <Badge
          backgroundColor={currentPage.secondary + "bf"}
          className="absolute bottom-1 left-1 flex items-center gap-2 p-1 px-3 backdrop-blur-xs"
        >
          <h3>{rating}</h3> <FaStar color="yellow" />
        </Badge>
        <Badge
          backgroundColor={currentPage.secondary + "bf"}
          className="absolute right-1 bottom-1 p-1 px-3 backdrop-blur-xs"
        >
          {name !== "Qur'an Majeed"
            ? (release.getDate() < 10
                ? "0" + release.getDate()
                : release.getDate()) +
              "-" +
              (release.getMonth() < 10
                ? "0" + (release.getMonth() + 1)
                : release.getMonth() + 1) +
              "-" +
              release.getFullYear()
            : "600-640"}
        </Badge>
        {read && (
          <Badge
            backgroundColor={currentPage.secondary + "bf"}
            className="absolute top-1 right-1 h-6 w-6 backdrop-blur-xs"
          >
            <Tooltip tooltip="read!" position="right">
              <FaBook />
            </Tooltip>
          </Badge>
        )}
      </div>
      <div
        className="z-1 flex h-full flex-col gap-px rounded-b-md p-2 py-3"
        style={{ background: currentPage.secondary }}
      >
        <h2 className="text-sm font-semibold">{name}</h2>
        <h2 className="text-xs font-semibold opacity-80">
          {genre[0] + " " + (genre[1] ? "• " + genre[1] : "")}
        </h2>
      </div>
    </div>
  );
}
