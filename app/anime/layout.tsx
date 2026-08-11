import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnimeList",
  description: "List of anime of Mohd Dawood",
};

export default function AnimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
