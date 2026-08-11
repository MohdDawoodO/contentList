import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookList",
  description: "List of books of Mohd Dawood",
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
