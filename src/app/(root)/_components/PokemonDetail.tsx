import { PokemonWithSpecies } from "@/types/pokemon.type";
import formatNumber from "@/utils/formatNumber";
import Image from "next/image";

function PokemonDetail({ pokemon }: { pokemon: PokemonWithSpecies }) {
    console.log(pokemon.moves[0].move.korean_name);

    return (
        <div>
            <h1>{pokemon.korean_name}</h1>
            <p>{formatNumber(pokemon.id)}</p>
            <div className="relative aspect-square w-[96px] h-[96px]">
                <Image
                    className="object-cover"
                    src={pokemon.sprites.front_default as string}
                    alt={pokemon.korean_name || "pokemon_name"}
                    fill
                    sizes="(min-width: 640px) 96px, 96px"
                    priority
                />
            </div>
            <h3>{`이름 : ${pokemon.korean_name}`}</h3>
            <p>{`키 : ${pokemon.height / 10} m`}</p>
            <p>{`몸무게 : ${pokemon.weight / 10} kg`}</p>
            <p>{`타입 : ${pokemon.types.map((type) => type.type.korean_name).join(", ")}`}</p>
            <p>{`특성 : ${pokemon.abilities
                .map((ability) => ability.ability.korean_name)
                .join(", ")}`}</p>
            <p>기술 :</p>
            <p>
                {pokemon.moves.map((move) => (
                    <span key={move.move.name}>{move.move.korean_name}&nbsp;&nbsp;</span>
                ))}
            </p>
        </div>
    );
}

export default PokemonDetail;
