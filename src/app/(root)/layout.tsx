import type { Metadata } from "next";
import { basicMeta } from "../basicMeta";

export const metadata: Metadata = basicMeta;

function PokedexLayout({ children }: { children: React.ReactNode }) {
    return <main className="container max-w-[1024px] mx-auto my-0">{children}</main>;
}

export default PokedexLayout;
