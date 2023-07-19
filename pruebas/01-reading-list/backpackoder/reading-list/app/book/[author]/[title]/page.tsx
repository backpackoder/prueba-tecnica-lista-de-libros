// Components
import { BookPresentation } from "./components/BookPresentation";
import { SimilarBooks } from "@/components/lists/similarBooks/SimilarBooks";
import { BookNotAvailable } from "./components/BookNotAvailable";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

export default async function BookId({ params }: { params: { author: string; title: string } }) {
  const decodedAuthor = decodeURIComponent(params.author);
  const decodedTitle = decodeURIComponent(params.title);

  const book = BOOKS_JSON.library.find((book) => book.book.title === decodedTitle);

  const data = book?.book;

  return (
    <article className="flex flex-col w-full">
      {data ? (
        <>
          <BookPresentation author={decodedAuthor} book={data} />
          <SimilarBooks data={data} />
        </>
      ) : (
        <BookNotAvailable book={decodedTitle} author={decodedAuthor} />
      )}
    </article>
  );
}
