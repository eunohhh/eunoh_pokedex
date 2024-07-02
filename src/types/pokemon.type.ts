import { Pokemon, PokemonSpecies } from "pokedex-promise-v2";

export type PokemonWithKoreanName = Pokemon & { korean_name: string };

export type PokemonWithSpecies = Pokemon & PokemonSpecies & { korean_name?: string };

export type PokemonTypes =
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "success"
    | "default"
    | "normal"
    | "fire"
    | "water"
    | "electric"
    | "grass"
    | "ice"
    | "fighting"
    | "poison"
    | "ground"
    | "flying"
    | "bug"
    | "dragon"
    | "ghost"
    | "dark"
    | "steel"
    | "fairy";

export const abilities = [
    "air-lock",
    "arena-trap",
    "battle-armor",
    "blaze",
    "cacophony",
    "chlorophyll",
    "clear-body",
    "cloud-nine",
    "color-change",
    "compound-eyes",
    "cute-charm",
    "damp",
    "drizzle",
    "drought",
    "early-bird",
    "effect-spore",
    "flame-body",
    "flash-fire",
    "forecast",
    "guts",
    "huge-power",
    "hustle",
    "hyper-cutter",
    "illuminate",
    "immunity",
    "inner-focus",
    "insomnia",
    "intimidate",
    "keen-eye",
    "levitate",
    "lightning-rod",
    "limber",
    "liquid-ooze",
    "magma-armor",
    "magnet-pull",
    "marvel-scale",
    "minus",
    "natural-cure",
    "oblivious",
    "overgrow",
    "own-tempo",
    "pickup",
    "plus",
    "poison-point",
    "pressure",
    "pure-power",
    "rain-dish",
    "rock-head",
    "rough-skin",
    "run-away",
    "sand-stream",
    "sand-veil",
    "serene-grace",
    "shadow-tag",
    "shed-skin",
    "shell-armor",
    "shield-dust",
    "soundproof",
    "speed-boost",
    "static",
    "stench",
    "sticky-hold",
    "sturdy",
    "suction-cups",
    "swarm",
    "swift-swim",
    "synchronize",
    "thick-fat",
    "torrent",
    "trace",
    "truant",
    "vital-spirit",
    "volt-absorb",
    "water-absorb",
    "water-veil",
    "white-smoke",
    "wonder-guard",
    "adaptability",
    "aftermath",
    "anger-point",
    "anticipation",
    "bad-dreams",
    "download",
    "dry-skin",
    "filter",
    "flower-gift",
    "forewarn",
    "frisk",
    "gluttony",
    "heatproof",
    "honey-gather",
    "hydration",
    "ice-body",
    "iron-fist",
    "klutz",
    "leaf-guard",
    "magic-guard",
    "mold-breaker",
    "motor-drive",
    "multitype",
    "no-guard",
    "normalize",
    "poison-heal",
    "quick-feet",
    "reckless",
    "rivalry",
    "scrappy",
    "simple",
    "skill-link",
    "slow-start",
    "sniper",
    "snow-cloak",
    "snow-warning",
    "solar-power",
    "solid-rock",
    "stall",
    "steadfast",
    "storm-drain",
    "super-luck",
    "tangled-feet",
    "technician",
    "tinted-lens",
    "unaware",
    "unburden",
    "default",
] as const;

export type PokemonAbilityTypes = (typeof abilities)[number];

// export type PokemonMapped<T> = {
//     [Property in keyof T]: T[Property];
// };

// export type PokemonAbilities =
//     | "air-lock"
//     | "arena-trap"
//     | "battle-armor"
//     | "blaze"
//     | "cacophony"
//     | "chlorophyll"
//     | "clear-body"
//     | "cloud-nine"
//     | "color-change"
//     | "compound-eyes"
//     | "cute-charm"
//     | "damp"
//     | "drizzle"
//     | "drought"
//     | "early-bird"
//     | "effect-spore"
//     | "flame-body"
//     | "flash-fire"
//     | "forecast"
//     | "guts"
//     | "huge-power"
//     | "hustle"
//     | "hyper-cutter"
//     | "illuminate"
//     | "immunity"
//     | "inner-focus"
//     | "insomnia"
//     | "intimidate"
//     | "keen-eye"
//     | "levitate"
//     | "lightning-rod"
//     | "limber"
//     | "liquid-ooze"
//     | "magma-armor"
//     | "magnet-pull"
//     | "marvel-scale"
//     | "minus"
//     | "natural-cure"
//     | "oblivious"
//     | "overgrow"
//     | "own-tempo"
//     | "pickup"
//     | "plus"
//     | "poison-point"
//     | "pressure"
//     | "pure-power"
//     | "rain-dish"
//     | "rock-head"
//     | "rough-skin"
//     | "run-away"
//     | "sand-stream"
//     | "sand-veil"
//     | "serene-grace"
//     | "shadow-tag"
//     | "shed-skin"
//     | "shell-armor"
//     | "shield-dust"
//     | "soundproof"
//     | "speed-boost"
//     | "static"
//     | "stench"
//     | "sticky-hold"
//     | "sturdy"
//     | "suction-cups"
//     | "swarm"
//     | "swift-swim"
//     | "synchronize"
//     | "thick-fat"
//     | "torrent"
//     | "trace"
//     | "truant"
//     | "vital-spirit"
//     | "volt-absorb"
//     | "water-absorb"
//     | "water-veil"
//     | "white-smoke"
//     | "wonder-guard"
//     | "adaptability"
//     | "aftermath"
//     | "anger-point"
//     | "anticipation"
//     | "bad-dreams"
//     | "download"
//     | "dry-skin"
//     | "filter"
//     | "flower-gift"
//     | "forewarn"
//     | "frisk"
//     | "gluttony"
//     | "heatproof"
//     | "honey-gather"
//     | "hydration"
//     | "ice-body"
//     | "iron-fist"
//     | "klutz"
//     | "leaf-guard"
//     | "magic-guard"
//     | "mold-breaker"
//     | "motor-drive"
//     | "multitype"
//     | "no-guard"
//     | "normalize"
//     | "poison-heal"
//     | "quick-feet"
//     | "reckless"
//     | "rivalry"
//     | "scrappy"
//     | "simple"
//     | "skill-link"
//     | "slow-start"
//     | "sniper"
//     | "snow-cloak"
//     | "snow-warning"
//     | "solar-power"
//     | "solid-rock"
//     | "stall"
//     | "steadfast"
//     | "storm-drain"
//     | "super-luck"
//     | "tangled-feet"
//     | "technician"
//     | "tinted-lens"
//     | "unaware"
//     | "unburden";

// export type PokemonAbilitiesMapped = PokemonMapped<PokemonAbilities>;
