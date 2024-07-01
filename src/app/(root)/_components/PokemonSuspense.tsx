import { getPokemon } from "@/api/getPokemon";
import { PokemonWithSpecies } from "@/types/pokemon.type";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import PokemonDetail from "./PokemonDetail";

async function PokemonSuspense({ id }: { id: string }) {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["pokemon"],
        queryFn: () => getPokemon(id),
    });
    const dehydratedState = dehydrate(queryClient);

    const pokemon = await queryClient.getQueryData<PokemonWithSpecies>(["pokemon"]);

    return (
        <HydrationBoundary state={dehydratedState}>
            {pokemon && <PokemonDetail pokemon={pokemon} />}
        </HydrationBoundary>
    );
}

export default PokemonSuspense;
