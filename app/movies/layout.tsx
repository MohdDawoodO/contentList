import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MovieList",
  description: "List of watched movies and series of Mohd Dawood",
};

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
