// Components
import { FavListLength } from "./components/FavListLength";
import { BooksList } from "./components/BooksList";

export default async function Favorites() {
  return (
    <article className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-4xl">
        Mis libros favoritos
        {/* (<FavListLength />): */}
      </h2>

      <BooksList />
    </article>
  );
}
