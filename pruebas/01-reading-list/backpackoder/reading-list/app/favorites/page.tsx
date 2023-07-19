// Components
import { FavoritesTitle } from "./components/FavoritesTitle";
import { BooksList } from "./components/BooksList";

export default async function Favorites() {
  return (
    <article className="flex flex-col items-center justify-center gap-4 w-full">
      <h2 className="text-4xl">
        <FavoritesTitle />
      </h2>

      <BooksList />
    </article>
  );
}
