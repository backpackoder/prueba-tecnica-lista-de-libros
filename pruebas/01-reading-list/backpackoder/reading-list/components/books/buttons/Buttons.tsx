"use client";

import Link from "next/link";
import { useContext } from "react";
import { FaInfo, FaStar } from "react-icons/fa";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

// Commons
import { ROUTES } from "@/commons/commons";

export function ButtonsWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute top-0 left-0 hidden flex-col items-center justify-center gap-2 w-full h-full text-white p-2 z-10
      group-hover:flex border-2 border-blue-500"
    >
      {children}
    </div>
  );
}

type BookItemDetailsBtnProps = {
  author: string;
  book: string;
};

export function GoToBookDetailsBtn({ author, book }: BookItemDetailsBtnProps) {
  return (
    <Link
      href={ROUTES.BOOK(author, book)}
      className="flex flew-wrap items-center justify-center gap-2 w-full bg-blue-500 text-xs p-2 rounded-lg duration-200 hover-bg-blue-600"
    >
      Ver detalles <FaInfo />
    </Link>
  );
}

type HandleFavBtnProps = {
  book: string;
  isBookInFavs: boolean;
};

export function HandleFavBtn({ book, isBookInFavs }: HandleFavBtnProps) {
  const { handleFav } = useContext(FiltersContext);

  return (
    <button
      className={`flex flew-wrap items-center justify-center gap-2 w-full ${
        isBookInFavs ? "bg-red-500 hover-bg-red-500" : "bg-yellow-500 hover-bg-yellow-600"
      } text-xs p-2 rounded-lg duration-200`}
      onClick={() => handleFav(book)}
    >
      {isBookInFavs ? "Eliminar de mi lista" : "Agregar a mi lista"}
      <FaStar size={25} color="yellow" />
    </button>
  );
}
