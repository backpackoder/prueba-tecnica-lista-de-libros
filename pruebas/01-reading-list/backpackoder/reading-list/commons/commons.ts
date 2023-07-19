import BOOKS_JSON from "@/assets/json/books.json";

export const TITLE = "Libro magico";

export const ROUTES = {
  HOME: "/",
  FAVS: "/favorites",
  BOOK: (author: string, title: string) => `/book/${author}/${title}`,
};

export { BOOKS_JSON };
