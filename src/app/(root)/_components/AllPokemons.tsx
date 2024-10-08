"use client";

import { getPokemons } from "@/api/getPokemons";
import { PokemonWithSpecies } from "@/types/pokemon.type";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import BasicLoader from "./BasicLoader";
import InfiniteScroll from "./InfiniteScroll";
import PokemonCard from "./PokemonCard";

function AllPokemons() {
    const {
        data: pokemons = [],
        isFetching,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: ["pokemons"],
        initialPageParam: 2,
        getNextPageParam: (lastPage: PokemonWithSpecies[], allPages: PokemonWithSpecies[][]) =>
            lastPage.length === 0 ? null : allPages.length + 1,
        queryFn: ({ pageParam }: { pageParam: number }) => getPokemons(pageParam),
        select: (data: InfiniteData<PokemonWithSpecies[]>) => data.pages.flat(),
        staleTime: Infinity,
    });

    // console.log(pokemons);

    return (
        <InfiniteScroll fetchNextPage={fetchNextPage} hasNextPage={hasNextPage}>
            <section>
                <h1 className="text-4xl font-bold text-center py-11">포켓몬 도감</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                    {isFetching && <BasicLoader isSmall />}
                </ul>
            </section>
        </InfiniteScroll>
    );
}

export default AllPokemons;
