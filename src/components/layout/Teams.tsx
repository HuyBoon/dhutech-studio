"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96] as const,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
    },
    hover: {
        scale: 1.03,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    },
};

const Teams = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const teamMembers = [
        {
            name: "Trung Duẩn",
            role: "UI/UX Designer",
            image: "/teams/trungduna.jpg",
            social: "https://linkedin.com/in/trungduna",
        },
        {
            name: "Phú An",
            role: "Backend Engineer",
            image: "/teams/phuan.jpg",
            social: "https://linkedin.com/in/phuan",
        },
        {
            name: "HuyBoon",
            role: "Lead Developer",
            image: "/teams/huyboon.png",
            social: "https://linkedin.com/in/huyboon",
        },
        {
            name: "Văn Vin",
            role: "Project Manager",
            image: "/teams/vanvin.jpg",
            social: "https://linkedin.com/in/vanvin",
        },
        {
            name: "Phước Hưng",
            role: "Project Manager",
            image: "/teams/phuochung.jpg",
            social: "https://linkedin.com/in/phuochung",
        },
    ];

    return (
        <section className="container mx-auto py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 relative">
            <div className="absolute top-0 left-[-10%] w-[300px] sm:w-[400px] md:w-[500px] z-0 opacity-50 md:opacity-80">
                <Image
                    src="/starbackground.png"
                    alt="DHU-TECH Background"
                    width={500}
                    height={500}
                    className="object-contain"
                />
            </div>

            <motion.div
                className="relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-secondary/90 mb-6 sm:mb-8 md:mb-12"
                    variants={itemVariants}
                >
                    Đội Ngũ DHU-TECH
                </motion.h2>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    loop
                    navigation={{
                        nextEl: ".card2-next",
                        prevEl: ".card2-prev",
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                        1280: { slidesPerView: 4, spaceBetween: 24 },
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="pb-12"
                >
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={member.name + index}>
                            <motion.div
                                className="bg-white rounded-lg shadow-md overflow-hidden mx-auto max-w-[300px] flex flex-col"
                                variants={cardVariants}
                                whileHover="hover"
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="relative w-full aspect-[3/4]">
                                    <Image
                                        src={member.image}
                                        alt={`Ảnh chân dung ${member.name}, ${member.role}`}
                                        fill
                                        className="object-cover rounded-t-lg"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                                <div className="p-4 sm:p-5 text-center flex flex-col flex-grow">
                                    <h3 className="text-base sm:text-lg font-semibold text-secondary/90 mb-1 sm:mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 flex-grow">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        className="card2-prev bg-secondary/90 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-secondary/90 transition-all"
                        aria-label="Previous Team Member"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        className="card2-next bg-secondary/90 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-secondary/90 transition-all"
                        aria-label="Next Team Member"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Teams;
