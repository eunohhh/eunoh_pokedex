import { Suspense } from "react";
import AllPokemonsSuspense from "./_components/AllPokemonsSuspense";
import TopButton from "./_components/TopButton";
import Loading from "./loading";

export default function Home() {
    return (
        <Suspense fallback={<Loading />}>
            <AllPokemonsSuspense />
            <TopButton />
        </Suspense>
    );
}
