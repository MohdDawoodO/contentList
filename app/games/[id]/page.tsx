"use client";

import { gameData } from "@/data/game-data";
import { useParams } from "next/navigation";

export default function GameDetails() {
  const params = useParams();

  console.log(gameData.filter((a) => a.id !== Number(params.id))[0]);
  if (
    !Number(params.id || !gameData.filter((a) => a.id === Number(params.id))[0])
  ) {
    return <div className="min-h-lvh bg-[#0b0e0c]">invalid game</div>;
  }
  return <div className="min-h-lvh bg-[#0b0e0c]">game page {params.id}</div>;
}
