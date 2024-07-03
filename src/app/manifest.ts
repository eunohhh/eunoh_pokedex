import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Pokedex",
        short_name: "Eun's Pokedex",
        description: "Eun's Pokedex",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/favicon.png",
                sizes: "any",
                type: "image/png",
            },
        ],
    };
}
