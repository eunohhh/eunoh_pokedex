import { PokemonAbilityTypes, PokemonTypes, PokemonWithSpecies } from "@/types/pokemon.type";
import formatNumber from "@/utils/formatNumber";
import Image from "next/image";
import Link from "next/link";
import AbilitiesChip from "./AbilitiesChips";
import TypesChip from "./TypesChips";

function PokemonDetail({ pokemon }: { pokemon: PokemonWithSpecies }) {
    // console.log(
    //     pokemon.abilities[0].ability.name,
    //     pokemon.abilities[1].ability.name,
    //     pokemon.abilities[2].ability.name
    // );

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold pt-8">{pokemon.korean_name}</h1>
            <p>{formatNumber(pokemon.id)}</p>
            <div className="relative aspect-auto w-56 h-56">
                <Image
                    className="object-contain"
                    src={pokemon.sprites.other.dream_world.front_default as string}
                    alt={pokemon.korean_name || "pokemon_name"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    priority
                />
            </div>

            <h3 className="text-3xl py-2">{`이름 : ${pokemon.korean_name}`}</h3>
            <p>{`키 : ${pokemon.height / 10} m`}</p>
            <p>{`몸무게 : ${pokemon.weight / 10} kg`}</p>
            <div className="flex flex-row gap-2">
                <span>타입 :</span>
                {pokemon.types.map((type) => (
                    <TypesChip
                        key={type.type.name}
                        intent={type.type.name as PokemonTypes}
                        label={type.type.korean_name}
                    />
                ))}
                <span>특성 :</span>
                {pokemon.abilities.map((ability) => (
                    <AbilitiesChip
                        key={ability.ability.name}
                        intent={ability.ability.name as PokemonAbilityTypes}
                        label={ability.ability.korean_name}
                    />
                ))}
            </div>
            <p className="text-2xl py-2">기술 :</p>
            <p className="text-center py-2 w-[80%]">
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
