type BooksListContainerProps = {
  children: React.ReactNode;
};

export function BooksListContainer({ children }: BooksListContainerProps) {
  return <ol className="flex flex-wrap items-start gap-8">{children}</ol>;
}
