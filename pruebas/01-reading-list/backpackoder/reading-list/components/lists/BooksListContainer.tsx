type BooksListContainerProps = {
  children: React.ReactNode;
};

export function BooksListContainer({ children }: BooksListContainerProps) {
  return (
    <ol className="flex flex-wrap items-start gap-8 bg-gray-300 p-8 rounded-lg">{children}</ol>
  );
}
