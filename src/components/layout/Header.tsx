"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CircleUserRound } from "lucide-react";
import MainMenu from "./MainMenu";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [openLang, setOpenLang] = useState(false);
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const langRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: "vi", label: "VN", flag: "/vietnam.png" },
        { code: "en", label: "EN", flag: "/england.png" },
    ];

    const currentLang =
        languages.find((lang) => lang.code === locale) || languages[0];

    const handleChangeLang = (code: string) => {
        const segments = pathname.split("/");
        segments[1] = code;
        router.push(segments.join("/"));
        setOpenLang(false);
    };

    // Scroll background change
    useEffect(() => {
        const handleScroll = () => setNavbar(window.scrollY >= 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Click outside to close language menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                langRef.current &&
                !langRef.current.contains(event.target as Node)
            ) {
                setOpenLang(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header
            className={`fixed  top-0 left-0 w-full  z-50 transition-all duration-300 ${
                navbar
                    ? "h-20 bg-primary/95 text-white shadow-md"
                    : "h-24 bg-transparent text-black"
            }`}
        >
            <div className="max-w-[1400px] w-full mx-auto h-full  flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    {navbar ? (
                        <h1 className="lg:text-3xl text-xl font-bold tracking-wide text-white">
                            DHU-TECH
                        </h1>
                    ) : (
                        <Image
                            src="/dhutech-logo.png"
                            alt="Logo-DHUTECH"
                            width={96}
                            height={96}
                            priority
                        />
                    )}
                </Link>

                <MainMenu />

                <div className="flex items-center gap-3">
                    {/* Language Switcher */}
                    <div className="relative" ref={langRef}>
                        <button
                            onClick={() => setOpenLang(!openLang)}
                            className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors ${
                                navbar
                                    ? "hover:bg-white/10"
                                    : "hover:bg-black/5"
                            }`}
                        >
                            <Image
                                src={currentLang.flag}
                                alt={currentLang.label}
                                width={25}
                                height={25}
                                className="rounded-sm"
                            />
                        </button>

                        <AnimatePresence>
                            {openLang && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25 }}
                                    className="absolute right-0 mt-2 w-28 bg-white text-black shadow-lg rounded-md overflow-hidden border border-gray-100 z-50"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() =>
                                                handleChangeLang(lang.code)
                                            }
                                            className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100"
                                        >
                                            <Image
                                                src={lang.flag}
                                                alt={lang.label}
                                                width={20}
                                                height={14}
                                                className="rounded-sm"
                                            />
                                            {lang.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div
                        className={`h-5 w-px ${
                            navbar ? "bg-white/30" : "bg-black/20"
                        }`}
                    ></div>

                    <CircleUserRound
                        className={`cursor-pointer ${
                            navbar ? "text-white" : "text-black"
                        }`}
                        size={26}
                    />

                    <div
                        className={`h-5 w-px ${
                            navbar ? "bg-white/30" : "bg-black/20"
                        }`}
                    ></div>

                    <Link
                        href={`/${locale}/thiet-ke-web`}
                        className={`mx-auto text-primary-text text-lg lg:min-w-[150px] flex items-center justify-center px-4 py-2 font-semibold rounded-full shadow-lg shadow-btn/40 transition-all duration-300 transform hover:scale-105
        ${
            navbar
                ? " border-white bg-gradient-to-r from-btn/80 to-primary hover:bg-white hover:text-primary"
                : " border-black bg-gradient-to-r from-btn/80 to-primary hover:bg-black hover:text-white"
        }`}
                    >
                        Liên hệ
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
