"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaInfo, FaStar } from "react-icons/fa";

// Commons
import { BOOKS_JSON, ROUTES } from "@/commons/commons";

// Types
import { FiltersContext } from "@/context/FiltersContext";
import { StarIcon } from "./StarIcon";

type BookItemProps = {
  book: (typeof BOOKS_JSON.library)[number]["book"];
};

export function BookItem({ book }: BookItemProps) {
  const { getIsBookInFavs, handleFav } = useContext(FiltersContext);

  const isBookInFavs = getIsBookInFavs({ book: book.ISBN, fav: true });

  return (
    <li className="group relative flex flex-col items-start justify-start duration-200 cursor-pointer hover:scale-110">
      {isBookInFavs && <StarIcon book={book.ISBN} fav={isBookInFavs} />}

      <div
        className="absolute top-0 left-0 hidden flex-col items-center justify-center gap-2 w-full h-full text-white p-2 z-10
      group-hover:flex border-2 border-red-500"
      >
        <Link
          href={ROUTES.BOOK(book.title)}
          className="flex flew-wrap items-center justify-center gap-2 w-full bg-blue-500 text-xs p-2 rounded-lg"
        >
          Ver detalles <FaInfo />
        </Link>

        <button
          className={`flex flew-wrap items-center justify-center gap-2 w-full ${
            isBookInFavs ? "bg-red-500" : "bg-yellow-500"
          } text-xs p-2 rounded-lg`}
          onClick={() => handleFav(book.ISBN)}
        >
          {isBookInFavs ? "Eliminar de mi lista" : "Agregar a mi lista"}
          <FaStar size={25} color="yellow" />
        </button>
      </div>

      <Image
        src={book.cover}
        alt={book.title}
        width={164}
        height={0}
        className="shadow-2xl duration-200 group-hover:brightness-50"
      />
    </li>
  );
}
