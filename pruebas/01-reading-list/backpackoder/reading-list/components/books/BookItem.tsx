"use client";

import Image from "next/image";
import { useContext } from "react";

// Components
import { StarIcon } from "../StarIcon";
import { ButtonsWrapper, GoToBookDetailsBtn, HandleFavBtn } from "./buttons/Buttons";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

// Types
import { FiltersContext } from "@/context/FiltersContext";

type BookItemProps = {
  book: (typeof BOOKS_JSON.library)[number]["book"];
};

export function BookItem({ book }: BookItemProps) {
  const { getIsBookInFavs } = useContext(FiltersContext);

  const isBookInFavs = getIsBookInFavs({ book: book.ISBN, fav: true });

  return (
    <li className="group relative flex flex-col items-start justify-start duration-200 cursor-pointer hover:scale-110">
      {isBookInFavs && <StarIcon book={book.ISBN} fav={isBookInFavs} />}

      <ButtonsWrapper>
        <GoToBookDetailsBtn author={book.author.name} book={book.title} />
        <HandleFavBtn book={book.ISBN} isBookInFavs={isBookInFavs} />
      </ButtonsWrapper>

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
