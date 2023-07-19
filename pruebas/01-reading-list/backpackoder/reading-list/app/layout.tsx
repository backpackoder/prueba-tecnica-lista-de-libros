import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Components
import { FiltersProvider } from "@/context/FiltersProvider";
import { Header } from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Libro magico",
  description: "Guarda tu libros favoritos en un solo lugar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FiltersProvider>
          <main className="flex flex-col items-center gap-4 min-h-screen p-4">
            <Header />
            {children}
          </main>
        </FiltersProvider>
      </body>
    </html>
  );
}
