import { useContext } from "react";
import { FaRotateLeft } from "react-icons/fa6";

// Contexts
import { FiltersContext } from "@/context/FiltersContext";

export function ResetBtn() {
  const { filtersDispatch } = useContext(FiltersContext);

  return (
    <button
      className="flex items-center justify-center gap-2 bg-red-200 p-2 rounded-lg duration-200 hover:bg-red-300"
      onClick={() => filtersDispatch({ type: "reset", payload: null })}
    >
      <FaRotateLeft /> Reset
    </button>
  );
}
