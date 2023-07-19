"use client";

import Image from "next/image";
import { useContext } from "react";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

// Components
import { StarIcon } from "@/components/StarIcon";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

type BookPresentationProps = {
  book: (typeof BOOKS_JSON.library)[number]["book"];
};

export function BookPresentation({ book }: BookPresentationProps) {
  const { getIsBookInFavs } = useContext(FiltersContext);

  const isBookInFavs = getIsBookInFavs({ book: book.ISBN, fav: true });

  return (
    <section className="relative flex gap-4 bg-gray-300 py-4 px-8">
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
            <p className="flex flex-wrap">{book.author.otherBooks.join(", ")}</p>
          </>
        )}
      </div>
    </section>
  );
}
