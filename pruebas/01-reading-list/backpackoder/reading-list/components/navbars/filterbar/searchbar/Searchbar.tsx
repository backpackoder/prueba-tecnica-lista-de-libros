import { useContext } from "react";
import { FaSearch } from "react-icons/fa";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

export function Searchbar() {
  const { filtersState, filtersDispatch } = useContext(FiltersContext);

  return (
    <div className="flex flex-col justify-center gap-1">
      <p>Buscar por titulo</p>

      <div className="relative">
        <FaSearch className="absolute top-1/2 left-1 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Buscar..."
          className="pl-6 rounded-md"
          value={filtersState.hasReset ? "" : undefined}
          onChange={(e) => filtersDispatch({ type: "query", payload: e.target.value })}
        />
      </div>
    </div>
  );
}
