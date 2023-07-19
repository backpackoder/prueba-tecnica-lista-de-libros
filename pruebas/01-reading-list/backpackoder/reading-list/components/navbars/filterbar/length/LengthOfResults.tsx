type LengthOfResultsProps = {
  length: number;
};

export function LengthOfResults({ length }: LengthOfResultsProps) {
  return (
    <p className="text-xs">
      {length} {length === 1 ? "resultado" : "resultados"}
    </p>
  );
}
