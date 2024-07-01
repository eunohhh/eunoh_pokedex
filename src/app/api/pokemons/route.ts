import type { PokemonWithKoreanName } from "@/types/pokemon.type";
import { NextResponse } from "next/server";
import Pokedex from "pokedex-promise-v2";

export const poketmons = new Pokedex();

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    const pageString = searchParams.get("page");

    if (!pageString) {
        throw new Error("get 날릴때 페이지 번호도 같이 날려라");
    }

    const page = Number(pageString);
    const start = (page - 1) * 10 + 1;
    const end = start + 9;

    try {
        const pokemonPromises: Promise<PokemonWithKoreanName>[] = [];
        for (let i = start; i <= end && i <= 151; i++) {
            const pokemon = await poketmons.getPokemonByName(i);
            const species = await poketmons.getPokemonSpeciesByName(i);

            const koreanName = species.names.find(
                (name: { language: { name: string }; name: string }) => name.language.name === "ko"
            );

            pokemonPromises.push(
                Promise.resolve({ ...pokemon, korean_name: koreanName?.name || "" })
            );
        }

        const allPokemonData = await Promise.all(pokemonPromises);
        return NextResponse.json(allPokemonData);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch data" });
    }
};

// try {
//     const allPokemonData = [];
//     for (let i = 1; i <= TOTAL_POKEMON; i++) {
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
//         const speciesResponse = await axios.get(
//             `https://pokeapi.co/api/v2/pokemon-species/${i}`
//         );
/////////
//         const koreanName = speciesResponse.data.names.find(
//             (name: any) => name.language.name === "ko"
//         );
//         allPokemonData.push({ ...response.data, korean_name: koreanName.name });
/////////
//     }

//     return NextResponse.json(allPokemonData);
// } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch data" });
// }
