import Image from "next/image";
import Link from "next/link";

export function ListEmpty() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full bg-blue-200 py-4 px-8 rounded-lg">
      <h1 className="text-2xl font-bold">¡No tienes libros en tu lista!</h1>

      <Image src="/images/1.webp" alt="Empty" width={300} height={300} />

      <p className="text-lg">Agrega libros a tu lista de favoritos para verlos aquí</p>

      <Link href="/" className=" bg-green-200 p-2 rounded-sm duration-200 hover:bg-green-300">
        Voy a agregar libros a mi lista
      </Link>
    </div>
  );
}
