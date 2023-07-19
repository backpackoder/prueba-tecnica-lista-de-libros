"use client";

import { useContext, useMemo } from "react";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

// Components
import { BooksListContainer } from "@/components/lists/BooksListContainer";
import { BookItem } from "@/components/BookItem";
import { ListEmpty } from "./ListEmpty";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

export function BooksList() {
  const { getIsBookInFavs } = useContext(FiltersContext);

  const FavsList = useMemo(() => {
    return BOOKS_JSON.library.filter((book) => {
      const data = book.book;

      return getIsBookInFavs({ book: data.ISBN, fav: true });
    });
  }, [getIsBookInFavs]);

  if (typeof window === "undefined") return null;

  return FavsList.length > 0 ? (
    <BooksListContainer>
      {FavsList.map((book) => {
        return <BookItem key={book.book.ISBN} book={book.book} />;
      })}
    </BooksListContainer>
  ) : (
    <ListEmpty />
  );
}
