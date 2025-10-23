"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

// Define type for blog items
interface Blog {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
}

// Blogs data
const blogs: Blog[] = [
	{
		id: 1,
		title: "Flycam và tương lai công nghệ",
		description:
			"Khám phá tương lai của công nghệ flycam trong ngành công nghiệp.",
		imageUrl: "/blog1.png",
	},
	{
		id: 2,
		title: "Tìm hiểu về khí động học",
		description: "Cùng tìm hiểu về lý thuyết khí động học và ứng dụng của nó.",
		imageUrl: "/blog2.png",
	},
	{
		id: 3,
		title: "Lập trình web từ cơ bản",
		description: "Hướng dẫn lập trình web từ những bước cơ bản nhất.",
		imageUrl: "/blog3.png",
	},
];

// Animation variants
const slideDown: Variants = {
	hidden: { opacity: 0, y: -50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideUp: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const fadeIn: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogList: React.FC = () => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="relative py-16 px-6 text-white bg-cover bg-center shadow-lg overflow-hidden">
			{/* Background linear gradient overlay */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage:
						"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))",
				}}
			/>

			<motion.div
				className="relative z-10"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
			>
				<motion.h2
					className="text-3xl font-semibold text-center mb-8"
					variants={shouldReduceMotion ? fadeIn : slideDown}
				>
					Our Latest Blogs
				</motion.h2>

				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					loop={true}
					pagination={{ clickable: true }}
					breakpoints={{
						640: { slidesPerView: 1 },
						1024: { slidesPerView: 2 },
					}}
					aria-label="Blog carousel"
				>
					{blogs.map((blog) => (
						<SwiperSlide key={blog.id}>
							<motion.div
								className="flex flex-col h-full p-6 bg-opacity-90 rounded-lg shadow-lg hover:shadow-xl"
								style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
								variants={shouldReduceMotion ? fadeIn : slideUp}
								initial="hidden"
								whileInView="visible"
							>
								<div
									className={`absolute inset-0 pointer-events-none z-10 
										
											after:animate-[shineEffect_1s_ease-out_forwards]
											
									 after:absolute after:content-[''] after:left-1/2 after:top-1/2 after:w-[200%] after:h-0 after:translate-x-[-50%] after:translate-y-[-50%] after:rotate-[-45deg] after:bg-white/30 after:z-10`}
								/>
								<Image
									src={blog.imageUrl}
									alt={blog.title}
									width={500}
									height={60}
									className="w-full h-60 object-cover rounded-md mb-4"
									loading="lazy"
								/>
								<h3 className="text-lg font-semibold text-white line-clamp-2">
									{blog.title}
								</h3>
								<p className="mt-2 text-gray-200 text-sm">{blog.description}</p>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</section>
	);
};

export default BlogList;
