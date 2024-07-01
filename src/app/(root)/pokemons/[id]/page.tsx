import { Suspense } from "react";
import PokemonSuspense from "../../_components/PokemonSuspense";
import Loading from "./loading";

function PokemonCardPage({ params }: { params: { id: string } }) {
    const id = params.id;
    return (
        <Suspense fallback={<Loading />}>
            <PokemonSuspense id={id} />
        </Suspense>
    );
}

export default PokemonCardPage;
