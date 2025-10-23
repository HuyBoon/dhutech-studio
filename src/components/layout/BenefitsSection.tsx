"use client";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

const BenefitsSection = () => {
    const t = useTranslations("BenefitsSection");
    const locale = useLocale();

    const benefits = [
        {
            key: "reachCustomers",
            icon: "shopping-cart",
            alt: "Shopping cart icon",
        },
        { key: "improveAds", icon: "star", alt: "Star icon" },
        { key: "buildReputation", icon: "handshake", alt: "Handshake icon" },
        { key: "support24_7", icon: "chat", alt: "Chat icon" },
    ];

    // Animation for title and description (fade in with slight slide)
    const titleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as const,
            },
        },
    };

    // Animation for benefits container (staggered reveal)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3, // Delay after title animation
            },
        },
    };

    // Animation for individual benefit items (scale and fade)
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96] as const,
            },
        },
    };

    return (
        <section
            id="benefits"
            className="py-12 md:py-16 lg:py-20 xl:py-32 bg-center bg-cover"
            style={{ backgroundImage: "url('/background3.svg')" }}
            aria-label={t("title")}
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
                <motion.div
                    className="w-full md:w-1/3 relative"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    {/* Oval Background */}
                    <div
                        className="absolute inset-0 rounded-full bg-primary-ground opacity-20 blur-md"
                        style={{
                            filter: "blur(10px)",
                            transform: "scale(1.2)",
                            zIndex: 0,
                        }}
                    />
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-left">
                            <h2
                                className="text-primary text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10"
                                itemProp="name"
                            >
                                {t("title")}
                            </h2>
                            <p
                                className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-12"
                                style={{ color: "var(--primary-ground)" }}
                                itemProp="description"
                            >
                                {t("subtitle")}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Benefits Grid (2/3) */}
                <motion.div
                    className="w-full md:w-2/3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="min-h-[250px] bg-primary-3  p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                variants={itemVariants}
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                <div className="flex justify-center mb-3 sm:mb-4">
                                    <span
                                        className={`text-3xl sm:text-4xl ${
                                            benefit.icon === "shopping-cart"
                                                ? "text-primary-color1"
                                                : benefit.icon === "star"
                                                ? "text-primary-btn"
                                                : benefit.icon === "handshake"
                                                ? "text-primary-color2"
                                                : "text-primary-color3"
                                        }`}
                                        style={{
                                            color: `var(--${
                                                benefit.icon === "shopping-cart"
                                                    ? "primary-color1"
                                                    : benefit.icon === "star"
                                                    ? "primary-btn"
                                                    : benefit.icon ===
                                                      "handshake"
                                                    ? "primary-color2"
                                                    : "primary-color3"
                                            })`,
                                        }}
                                        role="img"
                                        aria-label={benefit.alt}
                                    >
                                        {benefit.icon === "shopping-cart" &&
                                            "🛒"}
                                        {benefit.icon === "star" && "⭐"}
                                        {benefit.icon === "handshake" && "🤝"}
                                        {benefit.icon === "chat" && "💬"}
                                    </span>
                                </div>
                                <h3
                                    className="text-lg sm:text-xl font-semibold mb-2 text-center"
                                    style={{ color: "var(--primary-color1)" }}
                                    itemProp="name"
                                >
                                    {t(`benefits.${benefit.key}.title`)}
                                </h3>
                                <p
                                    className="text-sm sm:text-base line-clamp-2 text-center"
                                    style={{ color: "var(--text-color)" }}
                                    itemProp="description"
                                >
                                    {t(`benefits.${benefit.key}.description`)}
                                </p>
                                <meta
                                    itemProp="position"
                                    content={String(index + 1)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BenefitsSection;
