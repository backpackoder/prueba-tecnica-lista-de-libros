"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInfo, FaStar } from "react-icons/fa";

// Utils
import { storage_favs } from "@/utils/localStorageData";
import { handleFavList } from "@/utils/handleFavsList";
import { BOOKS_JSON, ROUTES } from "@/commons/commons";

type BookProps = {
  book: (typeof BOOKS_JSON.library)[number]["book"];
};

export function BookItem({ book }: BookProps) {
  const [isFavorited, setIsFavorited] = useState(storage_favs?.includes(book.ISBN) ?? false);

  function handleFav() {
    setIsFavorited((prev) => !prev);
    handleFavList([book.ISBN]);
  }

  return (
    <li className="group relative flex flex-col items-start justify-start duration-200 cursor-pointer hover:scale-110">
      {isFavorited && (
        <FaStar
          size={25}
          color="yellow"
          className="absolute top-1 right-1 w-8 h-8 z-10"
          onClick={() => handleFav()}
        />
      )}

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
            isFavorited ? "bg-red-500" : "bg-yellow-500"
          } text-xs p-2 rounded-lg`}
          onClick={() => handleFav()}
        >
          {isFavorited ? "Eliminar de mi lista" : "Agregar a mi lista"}{" "}
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
