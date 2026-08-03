import { pagesDataType } from "@/data/common-data";
import Image, { StaticImageData } from "next/image";
import Badge from "../ui/badge";
import { FaEye, FaStar } from "react-icons/fa";
import Tooltip from "../ui/tooltip";
import { MdInfo } from "react-icons/md";

export default function AnimeCard({
  id,
  name,
  episodes,
  rating,
  watched,
  coverImage,
  status,
  currentPage,
}: {
  id: number;
  name: string;
  episodes: number;
  rating: number;
  watched: boolean;
  coverImage: StaticImageData;
  status: "Ongoing" | "Finished";
  currentPage: pagesDataType;
}) {
  return (
    <div key={id} className="group flex flex-col self-start rounded-md">
      <div className="relative overflow-hidden rounded-t-md">
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
          {episodes} Episodes
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

        <Badge
          backgroundColor={currentPage.secondary + "bf"}
          className="absolute top-1 left-1 h-6 w-6 backdrop-blur-xs"
        >
          <Tooltip tooltip={status + "!"} position="left">
            <MdInfo />
          </Tooltip>
        </Badge>
      </div>
      <div
        className="z-1 h-full rounded-b-md p-2 py-3"
        style={{ background: currentPage.secondary }}
      >
        <h2 className="text-sm font-semibold">{name}</h2>
      </div>
    </div>
  );
}
