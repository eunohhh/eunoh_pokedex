import Link from "next/link";
import { Pokemon } from "pokedex-promise-v2";

interface PokemonCardProps {
    pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <Link href={`/pokemons/${pokemon.id}`}>
            <li className="h-[300px] bg-sky-500 flex items-center justify-center gap-2">
                <strong>{pokemon.korean_name}</strong>
                {/* <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={64} height={64} /> */}
            </li>
        </Link>
    );
}

export default PokemonCard;
