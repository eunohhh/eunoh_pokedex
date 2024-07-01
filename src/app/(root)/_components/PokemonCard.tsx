import { PokemonWithSpecies } from "@/types/pokemon.type";
import { getKoreanName } from "@/utils/getKoreanName";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
    pokemon: PokemonWithSpecies;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    const koreanName = getKoreanName(pokemon);

    return (
        <Link href={`/pokemons/${pokemon.id}`} className="flex justify-center items-center">
            <li className="h-96 w-80 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-100 shadow-md duration-400 ease-in-out transition transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-auto w-52 h-52">
                    <Image
                        src={pokemon.sprites.other.dream_world.front_default as string}
                        alt={pokemon.korean_name || "pokemon_name"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        priority
                    />
                </div>

                <strong>{koreanName?.name}</strong>
                <p>{`도감번호 : ${pokemon.id}`}</p>
            </li>
        </Link>
    );
}

export default PokemonCard;
