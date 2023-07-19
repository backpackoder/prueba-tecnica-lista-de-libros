"use client";

import { useContext, useEffect, useState } from "react";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

export function FavListLength() {
  const { favList } = useContext(FiltersContext);

  const [parsedFavs, setParsedFavs] = useState<string[]>(favList ? JSON.parse(favList) : []);

  useEffect(() => {
    setParsedFavs(JSON.parse(favList ?? "[]"));
  }, [favList]);

  return <>{parsedFavs?.length}</>;
}
