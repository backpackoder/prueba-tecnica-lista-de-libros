// Commons
import { BOOKS_JSON } from "@/commons/commons";

const genres = BOOKS_JSON.library.map((book) => book.book.genre);
const uniqueGenres = genres.filter((genre, index) => {
  return genres.indexOf(genre) === index;
});

const authors = BOOKS_JSON.library.map((book) => book.book.author.name);
const uniqueAuthors = authors.filter((author, index) => {
  return authors.indexOf(author) === index;
});

export const SELECTORS = {
  SHOW: {
    type: "show",
    title: "Filtrar por",
    default: "Todos",
    options: ["Todos", "En mi lista", "No en mi lista"],
  },
  GENRES: {
    type: "genre",
    title: "Genero",
    default: "Todos",
    options: ["Todos", ...uniqueGenres],
  },
  AUTHORS: {
    type: "author",
    title: "Autor",
    default: "Todos",
    options: ["Todos", ...uniqueAuthors],
  },
  SORT: {
    type: "sort",
    title: "Ordenar por",
    default: "Seleccionar",
    options: ["Seleccionar", "title", "author", "year", "pages"],
  },
  ORDER: {
    type: "order",
    title: "Orden",
    default: "asc",
    options: ["asc", "desc"],
  },
};

export type SELECTORS_TYPE = typeof SELECTORS;
export type SELECTORS_KEYS = keyof typeof SELECTORS;
export type SELECTORS_OPTIONS = (typeof SELECTORS)[keyof typeof SELECTORS]["options"];
