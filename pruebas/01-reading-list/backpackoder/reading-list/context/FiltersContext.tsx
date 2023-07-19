"use client";

import { Dispatch, createContext } from "react";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

// Types
import { FiltersAction, FiltersState } from "./FiltersProvider";

interface FiltersContextProps {
  filtersState: FiltersState;
  filtersDispatch: Dispatch<FiltersAction>;
  favList: string | null;
  setFavList: (value: string | null) => void;
  getIsBookInFavs: ({ book, fav }: { book: string; fav: boolean }) => boolean;
  favoritedDataBooks: typeof BOOKS_JSON.library;
  handleFav: (book: string) => boolean;
}

export const FiltersContext = createContext({} as FiltersContextProps);
