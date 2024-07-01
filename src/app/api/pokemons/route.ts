import { TOTAL_POKEMON } from "@/constants/constants";
import { NextResponse } from "next/server";
import Pokedex, { Pokemon } from "pokedex-promise-v2";

const poketmons = new Pokedex();

export const GET = async () => {
    try {
        const pokemonPromises: Promise<Pokemon>[] = [];
        for (let i = 1; i <= TOTAL_POKEMON; i++) {
            pokemonPromises.push(poketmons.getPokemonByName(i));
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
