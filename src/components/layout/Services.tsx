"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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

const titleVariants = {
	hidden: { opacity: 0, x: -10 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
	hover: {
		x: 10,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

const descVariants = {
	hidden: { opacity: 0, y: -5 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: "easeOut",
		},
	},
	hover: {
		y: -10,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
	hover: {
		scale: 1.05,
		boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

const Services = () => {
	const templates = [
		{
			title: "Business Template",
			description: "Professional and modern template for corporate websites.",
			image: "/templates/restaurant.jpg",
		},
		{
			title: "E-Commerce Template",
			description: "Fully customizable template for online stores.",
			image: "/templates/ecommerce.jpg",
		},
		{
			title: "Portfolio Template",
			description: "Creative template to showcase your work and skills.",
			image: "/templates/portfolio.jpg",
		},
		{
			title: "Travel Template",
			description: "Specialized template for amazing tour.",
			image: "/templates/landing.jpg",
		},
	];

	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const handleMouseEnter = (index: number) => {
		setActiveIndex(index);
		if (typeof window !== "undefined" && window.innerWidth <= 768) {
			setTimeout(() => {
				setActiveIndex(null);
			}, 1000); // Reset after 1s on mobile
		}
	};
	const handleMouseLeave = () => {
		if (typeof window !== "undefined" && window.innerWidth > 768) {
			setActiveIndex(null); // Reset on desktop only
		}
	};
	return (
		<section className="container relative py-20 px-12 mx-auto">
			<div className="grid grid-cols-12 gap-8 items-center">
				<motion.div
					className="col-span-4 z-10 flex flex-col items-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false }}
				>
					<motion.h1
						className="text-4xl font-bold text-white mb-4"
						variants={titleVariants}
						whileHover="hover"
					>
						AI x Marketing
					</motion.h1>
					<motion.p
						className="text-white"
						variants={descVariants}
						whileHover="hover"
					>
						Digital Marketing Chuyên Nghiệp
					</motion.p>
				</motion.div>
				<motion.div
					className="col-span-8 z-10"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<div className="grid grid-cols-2 gap-6">
						{templates.map((template, index) => (
							<motion.div
								key={index}
								className="bg-white rounded-lg shadow-lg transition-shadow "
								variants={cardVariants}
								whileHover="hover"
							>
								<div
									className="relative w-full aspect-[324/199] overflow-hidden"
									onMouseEnter={() => handleMouseEnter(index)}
									onMouseLeave={handleMouseLeave}
									onClick={() => handleMouseEnter(index)}
								>
									<div
										className={`absolute inset-0 pointer-events-none z-10 ${
											activeIndex === index
												? "after:animate-[shineEffect_1s_ease-out_forwards]"
												: ""
										} after:absolute after:content-[''] after:left-1/2 after:top-1/2 after:w-[200%] after:h-0 after:translate-x-[-50%] after:translate-y-[-50%] after:rotate-[-45deg] after:bg-white/30 after:z-10`}
									/>
									<Image
										src={template.image}
										alt={template.title}
										fill
										className={`object-cover transition-transform duration-700 ease-out ${
											activeIndex === index ? "scale-105" : ""
										}`}
										sizes="(max-width: 768px) 100vw, 400px"
									/>
								</div>
								<div className="p-4">
									<h3 className="text-lg font-semibold mb-2">
										{template.title}
									</h3>
									<p className="text-gray-600">{template.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
			<div className="absolute top-0 left-[-10%] z-0">
				<Image
					src="/starbackground.png"
					alt="STAR-DHUTECH"
					width={500}
					height={500}
				/>
			</div>
		</section>
	);
};

export default Services;
