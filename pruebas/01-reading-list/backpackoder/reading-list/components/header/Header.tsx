import Image from "next/image";

import LOGO from "@/assets/imgs/logo.jpg";
import Link from "next/link";

export function Header() {
  return (
    <nav>
      <ul className="flex flex-wrap items-center justify-center gap-4">
        <li>
          <Link href="/">
            <Image src={LOGO} alt="Logo" width={50} height={50} />
          </Link>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/favorites">Mis favoritos</a>
        </li>
      </ul>
    </nav>
  );
}
