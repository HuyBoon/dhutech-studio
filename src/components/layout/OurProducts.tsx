"use client";
import Image from "next/image";
import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

// Define type for image paths
type ImagePaths = {
	product1: string;
	product2: string;
	product3: string;
};

// Constants for image paths
const IMAGES: ImagePaths = {
	product1: "/products1.png",
	product2: "/products2.png",
	product3: "/products3.png",
};

// Animation variants
const slideLeft: Variants = {
	hidden: { opacity: 0, x: -50 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideRight: Variants = {
	hidden: { opacity: 0, x: 50 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

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

const listItemVariants: Variants = {
	hidden: { opacity: 0, x: -20 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const fadeIn: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurProducts: React.FC = () => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="relative py-16 bg-cover bg-center shadow-lg overflow-hidden">
			{/* Background linear gradient overlay */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage:
						"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))",
				}}
			/>

			<motion.div
				className="relative container z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				// Removed viewport={{ once: true }} to trigger animations on every scroll
			>
				{/* Left section with images */}
				<motion.div
					className="relative flex flex-col items-center"
					variants={containerVariants}
				>
					<div className="mb-6">
						<motion.div variants={shouldReduceMotion ? fadeIn : slideLeft}>
							<Image
								src={IMAGES.product1}
								alt="Product 1"
								width={270}
								height={180}
								className="rounded-md shadow-lg"
								loading="lazy"
							/>
						</motion.div>
					</div>
					<motion.div
						className="flex items-center justify-center gap-4 w-full"
						variants={containerVariants}
					>
						<motion.div variants={shouldReduceMotion ? fadeIn : slideDown}>
							<Image
								src={IMAGES.product3}
								alt="Product 3"
								width={200}
								height={130}
								className="rounded-md shadow-lg"
								loading="lazy"
							/>
						</motion.div>
						<motion.div variants={shouldReduceMotion ? fadeIn : slideRight}>
							<Image
								src={IMAGES.product2}
								alt="Product 2"
								width={270}
								height={180}
								className="rounded-md shadow-lg"
								loading="lazy"
							/>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Right section with text */}
				<motion.div
					className="w-full flex flex-col px-5"
					variants={containerVariants}
				>
					<motion.h2
						className="text-2xl font-bold text-white mb-4"
						variants={shouldReduceMotion ? fadeIn : slideDown}
					>
						Our Services
					</motion.h2>
					<motion.div
						className="leading-relaxed text-white"
						variants={shouldReduceMotion ? fadeIn : slideRight}
					>
						We provide cutting-edge solutions to enhance the fishing industry.
						Our services include:
						<motion.ul
							className="list-disc ml-6 mt-4"
							variants={containerVariants}
						>
							<motion.li variants={listItemVariants}>
								Optimized mobile applications for fishing
							</motion.li>
							<motion.li variants={listItemVariants}>
								Advanced data analysis tools for fish tracking
							</motion.li>
							<motion.li variants={listItemVariants}>
								Image processing services for underwater surveillance
							</motion.li>
							<motion.li variants={listItemVariants}>
								Website templates tailored for fishing businesses
							</motion.li>
							<motion.li variants={listItemVariants}>
								Technology courses designed for students pursuing careers in IT
								and digital solutions
							</motion.li>
						</motion.ul>
					</motion.div>
					<motion.p
						className="leading-relaxed text-white pt-8"
						variants={shouldReduceMotion ? fadeIn : slideUp}
					>
						At DHU Tech, we are committed to delivering innovative technology
						solutions that drive success in the fishing and tech industries. Our
						tailored services empower businesses and individuals with the tools
						they need to thrive in the digital age.
					</motion.p>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default OurProducts;
