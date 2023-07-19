"use client";

import { useCallback, useEffect, useMemo, useReducer, useState } from "react";

// Contexts
import { FiltersContext } from "./FiltersContext";

// Reducer
import { reducer } from "./reducer";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

// Utils
import { handleFavList } from "@/utils/handleFavsList";

export const initialFiltersState = {
  show: "Todos" as "Todos" | "En mi lista" | "No en mi lista",
  genre: null as string | null,
  author: null as string | null,
  order: "asc" as "asc" | "desc",
  sort: "" as "" | "title" | "author" | "year" | "pages",
  query: "" as string,
  hasReset: false,
  changes: 0,
};
export type FiltersState = typeof initialFiltersState;
export type FiltersAction = {
  type: keyof FiltersState | "reset";
  payload: FiltersState[keyof FiltersState];
};

type ProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function FiltersProvider({ children }: ProviderProps) {
  const [filtersState, filtersDispatch] = useReducer(reducer, initialFiltersState);

  const [favList, setFavList] = useState(
    typeof window === "undefined" ? "" : window.localStorage.getItem("favs")
  );

  const getIsBookInFavs = useCallback(
    ({ book, fav }: { book: string; fav: boolean }) => {
      if (favList) {
        return fav ? favList?.includes(book) : !favList?.includes(book);
      }
      return false;
    },

    [favList]
  );

  const favoritedDataBooks = useMemo(() => {
    return BOOKS_JSON.library.filter((book) => {
      const data = book.book;

      return getIsBookInFavs({ book: data.ISBN, fav: true });
    });
  }, [getIsBookInFavs]);

  const handleFav = useCallback(
    (book: string) => {
      getIsBookInFavs({ book, fav: true });
      handleFavList([book]);
      filtersDispatch({ type: "changes", payload: book });

      return favList?.includes(book) ?? false;
    },
    [favList, getIsBookInFavs]
  );

  typeof window !== "undefined" &&
    window.addEventListener("storage", (event) => {
      if (event.key === "favs") {
        const updatedData: string | null = event.newValue ? JSON.parse(event.newValue) : null;
        setFavList(updatedData);
      }
    });

  useEffect(() => {
    setFavList(window.localStorage.getItem("favs"));
  }, [favList, filtersState, setFavList]);

  return (
    <FiltersContext.Provider
      value={{
        filtersState,
        filtersDispatch,
        favList,
        setFavList,
        getIsBookInFavs,
        favoritedDataBooks,
        handleFav,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
