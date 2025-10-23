"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const CallToActionSection = () => {
    const t = useTranslations("CallToAction");

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
        },
    };

    return (
        <section
            id="call-to-action"
            className=""
            aria-label={t("title")}
            itemScope
            itemType="https://schema.org/ContactPoint"
        >
            <div
                className="w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 text-center rounded-4xl"
                style={{
                    background:
                        "linear-gradient(135deg, var(--primary-color1), var(--primary-color3))",
                }}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white"
                        itemProp="contactType"
                    >
                        {t("title")}
                    </h2>
                    <p
                        className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 text-white"
                        itemProp="description"
                    >
                        {t("subtitle")}
                    </p>
                    <a
                        href={t("buttonLink")}
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-primary-color1 font-semibold hover:bg-primary-btn transition-colors duration-300"
                        itemProp="url"
                    >
                        <FaRocket className="mr-2" />
                        {t("buttonText")}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToActionSection;
