import { getPokemons } from "@/api/getPokemons";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { Pokemon } from "pokedex-promise-v2";
import AllPokemons from "./AllPokemons";

async function AllPokemonsSuspense() {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery({
        queryKey: ["pokemons"],
        initialPageParam: 1,
        getNextPageParam: (lastPage: Pokemon[], allPages: Pokemon[][]) =>
            lastPage.length === 0 ? null : allPages.length,
        queryFn: ({ pageParam }) => getPokemons(pageParam),
        pages: 1,
    });
    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <AllPokemons />
        </HydrationBoundary>
    );
}

export default AllPokemonsSuspense;
