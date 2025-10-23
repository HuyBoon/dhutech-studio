"use client";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const CriteriaSection = () => {
    const t = useTranslations("Criteria");

    const criteria = [
        {
            key: "quality",
            label: "Quality",
            content: t("criteria.quality.content"),
        },
        {
            key: "innovation",
            label: "Innovation",
            content: t("criteria.innovation.content"),
        },
        {
            key: "support",
            label: "Support",
            content: t("criteria.support.content"),
        },
        {
            key: "affordability",
            label: "Affordability",
            content: t("criteria.affordability.content"),
        },
        {
            key: "reliability",
            label: "Reliability",
            content: "We ensure consistent performance and trust.",
        },
        {
            key: "scalability",
            label: "Scalability",
            content: "Our system grows with your business.",
        },
    ];

    const [activeCriterion, setActiveCriterion] = React.useState(
        criteria[0].key
    );

    const itemVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
        active: { scale: 1.05, transition: { duration: 0.3 } },
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const containerSize = 400;
    const radius = 140;
    const center = containerSize / 2;

    return (
        <section
            id="criteria"
            className="py-12 md:py-20 flex flex-col items-center"
        >
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
                {t("title")}
            </h2>

            <div className="hidden lg:flex justify-between w-full max-w-6xl relative">
                <div className="flex flex-col justify-between w-1/3 pr-8 relative z-10">
                    {criteria.slice(0, 3).map((criterion) => (
                        <motion.button
                            key={criterion.key}
                            className={`text-right px-3 py-2 rounded-md font-medium cursor-pointer transition-colors ${
                                activeCriterion === criterion.key
                                    ? "text-[var(--primary-color1)]"
                                    : "text-[var(--text-color)] hover:text-[var(--primary-color1)]"
                            }`}
                            onClick={() => setActiveCriterion(criterion.key)}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.05 }}
                        >
                            {criterion.label}
                        </motion.button>
                    ))}
                </div>

                {/* Center - circle with animated content */}
                <div
                    className="relative flex items-center justify-center"
                    style={{
                        width: containerSize,
                        height: containerSize,
                    }}
                >
                    <div className="absolute inset-0 rounded-full border-4 border-secondary"></div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCriterion}
                            className="text-center max-w-[70%]"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <h3 className="text-xl font-semibold mb-3">
                                {
                                    criteria.find(
                                        (c) => c.key === activeCriterion
                                    )?.label
                                }
                            </h3>
                            <p
                                className="text-base"
                                style={{ color: "var(--text-color)" }}
                            >
                                {
                                    criteria.find(
                                        (c) => c.key === activeCriterion
                                    )?.content
                                }
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex flex-col justify-between w-1/3 pl-8 relative z-10">
                    {criteria.slice(3, 6).map((criterion) => (
                        <motion.button
                            key={criterion.key}
                            className={`text-left px-3 py-2 rounded-md font-medium cursor-pointer transition-colors ${
                                activeCriterion === criterion.key
                                    ? "text-[var(--primary-color1)] "
                                    : "text-[var(--text-color)] hover:text-[var(--primary-color1)]"
                            }`}
                            onClick={() => setActiveCriterion(criterion.key)}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.05 }}
                        >
                            {criterion.label}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col gap-6 w-full px-6 mt-8">
                {criteria.map((criterion) => (
                    <motion.div
                        key={criterion.key}
                        className={`p-4 rounded-lg border ${
                            activeCriterion === criterion.key
                                ? "bg-[var(--primary-ground)] border-[var(--primary-color1)]"
                                : "bg-white border-gray-200"
                        } cursor-pointer transition`}
                        onClick={() => setActiveCriterion(criterion.key)}
                    >
                        <h4
                            className="text-lg font-semibold mb-2"
                            style={{
                                color:
                                    activeCriterion === criterion.key
                                        ? "var(--primary-color1)"
                                        : "var(--text-color)",
                            }}
                        >
                            {criterion.label}
                        </h4>
                        <p
                            className="text-sm"
                            style={{ color: "var(--text-color)" }}
                        >
                            {criterion.content}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CriteriaSection;
