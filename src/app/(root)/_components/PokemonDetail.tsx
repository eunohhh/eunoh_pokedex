import { PokemonWithKoreanName } from "@/types/pokemon.type";

function PokemonDetail({ pokemon }: { pokemon: PokemonWithKoreanName }) {
    return (
        <div>
            <h1>{pokemon.korean_name}</h1>
        </div>
    );
}

export default PokemonDetail;
