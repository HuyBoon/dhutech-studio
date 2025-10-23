"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const PricingSection = () => {
    const t = useTranslations("Pricing");

    const plans = [
        {
            name: "basic",
            price: "$99",
            features: ["1 Landing Page", "Basic SEO", "Support 24/7"],
        },
        {
            name: "pro",
            price: "$199",
            features: [
                "5 Landing Pages",
                "Advanced SEO",
                "Analytics",
                "Support 24/7",
            ],
        },
        {
            name: "enterprise",
            price: "$499",
            features: [
                "Unlimited Pages",
                "Custom Design",
                "Premium Support",
                "Analytics",
            ],
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
            id="pricing"
            className="py-12 md:py-16 lg:py-20"
            style={{ backgroundColor: "var(--primary-ground)" }}
            aria-label={t("title")}
            itemScope
            itemType="https://schema.org/OfferCatalog"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center"
                    style={{ color: "var(--primary-color1)" }}
                    itemProp="name"
                >
                    {t("title")}
                </h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            style={{
                                backgroundColor: "var(--background-color)",
                            }}
                            
                            itemProp="itemOffered"
                            itemScope
                            itemType="https://schema.org/Offer"
                        >
                            <h3
                                className="text-xl sm:text-2xl font-semibold mb-4 text-center"
                                style={{ color: "var(--primary-color2)" }}
                                itemProp="name"
                            >
                                {t(`plans.${plan.name}.name`)}
                            </h3>
                            <p
                                className="text-lg sm:text-xl mb-4 text-center"
                                style={{ color: "var(--primary-btn)" }}
                                itemProp="price"
                            >
                                {plan.price}
                            </p>
                            <ul className="text-sm sm:text-base text-center space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        style={{ color: "var(--text-color)" }}
                                        itemProp="description"
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <meta itemProp="priceCurrency" content="USD" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;
