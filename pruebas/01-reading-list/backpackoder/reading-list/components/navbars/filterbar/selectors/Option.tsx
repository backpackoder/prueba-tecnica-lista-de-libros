"use client";

import { useContext, useMemo } from "react";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

// Types
import { SELECTORS, SELECTORS_KEYS, SELECTORS_TYPE } from "@/utils/selectors";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

type OptionProps = {
  data: typeof BOOKS_JSON.library;
  option: string;
  selector: SELECTORS_TYPE[SELECTORS_KEYS];
};

export function Option({ data, option, selector }: OptionProps) {
  const { favList, filtersState } = useContext(FiltersContext);

  const filteredFavorites = useMemo(() => {
    let list = BOOKS_JSON.library;

    switch (filtersState.genre) {
      case null:
        break;

      default:
        list = list.filter((book) => book.book.genre.includes(filtersState.genre as string));
        break;
    }

    switch (filtersState.author) {
      case null:
        break;

      default:
        list = list.filter((book) => book.book.author.name === filtersState.author);
        break;
    }

    switch (filtersState.query) {
      case "":
        break;

      default:
        list = list.filter((book) => {
          const data = book.book;

          return data.title.toLowerCase().includes(filtersState.query.toLowerCase());
        });
        break;
    }

    return list;
  }, [filtersState.author, filtersState.genre, filtersState.query]);

  const count = useMemo(() => {
    let list: typeof BOOKS_JSON.library | string[] | undefined = [];

    switch (selector.type) {
      case SELECTORS.SHOW.type:
        switch (option) {
          case "En mi lista":
            list = filteredFavorites.filter((book) => favList?.includes(book.book.ISBN));
            break;

          case "No en mi lista":
            list = filteredFavorites.filter((book) => !favList?.includes(book.book.ISBN));
            break;

          default:
            list = BOOKS_JSON.library;
            break;
        }
        break;

      case SELECTORS.GENRES.type:
        list =
          option === "Todos"
            ? selector.options.slice(1)
            : filtersState.author === null
            ? BOOKS_JSON.library.filter((book) => book.book.genre.includes(option))
            : data.filter((book) => book.book.genre.includes(option));
        break;

      case SELECTORS.AUTHORS.type:
        list =
          option === "Todos"
            ? selector.options.slice(1)
            : filtersState.genre === null
            ? BOOKS_JSON.library.filter((book) => book.book.author.name === option)
            : data.filter((book) => book.book.author.name === option);
        break;

      default:
        list = undefined;
        break;
    }

    return list?.length;
  }, [data, favList, option, selector.options, selector.type, filtersState, filteredFavorites]);

  const isOptionDisabled = useMemo(() => {
    return selector.type === SELECTORS.SHOW.type ||
      selector.type === SELECTORS.GENRES.type ||
      selector.type === SELECTORS.AUTHORS.type
      ? count === 0
      : false;
  }, [count, selector.type]);

  return (
    <option value={option} disabled={isOptionDisabled}>
      {option} {count && count >= 0 && `(${count})`}
    </option>
  );
}
