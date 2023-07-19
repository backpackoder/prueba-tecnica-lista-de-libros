"use client";

import { FaRotateLeft } from "react-icons/fa6";

// Components
import { LengthOfResults } from "./length/LengthOfResults";
import { Selectors } from "./selectors/Selectors";
import { Searchbar } from "./searchbar/Searchbar";

// Commons
import { BOOKS_JSON } from "@/commons/commons";
import { useContext } from "react";
import { FiltersContext } from "@/context/FiltersContext";

type FilterbarProps = {
  data: typeof BOOKS_JSON.library;
};

export function Filterbar({ data }: FilterbarProps) {
  const { filtersDispatch } = useContext(FiltersContext);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-full bg-blue-200 p-2 rounded-lg">
      <LengthOfResults length={data.length} />
      <Selectors data={data} />
      <Searchbar />
      <button
        className="flex items-center justify-center gap-2 bg-red-200 p-2 rounded-lg"
        onClick={() => filtersDispatch({ type: "reset", payload: null })}
      >
        <FaRotateLeft /> Reset
      </button>
    </div>
  );
}
