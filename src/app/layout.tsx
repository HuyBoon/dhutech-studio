import { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "DHUTECH | Website Design & SEO Solutions",
    description:
        "DHUTECH provides professional website design, landing page creation, and SEO optimization services to enhance your online presence.",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "DHUTECH",
        description:
            "Innovative solutions for website design, landing pages, and SEO optimization.",
        url: "https://dhutech.com",
        siteName: "DHUTECH",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "DHUTECH Solutions",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
};

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={params.locale}>
            <body>{children}</body>
        </html>
    );
}
