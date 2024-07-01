import clsx from "clsx";
import Image from "next/image";

type BasicLoaderProps = {
    isSmall?: boolean;
};

function BasicLoader({ isSmall = false }: BasicLoaderProps) {
    return (
        <div className={clsx("relative w-[1024px]", isSmall ? "h-[50vh]" : "h-dvh")}>
            <div className="relative aspect-square w-[96px] h-[96px] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                <Image
                    className="object-cover"
                    src="/charmander.gif"
                    alt="charmander"
                    fill
                    sizes="(min-width: 640px) 96px, 96px"
                    priority
                />
            </div>
        </div>
    );
}

export default BasicLoader;
