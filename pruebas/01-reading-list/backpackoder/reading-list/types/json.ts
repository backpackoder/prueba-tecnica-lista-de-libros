// Assets
import BOOKS_JSON from "../assets/json/books.json";

export type BOOKS_DATA = typeof BOOKS_JSON;
export type Library = typeof BOOKS_JSON.library;
export type Author = (typeof BOOKS_JSON.library)[0]["book"]["author"];
