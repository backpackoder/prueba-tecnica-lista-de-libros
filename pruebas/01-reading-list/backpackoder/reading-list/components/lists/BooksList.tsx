"use client";

import { useMemo, useReducer } from "react";

// Components
import { Filterbar } from "../navbars/Filterbar";
import { BookItem } from "../BookItem";

// Assets
import BOOKS_JSON from "../../assets/json/books.json";

const filtersState = {
  genre: null as string | null,
  author: null as string | null,
  order: "asc" as "asc" | "desc",
  sort: "" as "" | "title" | "author" | "year" | "pages",
  query: "" as string,
};
export type FiltersState = typeof filtersState;
export type FiltersAction = {
  type: keyof FiltersState | "reset";
  payload: FiltersState[keyof FiltersState];
};

export function BooksList() {
  const [state, dispatch] = useReducer(reducer, filtersState);

  function reducer(state: FiltersState, action: FiltersAction) {
    switch (action.type) {
      case "genre":
        return {
          ...state,
          genre: action.payload === "Todos" ? null : action.payload,
        };

      case "author":
        return {
          ...state,
          author: action.payload === "Todos" ? null : action.payload,
        };

      case "sort":
        return { ...state, sort: action.payload as (typeof filtersState)["sort"] };

      case "order":
        return { ...state, order: action.payload as (typeof filtersState)["order"] };

      case "query":
        return { ...state, query: action.payload as (typeof filtersState)["query"] };

      case "reset":
        return filtersState;

      default:
        return state;
    }
  }

  const filteredData = BOOKS_JSON.library.filter((book) => {
    const data = book.book;

    return (
      (state.query ? data.title.toLowerCase().includes(state.query.toLowerCase()) : true) &&
      (state.genre ? data.genre === state.genre : true) &&
      (state.author ? data.author.name === state.author : true)
    );
  });

  const sortedData = useMemo(() => {
    const data = [...filteredData];

    switch (state.sort) {
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

    if (state.order === "desc") data.reverse();

    return data;
  }, [filteredData, state.order, state.sort]);

  return sortedData ? (
    <section className="flex flex-col items-center justify-center gap-2">
      <Filterbar length={sortedData.length} dispatch={dispatch} />

      <ol className="flex flex-wrap items-start gap-8">
        {sortedData.map((book, index) => {
          return <BookItem key={index} book={book.book} />;
        })}
      </ol>
    </section>
  ) : null;
}
