import { pagesDataType } from "@/data/common-data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function AnimeCard({
  id,
  name,
  episodes,
  rating,
  watched,
  coverImage,
  status,
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
    <Link
      key={id}
      href={`anime/${id}`}
      target="_blank"
      className="flex h-full flex-col self-start overflow-hidden rounded-md bg-[#450303]"
    >
      <div>
        <Image
          src={coverImage}
          alt={name}
          width={600}
          height={800}
          className="pointer-events-none aspect-3/4 object-cover"
          loading="lazy"
        />
      </div>
      <div className="h-full p-2">
        <h2 className="text-sm font-semibold">{name}</h2>
      </div>
    </Link>
  );
}
