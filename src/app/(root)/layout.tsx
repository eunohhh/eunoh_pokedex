import type { Metadata } from "next";

const metadata: Metadata = {
    title: "Pokedex",
    description: "Pokedex",
};

function PokedexLayout({ children }: { children: React.ReactNode }) {
    return <main className="container max-w-[1024px] mx-auto my-0">{children}</main>;
}

export default PokedexLayout;
