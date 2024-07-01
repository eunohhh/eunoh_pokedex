import { Pokemon, PokemonSpecies } from "pokedex-promise-v2";

export type PokemonWithKoreanName = Pokemon & { korean_name: string };

// export type PokemonWithSpecies = Pokemon & {
//     species: PokemonSpecies & { name: string; url: string; korean_name?: string };
// };

export type PokemonWithSpecies = Pokemon & PokemonSpecies & { korean_name?: string };
