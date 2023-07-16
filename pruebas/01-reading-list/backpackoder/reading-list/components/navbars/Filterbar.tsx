"use client";

import { FaSearch } from "react-icons/fa";
import { FaRotateLeft } from "react-icons/fa6";

// Utils
import { SELECTORS, SELECTORS_KEYS, SELECTORS_TYPE } from "@/utils/selectors";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

// Types
import { FiltersAction } from "../lists/BooksList";

type FilterbarProps = {
  length: number;
  dispatch: React.Dispatch<FiltersAction>;
};

type LengthOfResultsProps = {
  length: number;
};

type SelectorsProps = {
  dispatch: React.Dispatch<FiltersAction>;
};

type SelectorProps = {
  dispatch: React.Dispatch<any>;
  selector: SELECTORS_TYPE[SELECTORS_KEYS];
};

type SearchbarProps = {
  dispatch: React.Dispatch<FiltersAction>;
};

export function Filterbar({ length, dispatch }: FilterbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-full bg-blue-200 p-2 rounded-lg">
      <LengthOfResults length={length} />
      <Selectors dispatch={dispatch} />
      <Searchbar dispatch={dispatch} />
      <button
        className="flex items-center justify-center gap-2 bg-red-200 p-2 rounded-lg"
        onClick={() => dispatch({ type: "reset", payload: null })}
      >
        <FaRotateLeft /> Reset
      </button>
    </div>
  );
}

function LengthOfResults({ length }: LengthOfResultsProps) {
  return (
    <p className="text-xs">
      {length} {length === 1 ? "resultado" : "resultados"}
    </p>
  );
}

function Selectors({ dispatch }: SelectorsProps) {
  return Object.keys(SELECTORS).map((key) => {
    return <Selector key={key} selector={SELECTORS[key as SELECTORS_KEYS]} dispatch={dispatch} />;
  });
}

function Selector({ selector, dispatch }: SelectorProps) {
  return (
    <div className="flex flex-col justify-center gap-1">
      <label htmlFor={selector.title}>{selector.title}</label>

      <select
        name={selector.title}
        id={selector.title}
        defaultValue={selector.default}
        onChange={(e) => dispatch({ type: selector.type, payload: e.target.value })}
      >
        {selector.options.map((option, index) => {
          const count = BOOKS_JSON.library.filter((book) => {
            switch (selector.type) {
              case SELECTORS.GENRES.type:
                return book.book.genre === option;

              case SELECTORS.AUTHORS.type:
                return book.book.author.name === option;

              default:
                return false;
            }
          }).length;

          return (
            <option key={index} value={option}>
              {option} {count > 0 && `(${count})`}
            </option>
          );
        })}
      </select>
    </div>
  );
}

function Searchbar({ dispatch }: SearchbarProps) {
  return (
    <div className="flex flex-col justify-center gap-1">
      <p>Buscar por titulo</p>

      <div className="relative">
        <FaSearch className="absolute top-1/2 left-1 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Buscar..."
          className="pl-6 rounded-md"
          onChange={(e) => dispatch({ type: "query", payload: e.target.value })}
        />
      </div>
    </div>
  );
}
