type BooksListContainerProps = {
  children: React.ReactNode;
};

export function BooksListContainer({ children }: BooksListContainerProps) {
  return (
    <ol className="flex flex-wrap items-center justify-center gap-8 w-full bg-gray-300 p-8 rounded-lg">
      {children}
    </ol>
  );
}
