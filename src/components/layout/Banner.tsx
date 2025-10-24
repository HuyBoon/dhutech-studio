"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const BannerSection = () => {
    const t = useTranslations("Banner");

    const textVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            },
        },
    };

    const imageVariants = {
        initial: { y: 0, x: 0 },
        animate: {
            y: [0, -8, 0, 10, 0],
            x: [-4, 4, -4, 4, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "loop" as const,
                ease: "easeInOut" as const,
            },
        },
    } satisfies import("framer-motion").Variants;

    return (
        <section
            id="banner"
            className="relative mt-8 max-w-[1400px]  mx-auto py-16 md:py-20 "
            aria-label={t("title")}
            itemScope
            itemType="https://schema.org/WebPageElement"
        >
            <div
                className="mx-auto px-6 bg-center bg-cover lg:px-12 min-h-[650px] flex flex-col md:flex-row items-center justify-between gap-10 rounded-4xl overflow-hidden "
                style={{ backgroundImage: "url('/banner-background2.svg')" }}
            >
                <motion.div
                    className="w-full md:w-1/3 text-center md:text-left"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
                        Create <br /> your own <br /> website
                    </h2> */}
                    <h2 className="min-h-[300px] text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
                        <TypeAnimation
                            sequence={[
                                "Create", // Gõ dòng 1
                                500, // Dừng 1s
                                "Create\nYour own", // Gõ thêm dòng 2 (xuống dòng bằng \n)
                                500,
                                "Create\nYour own\nWebsite", // Gõ thêm dòng 3
                                2000, // Dừng 2s
                            ]}
                            speed={30} // tốc độ gõ (ms / ký tự)
                            repeat={Infinity} // lặp vô hạn
                            style={{
                                whiteSpace: "pre-line", // giúp xuống dòng
                                display: "inline-block",
                            }}
                        />
                    </h2>

                    <p
                        className="text-base text-white sm:text-lg lg:text-xl xl:text-2xl mb-8 "
                        itemProp="description"
                    >
                        {t("subtitle")}
                    </p>

                    {/* CTA Button */}
                    <Link
                        href={t("buttonLink")}
                        className="inline-block px-8 py-4 rounded-xl 
                                   text-lg font-bold text-primary-text
                                   shadow-lg shadow-btn/40 
                                   bg-gradient-to-r from-btn/80 to-primary 
                                   hover:from-primary-color1 hover:to-primary-color3 
                                   transition-all duration-300 transform hover:scale-105"
                        itemProp="url"
                    >
                        {t("buttonText")}
                    </Link>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    className="w-full md:w-2/3 flex justify-center md:justify-end"
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                >
                    <Image
                        src="/hero3.png"
                        alt={t("imageAlt")}
                        width={700}
                        height={700}
                        priority
                        className="object-cover drop-shadow-2xl pointer-events-none"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default BannerSection;
