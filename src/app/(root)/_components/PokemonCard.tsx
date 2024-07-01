"use client";

import { PokemonWithSpecies } from "@/types/pokemon.type";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "./pokemonCard.module.css";

interface PokemonCardProps {
    pokemon: PokemonWithSpecies;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    const liRef = useRef<HTMLLIElement>(null);
    const handleMouseMove = (
        e: React.MouseEvent<HTMLLIElement> | React.MouseEvent<HTMLDivElement>
    ) => {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        let rotateY = (-1 / 5) * x + 20;
        let rotateX = (4 / 30) * y - 20;
        e.currentTarget.style.backgroundPosition = `${x / 5 + y / 5}% ${x / 5 + y / 5}%`;
        e.currentTarget.style.filter = `opacity(${x / 200}) brightness(1.2)`;
        if (liRef.current)
            liRef.current.style.transform = `perspective(350px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };

    const handleMouseLeave = (
        e: React.MouseEvent<HTMLLIElement> | React.MouseEvent<HTMLDivElement>
    ) => {
        e.currentTarget.style.filter = "opacity(0.6)";
        if (liRef.current)
            liRef.current.style.transform = "perspective(350px) rotateY(0deg) rotateX(0deg)";
    };

    //hover:-translate-y-1
    return (
        <Link
            href={`/pokemons/${pokemon.id}`}
            className="relative flex justify-center items-center "
        >
            <li
                ref={liRef}
                className="h-96 w-80 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 shadow-md duration-400 ease-in-out transition-all duration-100 transform hover:shadow-lg"
            >
                <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={`z-10 absolute w-[244px] h-96 filter-brightness-opacity transition-all mix-blend-color-dodge bg-[size:150%_150%] bg-[position:100%] brightness-110 ${styles.bg_custom_gradient} ${styles.filter_opacity}`}
                />
                <div className="relative aspect-auto w-52 h-52">
                    <Image
                        src={pokemon.sprites.other.dream_world.front_default as string}
                        alt={pokemon.korean_name || "pokemon_name"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        priority
                    />
                </div>

                <strong className="text-xl">{pokemon.korean_name}</strong>
                <p className="text-sm">{`도감번호 : ${pokemon.id}`}</p>
            </li>
        </Link>
    );
}

export default PokemonCard;
