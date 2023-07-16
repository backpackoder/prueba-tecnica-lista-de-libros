import Image from "next/image";

// Commons
import { BOOKS_JSON } from "@/commons/commons";

export default function BookId({ params }: { params: { title: string } }) {
  const book = BOOKS_JSON.library.find(
    (book) => book.book.title === decodeURIComponent(params.title)
  );

  const data = book?.book;

  return (
    data && (
      <article className="flex gap-4">
        <Image src={data.cover} alt={data.title} width={300} height={0} />

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">{data.title}</h1>

          <p className="text-gray-500">{data.author.name}</p>

          <p>Year: {data.year}</p>

          <p>{data.pages} paginas</p>

          <p>Genre: {data.genre}</p>

          <p>Synopsis: {data.synopsis}</p>
        </div>
      </article>
    )
  );
}
