import { getPokemon } from "@/api/getPokemon";
import { PokemonWithSpecies } from "@/types/pokemon.type";
import { Suspense } from "react";
import PokemonSuspense from "../../_components/PokemonSuspense";
import Loading from "./loading";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const pokemon: PokemonWithSpecies = await getPokemon(params.id);

    return {
        title: `${pokemon.korean_name}`,
        description: `${pokemon.korean_name}의 상세 정보입니다.`,
        generator: "Next.js",
        applicationName: "Eun's Pokedex",
        keywords: ["pokedex", "pokemon", `${pokemon.korean_name}`],
        authors: [{ name: "Eun Oh", url: "https://eunoh-pokedex.vercel.app" }],
        creator: "Eun Oh",
        publisher: "Eun Oh",
        alternates: {
            canonical: "/",
            languages: {
                "ko-KR": "/",
            },
        },
        openGraph: {
            title: `${pokemon.korean_name}`,
            description: `${pokemon.korean_name}의 상세 정보입니다.`,
            url: "https://eunoh-pokedex.vercel.app",
            siteName: "Pokedex",
            images: [
                {
                    url: `${pokemon.sprites.other.dream_world.front_default}`,
                    width: 800,
                    height: 600,
                },
            ],
            locale: "ko_KR",
            type: "website",
        },
        robots: {
            index: false,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: false,
                noimageindex: true,
            },
        },
        icons: {
            icon: "/favicon.png",
            shortcut: "/favicon.png",
            apple: "/favicon.png",
            other: {
                rel: "apple-touch-icon-precomposed",
                url: "/favicon.png",
            },
        },
    };
}

function PokemonCardPage({ params }: { params: { id: string } }) {
    const id = params.id;
    return (
        <Suspense fallback={<Loading />}>
            <PokemonSuspense id={id} />
        </Suspense>
    );
}

export default PokemonCardPage;
