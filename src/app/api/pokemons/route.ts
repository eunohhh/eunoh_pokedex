import { TOTAL_POKEMON } from "@/constants/constants";
import type { PokemonWithSpecies } from "@/types/pokemon.type";
import { getKoreanName } from "@/utils/getKoreanName";
import { poketmons } from "@/utils/poketMon";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    const pageString = searchParams.get("page");

    if (!pageString) {
        return NextResponse.json({ error: "페이지 번호를 제공해야 합니다." });
    }

    const page = Number(pageString);
    if (isNaN(page) || page < 1) {
        return NextResponse.json({ error: "유효한 페이지 번호를 제공해야 합니다." });
    }

    const start = (page - 1) * 8 + 1;
    const end = Math.min(start + 7, TOTAL_POKEMON);

    try {
        const pokemonPromises: Promise<PokemonWithSpecies>[] = Array.from(
            { length: end - start + 1 },
            async (_, idx) => {
                const pokemonId = start + idx;
                const pokemon = await poketmons.getPokemonByName(pokemonId);
                const species = await poketmons.getPokemonSpeciesByName(pokemonId);

                const pokemonWithSpecies = { ...pokemon, ...species };
                const koreanName = getKoreanName(pokemonWithSpecies);

                return { ...pokemonWithSpecies, korean_name: koreanName?.name };
            }
        );

        const allPokemonData = await Promise.all(pokemonPromises);
        return NextResponse.json(allPokemonData);
    } catch (error) {
        const httpError = error as Error;
        return NextResponse.json({
            error: "데이터를 가져오는 데 실패했습니다.",
            details: httpError.message,
        });
    }
};
