import { Suspense } from "react";
import PokemonSuspense from "../../_components/PokemonSuspense";
import Loading from "./loading";

async function PokemonCardPage({ params }: { params: { slug: string } }) {
    const id = params.slug;

    return (
        <Suspense fallback={<Loading />}>
            <PokemonSuspense id={id} />
        </Suspense>
    );
}

export default PokemonCardPage;
