import "@/app/globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "@/libs/getMessages";
import { routing } from "@/i18n/routing";
import { Playfair_Display, Lora } from "next/font/google";
import { Toaster } from "sonner";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import CallToActionSection from "@/components/layout/CallToActionSection";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
    subsets: ["latin", "vietnamese"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-playfair",
    display: "swap",
});

const lora = Lora({
    subsets: ["latin", "vietnamese"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-lora",
    display: "swap",
});

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
        url: "https://dhutech-studio.vercel.app/vi",
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

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    const localeRaw = routing.locales.includes(locale as any)
        ? (locale as "vi" | "en")
        : "vi";

    if (!routing.locales.includes(localeRaw)) {
        notFound();
    }

    let messages;
    try {
        messages = await getMessages(localeRaw);
    } catch (error) {
        console.error("Error loading messages:", error);
        notFound();
    }
    const fontClass = localeRaw === "vi" ? lora.variable : playfair.variable;

    return (
        <html lang={localeRaw} className="scroll-smooth">
            <body className={`${fontClass}`}>
                <NextIntlClientProvider locale={localeRaw} messages={messages}>
                    <main>{children}</main>
                    <div className="relative z-20 mb-[-5%]">
                        <CallToActionSection />
                    </div>
                    <div className="relative z-10 ">
                        <Footer />
                    </div>
                    <ScrollToTopButton />
                    <Toaster position="top-right" theme="light" richColors />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
