"use client";

import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa6";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

// Utils
import { handleFavList } from "@/utils/handleFavsList";

type StarIconProps = {
  book: string;
  fav?: boolean;
};

export function StarIcon({ book, fav }: StarIconProps) {
  const { filtersDispatch } = useContext(FiltersContext);

  function handleFav() {
    handleFavList([book]);
    filtersDispatch({ type: "changes", payload: book });
  }

  return (
    <FaStar
      size={25}
      color={fav ? "yellow" : "gray"}
      className="absolute top-1 right-1 w-8 h-8 z-10"
      onClick={() => handleFav()}
    />
  );
}
