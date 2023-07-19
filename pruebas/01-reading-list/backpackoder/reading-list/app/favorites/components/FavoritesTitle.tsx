"use client";

import { useContext } from "react";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

export function FavoritesTitle() {
  const { favoritedDataBooks } = useContext(FiltersContext);

  const count = favoritedDataBooks.length;

  switch (count) {
    case 0:
      return <h2>No tienes libros en tu lista</h2>;

    case 1:
      return <h2>Tienes 1 libro en tu lista:</h2>;

    default:
      return <h2>Tienes {count} libros en tu lista:</h2>;
  }
}
