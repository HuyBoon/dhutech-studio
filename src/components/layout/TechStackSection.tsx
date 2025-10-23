"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const TechStackSection = () => {
    const t = useTranslations("TechStack");

    const stacks = [
        {
            name: "HTML",
            icon: "🌐",
            description: "Basic structure of web pages.",
        },
        { name: "CSS", icon: "🎨", description: "Styling and layout design." },
        {
            name: "JavaScript",
            icon: "💻",
            description: "Interactive web features.",
        },
        {
            name: "Next.js",
            icon: "🚀",
            description: "Server-side rendering framework.",
        },
        {
            name: "React",
            icon: "⚛️",
            description: "Component-based UI library.",
        },
        {
            name: "Angular",
            icon: "📐",
            description: "Full-featured framework.",
        },
        {
            name: "Laravel",
            icon: "🐘",
            description: "PHP framework for backend.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
        },
    };

    return (
        <section
            id="tech-stack"
            className="py-12 md:py-16 lg:py-20"
            aria-label={t("title")}
            itemScope
            itemType="https://schema.org/CollectionPage"
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
                    style={{ color: "var(--primary-color3)" }}
                    itemProp="description"
                >
                    {t("subtitle")}
                </p>
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {stacks.map((stack, index) => (
                        <motion.div
                            key={index}
                            className="p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            style={{
                                backgroundColor: "var(--background-color)",
                            }}
                            itemProp="hasPart"
                            itemScope
                            itemType="https://schema.org/SoftwareApplication"
                        >
                            <div className="flex justify-center mb-3 sm:mb-4">
                                <span
                                    className="text-3xl sm:text-4xl"
                                    style={{ color: "var(--primary-btn)" }}
                                    role="img"
                                    aria-label={stack.name}
                                >
                                    {stack.icon}
                                </span>
                            </div>
                            <h3
                                className="text-lg sm:text-xl font-semibold mb-2 text-center"
                                style={{ color: "var(--primary-color2)" }}
                                itemProp="name"
                            >
                                {stack.name}
                            </h3>
                            <p
                                className="text-sm sm:text-base line-clamp-2 text-center"
                                style={{ color: "var(--text-color)" }}
                                itemProp="description"
                            >
                                {stack.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStackSection;
