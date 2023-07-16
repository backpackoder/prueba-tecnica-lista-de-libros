import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Libro magico",
  description: "Guarda tu libros favoritos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center gap-4 min-h-screen p-4">{children}</main>
      </body>
    </html>
  );
}
