"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyChooseUsSection = () => {
    const t = useTranslations("WhyChooseUs");

    const reasons = [
        {
            key: "expertise",
            icon: "💻",
            alt: "Expertise icon",
            title: "Expertise You Can Trust",
            description:
                "Years of experience delivering top-tier tech solutions tailored to your needs.",
        },
        {
            key: "innovation",
            icon: "🔧",
            alt: "Innovation icon",
            title: "Cutting-Edge Innovation",
            description:
                "Leverage the latest technologies to stay ahead in a competitive market.",
        },
        {
            key: "support",
            icon: "🤝",
            alt: "Support icon",
            title: "24/7 Dedicated Support",
            description:
                "Round-the-clock assistance to ensure your success at every step.",
        },
        {
            key: "expertise",
            icon: "💻",
            alt: "Expertise icon",
            title: "Expertise You Can Trust",
            description:
                "Years of experience delivering top-tier tech solutions tailored to your needs.",
        },
    ];

    const imageVariants = {
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

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
            id="why-choose-us"
            className="py-12 md:py-16 lg:py-20 xl:py-32 bg-center bg-cover"
            style={{ backgroundImage: "url('/background4.svg')" }}
            aria-label={t("title")}
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center md:flex-row gap-8">
                    <motion.div
                        className="w-full md:w-1/2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="mb-6 sm:mb-8 lg:mb-10">
                            <h2
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                                style={{ color: "var(--primary-color1)" }}
                                itemProp="name"
                            >
                                {t("title")}
                            </h2>
                            <p
                                className="text-base sm:text-lg lg:text-xl"
                                style={{ color: "var(--primary-ground)" }}
                                itemProp="description"
                            >
                                {t("subtitle")}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                    variants={itemVariants}
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="https://schema.org/ListItem"
                                >
                                    <div className="flex justify-center mb-4">
                                        <span
                                            className="text-4xl sm:text-5xl"
                                            style={{
                                                color: "var(--primary-color1)",
                                            }}
                                            role="img"
                                            aria-label={reason.alt}
                                        >
                                            {reason.icon}
                                        </span>
                                    </div>
                                    <h3
                                        className="text-lg sm:text-xl font-semibold mb-2 text-center"
                                        style={{
                                            color: "var(--primary-color1)",
                                        }}
                                        itemProp="name"
                                    >
                                        {t(`reasons.${reason.key}.title`)}
                                    </h3>
                                    <p
                                        className="text-sm sm:text-base text-center"
                                        style={{ color: "var(--text-color)" }}
                                        itemProp="description"
                                    >
                                        {t(`reasons.${reason.key}.description`)}
                                    </p>
                                    <meta
                                        itemProp="position"
                                        content={String(index + 1)}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/whychooseus1.png"
                                alt={t("title")}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
