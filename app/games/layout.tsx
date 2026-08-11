import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GameList",
  description: "List of games of Mohd Dawood",
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
