import Image from "next/image";

function BasicLoader() {
    return (
        <div className="relative h-dvh w-[1024px]">
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
