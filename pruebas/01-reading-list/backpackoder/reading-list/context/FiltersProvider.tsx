"use client";

import { useCallback, useEffect, useReducer, useState } from "react";

// Contexts
import { FiltersContext } from "./FiltersContext";

// Utils
import { storage_favs } from "@/utils/localStorageData";

// Reducer
import { reducer } from "./reducer";
import { handleFavList } from "@/utils/handleFavsList";

export interface State {
  isMenuOpen: boolean;
  isDashboardMenuOpen: boolean;
}

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

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export function FiltersProvider({ children }: ProviderProps) {
  const [filtersState, filtersDispatch] = useReducer(reducer, initialFiltersState);
  const [favList, setFavList] = useState(storage_favs);

  const getIsBookInFavs = useCallback(
    ({ book, fav }: { book: string; fav: boolean }) => {
      return fav ? favList?.includes(book) : !favList?.includes(book);
    },
    [favList]
  );

  const handleFav = useCallback(
    (book: string) => {
      getIsBookInFavs({ book, fav: true });
      handleFavList([book]);
      filtersDispatch({ type: "changes", payload: book });

      return favList?.includes(book) ?? false;
    },
    [favList, getIsBookInFavs]
  );

  useEffect(() => {
    setFavList(window.localStorage.getItem("favs"));
  }, [filtersState, setFavList]);

  return (
    <FiltersContext.Provider
      value={{
        filtersState,
        filtersDispatch,
        favList,
        setFavList,
        getIsBookInFavs,
        handleFav,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
