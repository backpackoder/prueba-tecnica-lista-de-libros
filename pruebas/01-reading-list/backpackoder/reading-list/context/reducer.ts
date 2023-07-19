"use client";

import { FiltersAction, FiltersState, initialFiltersState } from "./FiltersProvider";

export function reducer(filtersState: FiltersState, action: FiltersAction) {
  filtersState.hasReset = false;

  switch (action.type) {
    case "show":
      return { ...filtersState, show: action.payload as FiltersState["show"] };

    case "genre":
      return {
        ...filtersState,
        genre: action.payload === "Todos" ? null : (action.payload as FiltersState["genre"]),
      };

    case "author":
      return {
        ...filtersState,
        author: action.payload === "Todos" ? null : (action.payload as FiltersState["author"]),
      };

    case "sort":
      return { ...filtersState, sort: action.payload as FiltersState["sort"] };

    case "order":
      return {
        ...filtersState,
        order: action.payload as FiltersState["order"],
      };

    case "query":
      return {
        ...filtersState,
        query: action.payload as FiltersState["query"],
      };

    case "reset":
      return { ...initialFiltersState, hasReset: true };

    case "changes":
      return { ...filtersState, changes: filtersState.changes + 1 };

    default:
      return filtersState;
  }
}
