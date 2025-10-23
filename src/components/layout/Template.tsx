"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const cardVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
	hover: {
		scale: 1.02,
		boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
	},
};

const Templates = () => {
	const [activeTopic, setActiveTopic] = useState("Du lịch");

	const topics = [
		{
			name: "Du lịch",
			templates: [
				{
					title: "Adventure Explorer",
					description:
						"Vibrant template for travel agencies and tour operators.",
					image: "/hometemplates/demo.jpg",
					price: "1.500.000đ",
				},
				{
					title: "Wanderlust Blog",
					description: "Sleek design for travel bloggers and storytellers.",
					image: "/hometemplates/travel2.jpg",
					price: "1.200.000đ",
				},
				{
					title: "Resort Booking",
					description: "Elegant template for hotels and vacation rentals.",
					image: "/hometemplates/travel3.jpg",
					price: "1.800.000đ",
				},
				{
					title: "Resort Booking",
					description: "Elegant template for hotels and vacation rentals.",
					image: "/hometemplates/travel3.jpg",
					price: "1.800.000đ",
				},
			],
		},
		{
			name: "Ecommerce",
			templates: [
				{
					title: "Fashion Store",
					description: "Modern template for clothing and accessories shops.",
					image: "/hometemplates/travel2.jpg",
					price: "2.000.000đ",
				},
				{
					title: "Tech Gadgets",
					description: "Clean design for electronics and tech products.",
					image: "/hometemplates/travel2.jpg",
					price: "1.700.000đ",
				},
				{
					title: "Artisan Market",
					description: "Unique template for handmade goods and crafts.",
					image: "/hometemplates/travel2.jpg",
					price: "1.900.000đ",
				},
				{
					title: "Artitude Market",
					description: "Unique template for handmade goods and crafts.",
					image: "/hometemplates/travel2.jpg",
					price: "1.900.000đ",
				},
			],
		},
		{
			name: "Portfolio",
			templates: [
				{
					title: "Creative Showcase",
					description: "Bold template for artists and designers.",
					image: "/hometemplates/travel2.jpg",
					price: "1.300.000đ",
				},
				{
					title: "Freelancer Hub",
					description: "Professional layout for freelancers and consultants.",
					image: "/hometemplates/travel2.jpg",
					price: "1.100.000đ",
				},
				{
					title: "Photography Gallery",
					description: "Minimalist template for photographers.",
					image: "/hometemplates/travel2.jpg",
					price: "1.400.000đ",
				},
				{
					title: "Photography Gallery",
					description: "Minimalist template for photographers.",
					image: "/hometemplates/travel2.jpg",
					price: "1.400.000đ",
				},
			],
		},
		{
			name: "Blog",
			templates: [
				{
					title: "Creative Showcase",
					description: "Bold template for artists and designers.",
					image: "/hometemplates/travel2.jpg",
					price: "1.300.000đ",
				},
				{
					title: "Freelancer Hub",
					description: "Professional layout for freelancers and consultants.",
					image: "/hometemplates/travel2.jpg",
					price: "1.100.000đ",
				},
				{
					title: "Photography Gallery",
					description: "Minimalist template for photographers.",
					image: "/hometemplates/travel2.jpg",
					price: "1.400.000đ",
				},
				{
					title: "Photography Gallery",
					description: "Minimalist template for photographers.",
					image: "/hometemplates/travel2.jpg",
					price: "1.400.000đ",
				},
			],
		},
	];

	return (
		<section className="container mx-auto py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 relative">
			{/* Background Image */}
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
					className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-secondary mb-6 sm:mb-8 md:mb-12"
					variants={itemVariants}
				>
					Mẫu Giao Diện Website Chuyên Nghiệp Đa Ngành
				</motion.h2>
				<motion.div
					className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10"
					variants={itemVariants}
				>
					{topics.map((topic) => (
						<button
							key={topic.name}
							className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-all ${
								activeTopic === topic.name
									? "bg-secondary text-white"
									: "bg-white text-secondary hover:bg-secondary/90 hover:text-white"
							}`}
							onClick={() => setActiveTopic(topic.name)}
							aria-label={`Select ${topic.name} templates`}
						>
							{topic.name}
						</button>
					))}
				</motion.div>
				<Swiper
					modules={[Navigation]}
					spaceBetween={16}
					slidesPerView={1}
					navigation={{
						nextEl: ".templates-next",
						prevEl: ".templates-prev",
					}}
					breakpoints={{
						640: { slidesPerView: 2, spaceBetween: 20 },
						1024: { slidesPerView: 3, spaceBetween: 24 },
					}}
					className="pb-12"
				>
					{topics
						.find((topic) => topic.name === activeTopic)
						?.templates.map((template, index) => (
							<SwiperSlide key={template.title + index}>
								<motion.div
									className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
									variants={cardVariants}
									whileHover="hover"
									initial="hidden"
									animate="visible"
								>
									<div className="relative w-full aspect-[4/5]">
										<Image
											src={template.image}
											alt={`${template.title} Website Template`}
											fill
											className="object-cover rounded-t-lg"
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
										/>
									</div>
									<div className="p-4 sm:p-5 flex flex-col flex-grow">
										<h3 className="text-base sm:text-lg font-semibold text-secondary mb-1 sm:mb-2">
											{template.title}
										</h3>
										<p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 flex-grow">
											{template.description}
										</p>
										<div className="flex items-center gap-2 sm:gap-3">
											<motion.button
												className="flex-1 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
												aria-label={`View details for ${template.title}`}
											>
												Chi tiết
											</motion.button>
											<motion.button
												className="flex-1 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
												aria-label={`View demo for ${template.title}`}
											>
												Xem Demo
											</motion.button>
										</div>
									</div>
								</motion.div>
							</SwiperSlide>
						))}
				</Swiper>
				<div className="flex justify-center gap-4 mt-6">
					<button
						className="templates-prev bg-secondary text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-secondary/90 transition-all"
						aria-label="Previous Template"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
					<button
						className="templates-next bg-secondary text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-secondary/90 transition-all"
						aria-label="Next Template"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</motion.div>
		</section>
	);
};

export default Templates;
