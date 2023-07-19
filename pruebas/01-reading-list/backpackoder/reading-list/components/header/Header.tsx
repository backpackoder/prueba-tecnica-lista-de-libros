"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

// Assets
import LOGO from "@/assets/imgs/logo.jpg";

// Commons
import { ROUTES, TITLE } from "@/commons/commons";
import { FiltersContext } from "@/context/FiltersContext";

export function Header() {
  const pathname = usePathname();

  const { filtersDispatch } = useContext(FiltersContext);

  const items = [
    {
      href: ROUTES.HOME,
      text: "Menu",
    },
    {
      href: ROUTES.FAVS,
      text: "Mis favoritos",
    },
  ];

  return (
    <nav className="bg-gray-300 w-full p-2 shadow-xl">
      <ul className="flex flex-wrap items-center justify-center gap-4">
        <li onClick={() => filtersDispatch({ type: "reset", payload: null })}>
          <Link href="/">
            <Image src={LOGO} alt={TITLE} width={50} height={50} className="rounded-full" />
          </Link>
        </li>
        {items.map((item) => {
          return (
            <li
              key={item.text}
              className={`${
                pathname === item.href ? "bg-blue-200" : ""
              } p-2 rounded-md cursor-pointer duration-200 hover:bg-blue-200`}
              onClick={() => filtersDispatch({ type: "reset", payload: null })}
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
