import Config from "@/config/config.export";
import { Pokemon } from "pokedex-promise-v2";

export async function getPokemons(page: number): Promise<Pokemon[]> {
    const response = await fetch(`${Config().baseUrl}/api/pokemons?page=${page}`, {
        method: "GET",
        next: {
            tags: ["pokemons"],
        },
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch places");
    }
    const data = await response.json();
    return data;
}
