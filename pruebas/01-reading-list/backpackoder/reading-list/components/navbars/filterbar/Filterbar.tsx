"use client";

// Components
import { LengthOfResults } from "./LengthOfResults";
import { Selectors } from "./selectors/Selectors";
import { Searchbar } from "./searchbar/Searchbar";
import { ResetBtn } from "./ResetBtn";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

type FilterbarProps = {
  data: typeof BOOKS_JSON.library;
};

export function Filterbar({ data }: FilterbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-full bg-green-400 p-2 rounded-lg shadow-2xl">
      <LengthOfResults length={data.length} />
      <Selectors data={data} />
      <Searchbar />
      <ResetBtn />
    </div>
  );
}
