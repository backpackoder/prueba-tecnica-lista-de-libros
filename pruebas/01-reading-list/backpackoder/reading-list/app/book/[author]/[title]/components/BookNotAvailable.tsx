import Image from "next/image";
import Link from "next/link";

type BookNotAvailableProps = {
  author: string;
  book: string;
};

export function BookNotAvailable({ author, book }: BookNotAvailableProps) {
  return (
    <article className="flex flex-col items-center justify-center gap-4 w-full h-full">
      <p className="text-xl">
        El libro {`"${book}"`} de {author} no esta disponible en nuestra biblioteca en este momento.
      </p>

      <Image src="/images/1.webp" alt="Libro no disponible" width={300} height={300} />

      <Link href="/" className=" bg-green-200 p-2 rounded-sm duration-200 hover:bg-green-300">
        Ver los libros disponibles
      </Link>
    </article>
  );
}
