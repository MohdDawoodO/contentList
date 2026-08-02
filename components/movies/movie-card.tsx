import { pagesDataType } from "@/data/common-data";
import Image, { StaticImageData } from "next/image";
import Badge from "../ui/badge";
import { FaEye, FaStar } from "react-icons/fa";
import Tooltip from "../ui/tooltip";
import { useRouter } from "next/navigation";
import { MdInfo } from "react-icons/md";

export default function MovieCard({
  id,
  name,
  release,
  episodes,
  rating,
  watched,
  coverImage,
  status,
  currentPage,
}: {
  id: number;
  name: string;
  episodes?: number;
  release: Date;
  rating: number;
  watched: boolean;
  coverImage: StaticImageData;
  status?: "Ongoing" | "Finished";
  type: "movie" | "series";
  currentPage: pagesDataType;
}) {
  const router = useRouter();

  return (
    <div
      key={id}
      tabIndex={0}
      onClick={(e) => {
        if (e.button === 1) {
          window.open(`movies/${id}`);
          return;
        }

        if (e.ctrlKey) {
          window.open(`movies/${id}`);
          return;
        }
        router.push(`movies/${id}`);
      }}
      onKeyDown={(e) => {
        e.key === "Enter" && router.push(`movies/${id}`);
      }}
      className="group flex cursor-pointer flex-col self-start rounded-md"
    >
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
          {episodes
            ? episodes + " Episodes"
            : (release.getMonth() < 10
                ? "0" + release.getMonth()
                : release.getMonth()) +
              "-" +
              release.getFullYear()}
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
        className="z-1 h-full rounded-b-md p-2 py-3"
        style={{ background: currentPage.secondary }}
      >
        <h2 className="text-sm font-semibold">{name}</h2>
      </div>
    </div>
  );
}
