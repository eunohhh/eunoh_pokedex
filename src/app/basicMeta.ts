export const basicMeta = {
    title: "Pokedex",
    description: "Eun's Pokedex",
    generator: "Next.js",
    applicationName: "Eun's Pokedex",
    keywords: ["pokedex", "pokemon", "RedVersion"],
    authors: [{ name: "Eun Oh", url: "https://eunoh-pokedex.vercel.app" }],
    creator: "Eun Oh",
    publisher: "Eun Oh",
    alternates: {
        canonical: "/",
        languages: {
            "ko-KR": "/",
        },
    },
    openGraph: {
        title: "Pokedex",
        description: "Eun's Pokedex",
        url: "https://eunoh-pokedex.vercel.app",
        siteName: "Pokedex",
        images: [
            {
                url: "/thumbnail.webp",
                width: 800,
                height: 600,
            },
        ],
        locale: "ko_KR",
        type: "website",
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
        },
    },
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "/favicon.png",
        },
    },
};
