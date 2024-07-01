import { PokemonWithSpecies } from "@/types/pokemon.type";
import formatNumber from "@/utils/formatNumber";
import Image from "next/image";
import Link from "next/link";

function PokemonDetail({ pokemon }: { pokemon: PokemonWithSpecies }) {
    console.log(pokemon.moves[0].move.korean_name);

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold pt-8">{pokemon.korean_name}</h1>
            <p>{formatNumber(pokemon.id)}</p>
            <div className="relative aspect-auto w-full h-[300px]">
                <Image
                    className="object-cover"
                    src={pokemon.sprites.other.dream_world.front_default as string}
                    alt={pokemon.korean_name || "pokemon_name"}
                    fill
                    sizes="(min-width: 640px) 300px, 300px"
                    objectFit="contain"
                    priority
                />
            </div>
            <br />

            <h3 className="text-2xl">{`이름 : ${pokemon.korean_name}`}</h3>
            <p>{`키 : ${pokemon.height / 10} m`}</p>
            <p>{`몸무게 : ${pokemon.weight / 10} kg`}</p>
            <div className="flex flex-row gap-2">
                <span>타입 :</span>
                {pokemon.types.map((type) => (
                    <span className="bg-green-400 text-center w-16 rounded-md" key={type.type.name}>
                        {type.type.korean_name}
                    </span>
                ))}
                <span>특성 :</span>
                {pokemon.abilities.map((ability) => (
                    <span
                        className="bg-blue-400 text-center w-16 rounded-md"
                        key={ability.ability.name}
                    >
                        {ability.ability.korean_name}
                    </span>
                ))}
            </div>
            <p className="text-2xl py-2">기술 :</p>
            <p className="text-center py-2 w-[90%]">
                {pokemon.moves.map((move) => (
                    <span key={move.move.name}>{move.move.korean_name}&nbsp;&nbsp;</span>
                ))}
            </p>
            <Link href="/">
                <button className="bg-red-400 text-white p-1 rounded-md">뒤로가기</button>
            </Link>
        </div>
    );
}

export default PokemonDetail;
