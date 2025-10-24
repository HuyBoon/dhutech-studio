"use client";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function MainMenu() {
    const t = useTranslations("header.menu");
    const router = useRouter();
    const [visibleSubMenu, setVisibleSubMenu] = useState<string | null>(null);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(
        null
    );

    const handleNavigate = (path: string) => router.push(path);

    const handleMouseEnter = (name: string) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setVisibleSubMenu(name);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => setVisibleSubMenu(null), 200);
        setHoverTimeout(timeout);
    };

    const menu = [
        { name: t("home"), path: "/" },
        {
            name: t("webDesign"),
            path: "/thiet-ke-website",
            subMenu: [
                {
                    name: t("webDesignItems.travel"),
                    path: "/thiet-ke-website/du-lich",
                },
                {
                    name: t("webDesignItems.ecommerce"),
                    path: "/thiet-ke-website/ban-hang",
                },
                {
                    name: t("webDesignItems.business"),
                    path: "/thiet-ke-website/doanh-nghiep",
                },
                {
                    name: t("webDesignItems.realEstate"),
                    path: "/thiet-ke-website/bat-dong-san",
                },
                {
                    name: t("webDesignItems.restaurant"),
                    path: "/thiet-ke-website/nha-hang-khach-san",
                },
                {
                    name: t("webDesignItems.school"),
                    path: "/thiet-ke-website/truong-hoc",
                },
                {
                    name: t("webDesignItems.news"),
                    path: "/thiet-ke-website/blog-tin-tuc",
                },
                {
                    name: t("webDesignItems.custom"),
                    path: "/thiet-ke-website/theo-yeu-cau",
                },
            ],
        },
        { name: t("templates"), path: "/kho-giao-dien" },
        { name: t("blog"), path: "/blog" },
        { name: t("about"), path: "/gioi-thieu" },
    ];

    return (
        <nav className="hidden md:flex">
            <ul className="flex space-x-8">
                {menu.map((item) => (
                    <li
                        key={item.name}
                        className="relative group"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            className={`hover:text-primary-text  text-lg uppercase flex items-center gap-1 transition-colors duration-200 ${
                                item.subMenu
                                    ? "cursor-default"
                                    : "cursor-pointer"
                            }`}
                            onClick={() => handleNavigate(item.path)}
                        >
                            <span>{item.name}</span>
                            {item.subMenu && (
                                <ChevronDown
                                    className={`transition-transform duration-200 ${
                                        visibleSubMenu === item.name
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                    size={16}
                                />
                            )}
                        </button>

                        {item.subMenu && visibleSubMenu === item.name && (
                            <ul className="absolute left-0 mt-2 w-80 bg-white text-black shadow-xl rounded-lg overflow-hidden border border-gray-100 z-50">
                                {item.subMenu.map((subItem) => (
                                    <li key={subItem.name}>
                                        <button
                                            className="block w-full text-left px-4 py-2 text-md hover:text-secondary  transition-colors"
                                            onClick={() =>
                                                handleNavigate(subItem.path)
                                            }
                                        >
                                            {subItem.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
