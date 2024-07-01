import { PokemonWithSpecies } from "@/types/pokemon.type";

export function getKoreanName(pokemon: PokemonWithSpecies) {
    return pokemon.names.find(
        (name: { language: { name: string }; name: string }) => name.language.name === "ko"
    );
}
