"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const AboutDhu = () => {
	const leftColRef = useRef(null);
	const rightColRef = useRef(null);
	const leftInView = useInView(leftColRef, { once: false });
	const rightInView = useInView(rightColRef, { once: false });

	// Animation variants for images and badge
	const fadeInMain = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
	};

	const fadeInTopLeft = {
		hidden: { opacity: 0, x: -5, y: -5 },
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: { duration: 1, delay: 0.2 },
		},
	};

	const fadeInBottomRight = {
		hidden: { opacity: 0, x: 5, y: 5 },
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: { duration: 1, delay: 0.4 },
		},
	};

	// Animation variants for right column
	const fadeInRightTitle = {
		hidden: { opacity: 0, x: 5 },
		visible: { opacity: 1, x: 0, transition: { duration: 1 } },
	};

	const fadeInRightText = {
		hidden: { opacity: 0, y: 5 },
		visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
	};

	return (
		<section className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-20 text-white">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
				{/* Left Column - Images */}
				<motion.div
					ref={leftColRef}
					className="relative w-full lg:col-span-6 order-2 lg:order-1"
					variants={fadeInMain}
					initial="hidden"
					animate={leftInView ? "visible" : "hidden"}
				>
					<div className="mx-auto rounded-2xl max-w-[400px] sm:max-w-[500px]">
						<Image
							src="/company.png"
							alt="Cảnh sáng tạo của DHU-TECH"
							width={500}
							height={500}
							className="rounded-xl mx-auto object-cover"
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
						/>
						<motion.div
							className="absolute top-[-15px] left-0 sm:top-[-20px] sm:left-[-20px]"
							variants={fadeInTopLeft}
							initial="hidden"
							animate={leftInView ? "visible" : "hidden"}
						>
							<Image
								src="/dhutech.png"
								alt="Dự án thiết kế website DHU-TECH"
								width={48}
								height={48}
								className="rounded-lg shadow-md w-10 h-10 sm:w-12 sm:h-12"
							/>
						</motion.div>
						<motion.div
							className="absolute bottom-[-15px] right-0 sm:bottom-[-20px] sm:right-[-20px]"
							variants={fadeInBottomRight}
							initial="hidden"
							animate={leftInView ? "visible" : "hidden"}
						>
							<Image
								src="/DHU-Marketing.png"
								alt="Dịch vụ marketing DHU-TECH"
								width={64}
								height={64}
								className="rounded-lg shadow-md w-12 h-12 sm:w-16 sm:h-16"
							/>
						</motion.div>
					</div>
				</motion.div>

				{/* Right Column - Text */}
				<motion.div
					ref={rightColRef}
					className="w-full lg:col-span-6 bg-green-100 p-4 sm:p-6 lg:p-8 rounded-2xl order-2 lg:order-2 backdrop-blur-sm"
					variants={fadeInRightTitle}
					initial="hidden"
					animate={rightInView ? "visible" : "hidden"}
				>
					<div className="flex flex-col gap-4 sm:gap-6">
						<motion.div
							className="flex items-center text-primary mb-2 sm:mb-4 font-bold text-xl sm:text-2xl md:text-3xl"
							variants={fadeInRightTitle}
							animate={rightInView ? "visible" : "hidden"}
						>
							<Image
								src="/dhutech.png"
								alt="Biểu tượng DHU-TECH"
								width={24}
								height={24}
								className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
							/>
							Dịch Vụ Của Chúng Tôi
						</motion.div>

						<motion.p
							className="text-black/80 text-sm sm:text-base md:text-lg leading-relaxed"
							variants={fadeInRightText}
							animate={rightInView ? "visible" : "hidden"}
						>
							Chào mừng bạn đến với DHU-TECH – Kết Nối và Sáng Tạo Công Nghệ,
							đối tác đáng tin cậy của bạn trong lĩnh vực thiết kế website
							chuyên nghiệp, dịch vụ marketing sáng tạo và các khóa học nâng cao
							tri thức. Chúng tôi cam kết mang đến những giải pháp tối ưu giúp
							doanh nghiệp và cá nhân phát triển vượt bậc.
						</motion.p>
						{/* Commented out progress bars as in original code */}
						{/*
						<motion.div
							className="progress-container mb-6 sm:mb-8"
							variants={fadeInRightProgress}
							initial="hidden"
							animate={rightInView ? "visible" : "hidden"}
						>
							<div className="progress-line mb-4">
								<div className="flex justify-between items-center mb-2">
									<h6 className="text-base sm:text-lg font-medium">Thiết Kế Website</h6>
									<span className="text-base sm:text-lg font-medium">95%</span>
								</div>
								<div className="w-full bg-gray-700 rounded-full h-2.5">
									<div
										className="bg-[#facc15] h-2.5 rounded-full"
										style={{ width: "95%" }}
									></div>
								</div>
							</div>
							<div className="progress-line">
								<div className="flex justify-between items-center mb-2">
									<h6 className="text-base sm:text-lg font-medium">Dịch Vụ Marketing</h6>
									<span className="text-base sm:text-lg font-medium">90%</span>
								</div>
								<div className="w-full bg-gray-700 rounded-full h-2.5">
									<div
										className="bg-[#facc15] h-2.5 rounded-full"
										style={{ width: "90%" }}
									></div>
								</div>
							</div>
						</motion.div>
						*/}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutDhu;
