import Config from "@/config/config.export";
import { Pokemon } from "pokedex-promise-v2";

export async function getPokemon(id: string): Promise<Pokemon[]> {
    const response = await fetch(`${Config().baseUrl}/api/pokemons/${id}`, {
        method: "GET",
        next: {
            tags: ["pokemon"],
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch places");
    }
    const data = await response.json();
    return data;
}
