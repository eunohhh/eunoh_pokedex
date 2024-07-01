import { poketmons } from "@/app/layout";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
    const id = Number(params.id);
    try {
        const response = await poketmons.getPokemonByName(id);
        const speciesResponse = await poketmons.getPokemonSpeciesByName(id);

        const koreanName = speciesResponse.names?.find((name: any) => name.language.name === "ko");

        const typesWithKoreanNames = await Promise.all(
            response.types.map(async (type: any) => {
                const typeResponse = await axios.get(type.type.url);
                const koreanTypeName =
                    typeResponse.data.names?.find((name: any) => name.language.name === "ko")
                        ?.name || type.type.name;
                return { ...type, type: { ...type.type, korean_name: koreanTypeName } };
            })
        );

        const abilitiesWithKoreanNames = await Promise.all(
            response.abilities.map(async (ability: any) => {
                const abilityResponse = await axios.get(ability.ability.url);
                const koreanAbilityName =
                    abilityResponse.data.names?.find((name: any) => name.language.name === "ko")
                        ?.name || ability.ability.name;
                return {
                    ...ability,
                    ability: { ...ability.ability, korean_name: koreanAbilityName },
                };
            })
        );

        const movesWithKoreanNames = await Promise.all(
            response.moves.map(async (move: any) => {
                const moveResponse = await axios.get(move.move.url);
                const koreanMoveName =
                    moveResponse.data.names?.find((name: any) => name.language.name === "ko")
                        ?.name || move.move.name;
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
