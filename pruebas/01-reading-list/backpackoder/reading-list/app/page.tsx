// Components
import { BooksList } from "@/components/lists/BooksList";

export default async function Home() {
  return (
    <>
      <h1 className="text-4xl">Libro magico</h1>

      <BooksList />
    </>
  );
}
