import { cva, VariantProps } from "class-variance-authority";

const chipVariants = cva(
    [
        "text-sm border",
        "rounded-full",
        "px-2.5",
        "py-0.5",
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
                airLock: "bg-blue-100 border-blue-100 text-blue-900",
                arenaTrap: "bg-brown-200 border-brown-200 text-brown-900",
                battleArmor: "bg-gray-300 border-gray-300 text-gray-900",
                blaze: "bg-red-500 border-red-500 text-red-900",
                cacophony: "bg-purple-200 border-purple-200 text-purple-900",
                chlorophyll: "bg-green-300 border-green-300 text-green-900",
                clearBody: "bg-blue-300 border-blue-300 text-blue-900",
                cloudNine: "bg-blue-200 border-blue-200 text-blue-900",
                colorChange: "bg-pink-200 border-pink-200 text-pink-900",
                compoundEyes: "bg-yellow-300 border-yellow-300 text-yellow-900",
                cuteCharm: "bg-pink-300 border-pink-300 text-pink-900",
                damp: "bg-blue-400 border-blue-400 text-blue-900",
                drizzle: "bg-blue-500 border-blue-500 text-blue-900",
                drought: "bg-orange-500 border-orange-500 text-orange-900",
                earlyBird: "bg-yellow-400 border-yellow-400 text-yellow-900",
                effectSpore: "bg-green-400 border-green-400 text-green-900",
                flameBody: "bg-red-300 border-red-300 text-red-900",
                flashFire: "bg-red-400 border-red-400 text-red-900",
                forecast: "bg-blue-200 border-blue-200 text-blue-900",
                guts: "bg-red-600 border-red-600 text-red-900",
                hugePower: "bg-yellow-500 border-yellow-500 text-yellow-900",
                hustle: "bg-red-700 border-red-700 text-red-900",
                hyperCutter: "bg-green-500 border-green-500 text-green-900",
                illuminate: "bg-yellow-600 border-yellow-600 text-yellow-900",
                immunity: "bg-green-600 border-green-600 text-green-900",
                innerFocus: "bg-blue-600 border-blue-600 text-blue-900",
                insomnia: "bg-purple-500 border-purple-500 text-purple-900",
                intimidate: "bg-red-800 border-red-800 text-red-900",
                keenEye: "bg-blue-700 border-blue-700 text-blue-900",
                levitate: "bg-purple-600 border-purple-600 text-purple-900",
                lightningRod: "bg-yellow-700 border-yellow-700 text-yellow-900",
                limber: "bg-blue-800 border-blue-800 text-blue-900",
                liquidOoze: "bg-green-700 border-green-700 text-green-900",
                magmaArmor: "bg-red-900 border-red-900 text-red-900",
                magnetPull: "bg-gray-700 border-gray-700 text-gray-900",
                marvelScale: "bg-blue-900 border-blue-900 text-blue-900",
                minus: "bg-gray-800 border-gray-800 text-gray-900",
                naturalCure: "bg-green-800 border-green-800 text-green-900",
                oblivious: "bg-gray-900 border-gray-900 text-gray-900",
                overgrow: "bg-green-900 border-green-900 text-green-900",
                ownTempo: "bg-blue-900 border-blue-900 text-blue-900",
                pickup: "bg-gray-900 border-gray-900 text-gray-900",
                plus: "bg-yellow-800 border-yellow-800 text-yellow-900",
                poisonPoint: "bg-green-900 border-green-900 text-green-900",
                pressure: "bg-gray-900 border-gray-900 text-gray-900",
                purePower: "bg-blue-900 border-blue-900 text-blue-900",
                rainDish: "bg-blue-900 border-blue-900 text-blue-900",
                rockHead: "bg-brown-900 border-brown-900 text-brown-900",
                roughSkin: "bg-blue-900 border-blue-900 text-blue-900",
                runAway: "bg-blue-900 border-blue-900 text-blue-900",
                sandStream: "bg-yellow-900 border-yellow-900 text-yellow-900",
                sandVeil: "bg-yellow-900 border-yellow-900 text-yellow-900",
                sereneGrace: "bg-blue-900 border-blue-900 text-blue-900",
                shadowTag: "bg-gray-900 border-gray-900 text-gray-900",
                shedSkin: "bg-gray-900 border-gray-900 text-gray-900",
                shellArmor: "bg-blue-900 border-blue-900 text-blue-900",
                shieldDust: "bg-gray-900 border-gray-900 text-gray-900",
                soundproof: "bg-gray-900 border-gray-900 text-gray-900",
                speedBoost: "bg-blue-900 border-blue-900 text-blue-900",
                static: "bg-blue-900 border-blue-900 text-blue-900",
                stench: "bg-gray-900 border-gray-900 text-gray-900",
                stickyHold: "bg-blue-900 border-blue-900 text-blue-900",
                sturdy: "bg-blue-900 border-blue-900 text-blue-900",
                suctionCups: "bg-gray-900 border-gray-900 text-gray-900",
                swarm: "bg-yellow-900 border-yellow-900 text-yellow-900",
                swiftSwim: "bg-blue-900 border-blue-900 text-blue-900",
                synchronize: "bg-blue-900 border-blue-900 text-blue-900",
                thickFat: "bg-blue-900 border-blue-900 text-blue-900",
                torrent: "bg-blue-900 border-blue-900 text-blue-900",
                trace: "bg-blue-900 border-blue-900 text-blue-900",
                truant: "bg-blue-900 border-blue-900 text-blue-900",
                vitalSpirit: "bg-blue-900 border-blue-900 text-blue-900",
                voltAbsorb: "bg-blue-900 border-blue-900 text-blue-900",
                waterAbsorb: "bg-blue-900 border-blue-900 text-blue-900",
                waterVeil: "bg-blue-900 border-blue-900 text-blue-900",
                whiteSmoke: "bg-gray-900 border-gray-900 text-gray-900",
                wonderGuard: "bg-blue-900 border-blue-900 text-blue-900",
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

function AbilitiesChip({ intent = "default", label }: ChipProps) {
    return <div className={chipVariants({ intent })}>{label}</div>;
}

export default AbilitiesChip;
