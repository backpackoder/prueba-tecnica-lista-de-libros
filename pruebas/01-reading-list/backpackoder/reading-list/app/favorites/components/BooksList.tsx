"use client";

import { useContext } from "react";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

// Components
import { BooksListContainer } from "@/components/lists/BooksListContainer";
import { BookItem } from "@/components/books/BookItem";
import { ListEmpty } from "./ListEmpty";

export function BooksList() {
  const { favoritedDataBooks } = useContext(FiltersContext);

  return favoritedDataBooks.length > 0 ? (
    <BooksListContainer>
      {favoritedDataBooks.map((book) => {
        return <BookItem key={book.book.ISBN} book={book.book} />;
      })}
    </BooksListContainer>
  ) : (
    <ListEmpty />
  );
}
