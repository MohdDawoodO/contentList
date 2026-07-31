"use client";

import { useParams } from "next/navigation";

export default function AnimeDetails() {
  const params = useParams();
  if (!Number(params.id)) {
    return <div className="min-h-lvh bg-[#0d0b0b]">invalid anime</div>;
  }
  console.log(params);
  return <div className="min-h-lvh bg-[#0d0b0b]">anime page {params.id}</div>;
}
