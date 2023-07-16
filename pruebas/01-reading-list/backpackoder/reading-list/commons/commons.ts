import BOOKS_JSON from "@/assets/json/books.json";

export const TITLE = "Libro magico";

export const ROUTES = {
  HOME: "/",
  FAVS: "/favs",
  BOOK: (title: string) => `/book/${title}`,
};

export { BOOKS_JSON };
