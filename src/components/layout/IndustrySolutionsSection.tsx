"use client";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const IndustrySolutionsSection = () => {
    const t = useTranslations("IndustrySolutions");

    // Industries as tabs
    const industries = [
        { key: "travel", icon: "🌍", alt: "Travel icon" },
        { key: "education", icon: "🎓", alt: "Education icon" },
        { key: "beauty", icon: "💄", alt: "Beauty icon" },
        { key: "realEstate", icon: "🏠", alt: "Real estate icon" },
        { key: "ecommerce", icon: "🛒", alt: "E-commerce icon" },
        { key: "health", icon: "💊", alt: "Health icon" },
        { key: "construction", icon: "🏗️", alt: "Construction icon" },
        { key: "fitness", icon: "🏋️", alt: "Fitness icon" },
    ];

    // State for active tab (using useState with client-side rendering)
    const [activeTab, setActiveTab] = React.useState(industries[0].key);

    // Animation for tabs and content
    const tabVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96] as const,
            },
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    // Four template layouts
    const templates = {
        template1: {
            title: t("templates.template1.title"),
            description: t("templates.template1.description"),
            image: "/hometemplates/travel.jpg",
        },
        template2: {
            title: t("templates.template2.title"),
            description: t("templates.template2.description"),
            image: "/hometemplates/travel2.jpg",
        },
        template3: {
            title: t("templates.template3.title"),
            description: t("templates.template3.description"),
            image: "/hometemplates/travel3.jpg",
        },
        template4: {
            title: t("templates.template4.title"),
            description: t("templates.template4.description"),
            image: "/hometemplates/travel4.jpg",
        },
    };

    const getTemplatesForIndustry = (key: string) => {
        return Object.values(templates);
    };

    const activeTemplates = getTemplatesForIndustry(activeTab);

    return (
        <section
            id="industries"
            className="py-12 md:py-16 lg:py-20"
            style={{ backgroundColor: "var(--background-color)" }}
            aria-label={t("title")}
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center"
                    style={{ color: "var(--primary-color1)" }}
                    itemProp="name"
                >
                    {t("title")}
                </h2>
                <p
                    className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-12 text-center"
                    style={{ color: "var(--primary-ground)" }}
                    itemProp="description"
                >
                    {t("subtitle")}
                </p>

                <motion.div
                    className="flex flex-wrap justify-center gap-2 mb-8"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {industries.map((industry) => (
                        <button
                            key={industry.key}
                            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                                activeTab === industry.key
                                    ? "bg-secondary text-white"
                                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                            onClick={() => setActiveTab(industry.key)}
                            aria-label={t(`industries.${industry.key}.title`)}
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                        >
                            <span
                                className="text-xl mr-2"
                                style={{
                                    color:
                                        activeTab === industry.key
                                            ? "white"
                                            : "inherit",
                                }}
                                role="img"
                                aria-label={industry.alt}
                            >
                                {industry.icon}
                            </span>
                            {t(`industries.${industry.key}.title`)}
                        </button>
                    ))}
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={contentVariants}
                        viewport={{ once: false, amount: 0.3 }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {activeTemplates.map((template, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg"
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                <h3
                                    className="text-2xl font-semibold mb-4 text-center"
                                    style={{ color: "var(--primary-color1)" }}
                                    itemProp="name"
                                >
                                    {template.title}
                                </h3>
                                <p
                                    className="text-base mb-4 text-center"
                                    style={{ color: "var(--text-color)" }}
                                    itemProp="description"
                                >
                                    {template.description}
                                </p>
                                <div className="flex justify-center">
                                    <img
                                        src={template.image}
                                        alt={template.title}
                                        className="rounded-lg object-cover w-full max-w-xs"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

// Note: Add React import since useState is used
import React from "react";

export default IndustrySolutionsSection;
