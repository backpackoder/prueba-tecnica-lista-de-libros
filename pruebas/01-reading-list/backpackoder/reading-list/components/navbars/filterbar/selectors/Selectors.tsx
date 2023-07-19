"use client";

import { useContext } from "react";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";
import { FiltersAction } from "@/context/FiltersProvider";

// Components
import { Option } from "./Option";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

// Types
import { SELECTORS, SELECTORS_KEYS, SELECTORS_TYPE } from "@/utils/selectors";

type SelectorsProps = {
  data: typeof BOOKS_JSON.library;
};

type SelectorProps = {
  data: typeof BOOKS_JSON.library;
  selector: SELECTORS_TYPE[SELECTORS_KEYS];
};

export function Selectors({ data }: SelectorsProps) {
  return Object.keys(SELECTORS).map((key) => {
    return <Selector key={key} data={data} selector={SELECTORS[key as SELECTORS_KEYS]} />;
  });
}

export function Selector({ data, selector }: SelectorProps) {
  const { filtersState, filtersDispatch } = useContext(FiltersContext);

  return (
    <div className="flex flex-col justify-center gap-1">
      <label htmlFor={selector.title}>{selector.title}</label>

      <select
        name={selector.title}
        id={selector.title}
        defaultValue={selector.default}
        value={filtersState.hasReset ? selector.default : undefined}
        onChange={(e) =>
          filtersDispatch({ type: selector.type as FiltersAction["type"], payload: e.target.value })
        }
      >
        {selector.options.map((option, index) => {
          return <Option key={index} data={data} option={option} selector={selector} />;
        })}
      </select>
    </div>
  );
}
