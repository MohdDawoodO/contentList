import { pagesDataType } from "@/data/common-data";
import Image, { StaticImageData } from "next/image";
import Badge from "./ui/badge";
import { FaBook, FaEye, FaStar } from "react-icons/fa";
import Tooltip from "./ui/tooltip";
import { MdInfo } from "react-icons/md";
import { IoGameController } from "react-icons/io5";

type cardDataType = {
  name: string;
  rating: number;
  coverImage: StaticImageData;
  played?: boolean;
  watched?: boolean;
  read?: boolean;
  release?: Date;
  episodes?: number;
  status?: "Ongoing" | "Finished";
  genre: string[];
  currentPage: pagesDataType;
};

export default function ContentCard({
  name,
  rating,
  coverImage,
  played,
  watched,
  read,
  release,
  episodes,
  status,
  genre,
  currentPage,
}: cardDataType) {
  return (
    <div className="group relative flex h-full flex-col self-start rounded-md">
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
          {release && !episodes
            ? (release.getDate() < 10
                ? "0" + release.getDate()
                : release.getDate()) +
              "-" +
              (release.getMonth() + 1 < 10
                ? "0" + (release.getMonth() + 1)
                : release.getMonth() + 1) +
              "-" +
              release.getFullYear()
            : episodes + " Episodes"}
        </Badge>

        {watched && (
          <Badge
            backgroundColor={currentPage.secondary + "bf"}
            className="absolute top-1 right-1 h-6 w-6 backdrop-blur-xs"
          >
            <Tooltip tooltip="watched!" position="right">
              <FaEye />
            </Tooltip>
          </Badge>
        )}
        {played && (
          <Badge
            backgroundColor={currentPage.secondary + "bf"}
            className="absolute top-1 right-1 h-6 w-6 backdrop-blur-xs"
          >
            <Tooltip tooltip="played!" position="right">
              <IoGameController />
            </Tooltip>
          </Badge>
        )}
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

        {status && (
          <Badge
            backgroundColor={currentPage.secondary + "bf"}
            className="absolute top-1 left-1 h-6 w-6 backdrop-blur-xs"
          >
            <Tooltip tooltip={status + "!"} position="left">
              <MdInfo />
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
