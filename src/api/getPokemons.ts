import Config from "@/config/config.export";
import { PokemonWithSpecies } from "@/types/pokemon.type";

export async function getPokemons(page: number): Promise<PokemonWithSpecies[]> {
    const response = await fetch(`${Config().baseUrl}/api/pokemons?page=${page}`, {
        method: "GET",
        next: {
            tags: ["pokemons"],
        },
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch pokemons");
    }
    const data = await response.json();
    return data;
}
