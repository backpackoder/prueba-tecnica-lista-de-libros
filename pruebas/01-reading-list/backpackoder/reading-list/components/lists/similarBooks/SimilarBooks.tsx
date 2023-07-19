// Components
import { BooksListContainer } from "../BooksListContainer";
import { BookItem } from "@/components/books/BookItem";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

type SimilarBooksProps = {
  data: (typeof BOOKS_JSON.library)[number]["book"];
};

export function SimilarBooks({ data }: SimilarBooksProps) {
  const silimarBooks = BOOKS_JSON.library.filter(
    (similarBook) =>
      similarBook.book.genre.includes(data.genre) && similarBook.book.title !== data.title
  );

  return (
    silimarBooks.length > 0 && (
      <section className="flex flex-col items-center justify-center gap-4 bg-gray-200 p-4">
        <h2 className="text-2xl">También podría gustarte:</h2>

        <BooksListContainer>
          {silimarBooks.map((book) => {
            return <BookItem key={book.book.title} book={book.book} />;
          })}
        </BooksListContainer>
      </section>
    )
  );
}
