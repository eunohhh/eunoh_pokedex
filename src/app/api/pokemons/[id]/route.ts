import { poketmons } from "@/app/layout";
import axios from "axios";
import { NextResponse } from "next/server";
import { MoveElement, PokedexName, PokemonAbility, PokemonType } from "pokedex-promise-v2";

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
    const id = Number(params.id);
    try {
        const response = await poketmons.getPokemonByName(id);
        const speciesResponse = await poketmons.getPokemonSpeciesByName(id);

        const koreanName = speciesResponse.names?.find(
            (name: PokedexName) => name.language.name === "ko"
        );

        const typesWithKoreanNames = await Promise.all(
            response.types.map(async (type: PokemonType) => {
                const typeResponse = await axios.get<PokemonType>(type.type.url);
                const koreanTypeName =
                    typeResponse.data.names?.find(
                        (name: PokedexName) => name.language.name === "ko"
                    )?.name || type.type.name;
                return { ...type, type: { ...type.type, korean_name: koreanTypeName } };
            })
        );

        const abilitiesWithKoreanNames = await Promise.all(
            response.abilities.map(async (ability: PokemonAbility) => {
                const abilityResponse = await axios.get<PokemonAbility>(ability.ability.url);
                const koreanAbilityName =
                    abilityResponse.data.names?.find(
                        (name: PokedexName) => name.language.name === "ko"
                    )?.name || ability.ability.name;
                return {
                    ...ability,
                    ability: { ...ability.ability, korean_name: koreanAbilityName },
                };
            })
        );

        const movesWithKoreanNames = await Promise.all(
            response.moves.map(async (move: MoveElement) => {
                const moveResponse = await axios.get<MoveElement>(move.move.url);
                const koreanMoveName =
                    moveResponse.data.names?.find(
                        (name: PokedexName) => name.language.name === "ko"
                    )?.name || move.move.name;
                return { ...move, move: { ...move.move, korean_name: koreanMoveName } };
            })
        );

        const pokemonData = {
            ...response,
            korean_name: koreanName?.name || response.name,
            types: typesWithKoreanNames,
            abilities: abilitiesWithKoreanNames,
            moves: movesWithKoreanNames,
        };

        return NextResponse.json(pokemonData);
    } catch (error) {
        const httpError = error as Error;
        return NextResponse.json({
            error: "데이터를 가져오는 데 실패했습니다.",
            details: httpError.message,
        });
    }
};
