"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
        },
    },
};

const titleVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96] as const,
        },
    },
    hover: {
        x: 10,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96] as const,
        },
    },
};

const descVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96] as const,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96] as const,
        },
    },
    hover: {
        scale: 1.02,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96] as const,
        },
    },
};

const services = [
    {
        title: "Lập kế hoạch marketing online tổng thể",
        description:
            "Lập kế hoạch chi tiết để tối ưu hóa chiến dịch marketing online.",
        image: "/marketing/plans.png",
    },
    {
        title: "Thiết kế website theo yêu cầu",
        description: "Tùy chỉnh website chuyên nghiệp theo nhu cầu khách hàng.",
        image: "/marketing/design.png",
    },
    {
        title: "Social Media",
        description:
            "Quản lý và phát triển nội dung trên các nền tảng mạng xã hội.",
        image: "/marketing/socials.png",
    },
    {
        title: "Chạy quảng cáo",
        description:
            "Triển khai và tối ưu hóa các chiến dịch quảng cáo hiệu quả.",
        image: "/marketing/ads.png",
    },
];

const Marketing = () => {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
        if (typeof window !== "undefined" && window.innerWidth <= 768) {
            setTimeout(() => {
                setActiveIndex(null);
            }, 1000);
        }
    };
    const handleMouseLeave = () => {
        if (typeof window !== "undefined" && window.innerWidth > 768) {
            setActiveIndex(null);
        }
    };

    const mainPoints = [
        "Tối ưu hóa hiệu quả quảng cáo",
        "Thiết kế giao diện chuyên nghiệp",
        "Quản lý nội dung mạng xã hội",
        "Phân tích và báo cáo dữ liệu",
    ];

    return (
        <section className="container relative py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 mx-auto">
            {/* Background Image */}
            <div className="absolute top-0 left-[-10%] w-[300px] sm:w-[400px] md:w-[500px] z-0 opacity-50 md:opacity-100">
                <Image
                    src="/starbackground.png"
                    alt="DHU-TECH Background"
                    width={500}
                    height={500}
                    className="object-contain"
                />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                {/* Left Column - Text */}
                <motion.div
                    className="w-full md:col-span-5 flex flex-col"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <motion.h1
                        className="text-xl sm:text-2xl md:text-3xl font-extrabold text-secondary mb-3 sm:mb-4"
                        variants={titleVariants}
                        whileHover="hover"
                    >
                        AI x MARKETING
                    </motion.h1>
                    <motion.p
                        className="text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-6"
                        variants={descVariants}
                    >
                        Digital Marketing Chuyên Nghiệp
                    </motion.p>
                    <ul className="text-white/80 text-sm sm:text-base space-y-2 pl-0">
                        {mainPoints.map((point, index) => (
                            <motion.li
                                key={index}
                                className="flex items-center"
                                variants={itemVariants}
                            >
                                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                                {point}
                            </motion.li>
                        ))}
                    </ul>
                    <motion.button
                        className="mt-6 px-4 py-2 sm:px-6 sm:py-3 max-w-[250px] bg-secondary text-[#130f32] font-semibold rounded-lg shadow-lg hover:bg-[#d9b013] hover:scale-[1.02] transition-all"
                        variants={itemVariants}
                        onClick={() => router.push("/ai-marketing")}
                    >
                        Khám phá ngay
                    </motion.button>
                </motion.div>

                {/* Right Column - Service Cards */}
                <motion.div
                    className="w-full md:col-span-7"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                variants={cardVariants}
                                whileHover="hover"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleMouseEnter(index)}
                            >
                                <div className="relative w-full aspect-[4/3]">
                                    <div
                                        className={`absolute inset-0 pointer-events-none z-10 ${
                                            activeIndex === index
                                                ? "after:animate-[shineEffect_1s_ease-out_forwards]"
                                                : ""
                                        } after:absolute after:content-[''] after:left-1/2 after:top-1/2 after:w-[200%] after:h-0 after:translate-x-[-50%] after:translate-y-[-50%] after:rotate-[-45deg] after:bg-white/30 after:z-10`}
                                    />
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className={`object-cover transition-transform duration-500 ease-out ${
                                            activeIndex === index
                                                ? "scale-105"
                                                : ""
                                        }`}
                                        sizes="(max-width: 768px) 50vw, 400px"
                                    />
                                </div>
                                <div className="p-3 sm:p-4">
                                    <motion.h3
                                        className="text-base sm:text-lg font-semibold text-[#130f32] mb-1 sm:mb-2"
                                        variants={titleVariants}
                                        whileHover="hover"
                                    >
                                        {service.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-gray-600 text-sm sm:text-base"
                                        variants={descVariants}
                                    >
                                        {service.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Marketing;
