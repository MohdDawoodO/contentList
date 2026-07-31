"use client";

import { useParams } from "next/navigation";

export default function MovieDetails() {
  const params = useParams();
  if (!Number(params.id)) {
    return <div className="min-h-lvh bg-[#0b0d0e]">invalid movie</div>;
  }
  console.log(params);
  return <div className="min-h-lvh bg-[#0b0d0e]">movie page {params.id}</div>;
}
