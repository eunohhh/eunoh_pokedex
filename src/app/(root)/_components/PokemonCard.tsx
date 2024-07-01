import { PokemonWithSpecies } from "@/types/pokemon.type";
import { getKoreanName } from "@/utils/getKoreanName";
import Link from "next/link";

interface PokemonCardProps {
    pokemon: PokemonWithSpecies;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    const koreanName = getKoreanName(pokemon);

    return (
        <Link href={`/pokemons/${pokemon.id}`} className="flex justify-center items-center">
            <li className="h-64 w-44 bg-sky-500 flex items-center justify-center gap-2">
                <strong>{koreanName?.name}</strong>
                {/* <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={64} height={64} /> */}
            </li>
        </Link>
    );
}

export default PokemonCard;
