"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React from "react";
import {
    FaUsers,
    FaFileContract,
    FaPaintBrush,
    FaCode,
    FaLaptopCode,
    FaCheckCircle,
} from "react-icons/fa";
import { once } from "events";

const WebsiteDesignProcess = () => {
    const t = useTranslations("WebsiteDesignProcess");

    const steps = [
        {
            number: 1,
            title: "Tìm hiểu nhu cầu khách hàng",
            description: t("steps.understand.content"),
            subtext: "Thấu hiểu khách hàng",
            icon: FaUsers,
            aos: "fade-up-right",
            delay: 399,
        },
        {
            number: 2,
            title: "Ký hợp đồng",
            description: t("steps.contract.content"),
            subtext: "Ký kết và hợp tác",
            icon: FaFileContract,
            aos: "fade-down-right",
            delay: 499,
        },
        {
            number: 3,
            title: "Thiết kế giao diện",
            description: t("steps.design.content"),
            subtext: "Thiết kế",
            icon: FaPaintBrush,
            aos: "fade-up-right",
            delay: 599,
        },
        {
            number: 4,
            title: "Lập trình",
            description: t("steps.development.content"),
            subtext: "Lập trình",
            icon: FaCode,
            aos: "fade-down-right",
            delay: 699,
        },
        {
            number: 5,
            title: "Demo và chỉnh sửa",
            description: t("steps.demo.content"),
            subtext: "Thử nghiệm và chỉnh sửa",
            icon: FaLaptopCode,
            aos: "fade-up-right",
            delay: 799,
        },
        {
            number: 6,
            title: "Bàn giao website",
            description: t("steps.delivery.content"),
            subtext: "",
            icon: FaCheckCircle,
            aos: "fade-down-right",
            delay: 899,
        },
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1fc1c1] mb-4">
                        {t("title")}
                    </h2>
                    <p className="text-gray-600 text-[14px] md:text-[16px] max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-14 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className={`text-center ${
                                index % 2 === 0 ? "" : "md:mt-[125px]"
                            }`}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -50 : 50,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1.6,
                                delay: step.delay / 1000,
                            }}
                            viewport={{ once: false }}
                            data-aos={step.aos}
                            data-aos-duration="1600"
                            data-aos-delay={step.delay}
                        >
                            <div className="relative w-[205px] h-[205px] mx-auto">
                                <label className="absolute left-0 top-0 w-[60px] h-[60px] bg-[#1fc1c1] rounded-full flex justify-center items-center font-bold text-[32px] text-white shadow-3xl">
                                    {step.number}
                                </label>
                                <div className="w-full h-full border border-solid border-[#1fc1c1] bg-white rounded-full mx-auto overflow-hidden shadow-lg flex justify-center items-center">
                                    <step.icon className="text-[#1fc1c1] w-[80px] h-[80px]" />
                                </div>
                            </div>
                            <label className="block font-bold text-[16px] my-2 capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#1fc1c1] to-[#45d7d2]">
                                {step.title}
                            </label>
                            <p className="text-black text-[14px] leading-[1.4]">
                                {step.description}
                            </p>
                            {step.subtext && (
                                <p className="text-[12px] mt-1 italic text-gray-600">
                                    {step.subtext}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
                <div
                    className="w-full h-[136px] absolute left-0 top-1/2 -translate-y-1/2 text-center hidden lg:block mt-[-68px] aos-init aos-animate"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="1000"
                ></div>
            </div>
        </section>
    );
};

export default WebsiteDesignProcess;
