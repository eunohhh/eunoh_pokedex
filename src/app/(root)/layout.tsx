import type { Metadata } from "next";

const metadata: Metadata = {
    title: "Pokedex",
    description: "Pokedex",
};

function PokedexLayout({ children }: { children: React.ReactNode }) {
    return <main className="container">{children}</main>;
}

export default PokedexLayout;
