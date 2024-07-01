import { cva, VariantProps } from "class-variance-authority";

const chipVariants = cva(
    [
        "text-sm border",
        "rounded-full",
        "px-2.5",
        "py-0.5",
        "min-w-14",
        "text-center",
        "hover:opacity-70",
        "transition-opacity",
    ],
    {
        variants: {
            intent: {
                primary: "bg-blue-500 border-blue-500 text-white",
                secondary: "bg-gray-500 border-gray-500 text-white",
                danger: "bg-red-500 border-red-500 text-white",
                warning: "bg-yellow-500 border-yellow-500 text-white",
                info: "bg-violet-500 border-violet-500 text-white",
                success: "bg-green-500 border-green-500 text-white",
                default: "bg-white border-black text-black",
                normal: "bg-gray-400 border-gray-400 text-white",
                fire: "bg-red-600 border-red-600 text-white",
                water: "bg-blue-600 border-blue-600 text-white",
                electric: "bg-yellow-400 border-yellow-400 text-black",
                grass: "bg-green-500 border-green-500 text-white",
                ice: "bg-blue-300 border-blue-300 text-black",
                fighting: "bg-orange-700 border-orange-700 text-white",
                poison: "bg-purple-500 border-purple-500 text-white",
                ground: "bg-yellow-700 border-yellow-700 text-white",
                flying: "bg-indigo-400 border-indigo-400 text-white",
                psychic: "bg-pink-500 border-pink-500 text-white",
                bug: "bg-green-700 border-green-700 text-white",
                rock: "bg-yellow-800 border-yellow-800 text-white",
                ghost: "bg-purple-700 border-purple-700 text-white",
                dragon: "bg-indigo-700 border-indigo-700 text-white",
                dark: "bg-gray-800 border-gray-800 text-white",
                steel: "bg-gray-500 border-gray-500 text-white",
                fairy: "bg-pink-300 border-pink-300 text-black",
            },
        },
        defaultVariants: {
            intent: "default",
        },
    }
);

type ChipVariantsType = VariantProps<typeof chipVariants>;

type ChipProps = {
    label: string;
    intent?: string;
} & ChipVariantsType;

function TypesChip({ intent = "default", label }: ChipProps) {
    return <div className={chipVariants({ intent })}>{label}</div>;
}

export default TypesChip;
