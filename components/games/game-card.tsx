import { pagesDataType } from "@/data/common-data";
import Image, { StaticImageData } from "next/image";
import Badge from "../ui/badge";
import { FaStar } from "react-icons/fa";
import Tooltip from "../ui/tooltip";
import { useRouter } from "next/navigation";
import { IoGameController } from "react-icons/io5";

export default function GameCard({
  id,
  name,
  rating,
  coverImage,
  played,
  release,
  currentPage,
}: {
  id: number;
  name: string;
  rating: number;
  release: Date;
  coverImage: StaticImageData;
  played: boolean;
  currentPage: pagesDataType;
}) {
  const router = useRouter();

  return (
    <div
      key={id}
      tabIndex={0}
      onClick={(e) => {
        if (e.button === 1) {
          window.open(`games/${id}`);
          return;
        }

        if (e.ctrlKey) {
          window.open(`games/${id}`);
          return;
        }
        router.push(`games/${id}`);
      }}
      onKeyDown={(e) => {
        e.key === "Enter" && router.push(`games/${id}`);
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
          {(release.getMonth() < 10
            ? "0" + release.getMonth()
            : release.getMonth()) +
            "-" +
            release.getFullYear()}
        </Badge>
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
