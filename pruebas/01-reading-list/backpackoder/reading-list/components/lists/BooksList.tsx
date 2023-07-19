"use client";

import { useContext, useMemo } from "react";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

// Components
import { Filterbar } from "../navbars/filterbar/Filterbar";
import { BooksListContainer } from "./BooksListContainer";
import { BookItem } from "../BookItem";

// Assets
import BOOKS_JSON from "../../assets/json/books.json";

export function BooksList() {
  const { filtersState, isBookInFavs } = useContext(FiltersContext);

  const filteredData = useMemo(() => {
    return BOOKS_JSON.library.filter((book) => {
      const data = book.book;

      return (
        (filtersState.show === "Todos"
          ? true
          : filtersState.show === "En mi lista"
          ? isBookInFavs({ book: data.ISBN, fav: true })
          : isBookInFavs({ book: data.ISBN, fav: false })) &&
        (filtersState.query
          ? data.title.toLowerCase().includes(filtersState.query.toLowerCase())
          : true) &&
        (filtersState.genre ? data.genre === filtersState.genre : true) &&
        (filtersState.author ? data.author.name === filtersState.author : true)
      );
    });
  }, [
    filtersState.author,
    filtersState.genre,
    filtersState.query,
    filtersState.show,
    isBookInFavs,
  ]);

  const sortedData = useMemo(() => {
    const data = [...filteredData];

    switch (filtersState.sort) {
      case "title":
        data.sort((a, b) => a.book.title.localeCompare(b.book.title));
        break;

      case "author":
        data.sort((a, b) => a.book.author.name.localeCompare(b.book.author.name));
        break;

      case "year":
        data.sort((a, b) => a.book.year - b.book.year);
        break;

      case "pages":
        data.sort((a, b) => a.book.pages - b.book.pages);
        break;

      default:
        break;
    }

    if (filtersState.order === "desc") data.reverse();

    return data;
  }, [filteredData, filtersState]);

  return sortedData ? (
    <section className="flex flex-col items-center justify-center gap-4">
      <Filterbar data={sortedData} />

      <BooksListContainer>
        {sortedData.map((book, index) => {
          return <BookItem key={index} book={book.book} />;
        })}
      </BooksListContainer>
    </section>
  ) : null;
}
