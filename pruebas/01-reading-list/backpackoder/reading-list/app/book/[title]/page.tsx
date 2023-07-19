// Components
import { BookPresentation } from "./components/BookPresentation";
import { SimilarBooks } from "@/components/lists/similarBooks/SimilarBooks";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

export default async function BookId({ params }: { params: { title: string } }) {
  const book = BOOKS_JSON.library.find(
    (book) => book.book.title === decodeURIComponent(params.title)
  );

  const data = book?.book;

  return (
    data && (
      <article className="flex flex-col w-full">
        <BookPresentation book={data} />
        <SimilarBooks data={data} />
      </article>
    )
  );
}
