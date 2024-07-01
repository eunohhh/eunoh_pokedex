"use client";

import { getPokemons } from "@/api/getPokemons";
import { PokemonWithSpecies } from "@/types/pokemon.type";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
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
    });

    // console.log(pokemons);

    return (
        <InfiniteScroll fetchNextPage={fetchNextPage} hasNextPage={hasNextPage}>
            <ul>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
                {isFetching && <li className="text-center">Loading...</li>}
            </ul>
        </InfiniteScroll>
    );
}

export default AllPokemons;
