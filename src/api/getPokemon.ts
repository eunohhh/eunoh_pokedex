import Config from "@/config/config.export";
import { PokemonWithSpecies } from "@/types/pokemon.type";

export async function getPokemon(id: string): Promise<PokemonWithSpecies[]> {
    const response = await fetch(`${Config().baseUrl}/api/pokemons/${id}`, {
        method: "GET",
        next: {
            tags: ["pokemon"],
        },
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch pokemon");
    }
    const data = await response.json();

    return data;
}
