"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

// Components
import { StarIcon } from "@/components/StarIcon";

// Commons
import { BOOKS_JSON, ROUTES } from "@/commons/commons";

type BookPresentationProps = {
  author: string;
  book: (typeof BOOKS_JSON.library)[number]["book"];
};

export function BookPresentation({ author, book }: BookPresentationProps) {
  const { getIsBookInFavs } = useContext(FiltersContext);

  const isBookInFavs = getIsBookInFavs({ book: book.ISBN, fav: true });

  return (
    <section className="relative flex flex-wrap items-center gap-4 bg-gray-300 py-4 px-8 rounded-lg">
      <StarIcon book={book.ISBN} fav={isBookInFavs} />

      <Image src={book.cover} alt={book.title} width={200} height={0} />

      <div className="flex flex-col gap-2">
        <h2 className="text-4xl">{book.title}</h2>

        <p className="text-gray-500">
          {book.author.name} - {book.year}
        </p>

        <p>
          {book.genre} - {book.pages} paginas
        </p>

        <p className=" shadow-2xl py-4 px-8 border border-gray-400 rounded-lg">
          <span className="font-semibold">Synopsis:</span>
          <br />
          {book.synopsis}
        </p>

        {book.author.otherBooks.length > 0 && (
          <>
            <p>Otras obras del autor:</p>
            <ol className="flex flex-wrap gap-4">
              {book.author.otherBooks.map((book) => (
                <li key={book}>
                  <Link
                    href={ROUTES.BOOK(author, book)}
                    className="bg-gray-200 p-2 rounded-lg duration-200 hover:bg-green-200"
                  >
                    {book}
                  </Link>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </section>
  );
}
