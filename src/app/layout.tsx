import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Pokedex from "pokedex-promise-v2";
import "./globals.css";
import QueryProvider from "./provider/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const poketmons = new Pokedex();

export const metadata: Metadata = {
    metadataBase:
        process.env.NEXT_PUBLIC_RUN_MODE === "development"
            ? new URL("http://localhost:3000")
            : new URL("https://eunoh-pokedex.vercel.app"),
    title: "Eun's Pokedex",
    description: "Eun's Pokedex",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}
