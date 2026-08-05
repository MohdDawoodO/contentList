import { pagesDataType } from "@/data/common-data";
import Image from "next/image";

export default function NavBackground({
  currentPage,
}: {
  currentPage: pagesDataType;
}) {
  return (
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
  );
}
