"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			staggerChildren: 0.2,
			ease: "easeOut",
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

const buttonVariants = {
	hover: {
		scale: 1.05,
		boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
	},
	tap: { scale: 0.95 },
};

const Contact = () => {
	return (
		<section className="container mx-auto py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 relative z-20">
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
				className="relative max-w-[900px] mx-auto py-8 sm:py-12 px-6 sm:px-8 bg-secondary/70 rounded-2xl overflow-hidden z-30 shadow-lg"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false }}
			>
				<div className="flex flex-col items-center text-center text-white space-y-4 sm:space-y-6">
					<motion.h2
						className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold"
						variants={itemVariants}
					>
						Bắt Đầu Hành Trình Thành Công
					</motion.h2>
					<motion.p
						className="text-sm sm:text-base md:text-lg max-w-[600px] leading-relaxed"
						variants={itemVariants}
					>
						Hãy liên hệ với chúng tôi ngay hôm nay để cùng xây dựng tương lai số
						của bạn.
					</motion.p>
					<Link href="/contact" passHref>
						<motion.button
							className="cursor-pointer px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-white text-black rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-all"
							variants={itemVariants}
							whileHover="hover"
							whileTap="tap"
							custom={buttonVariants}
							aria-label="Liên hệ với DHU-TECH"
						>
							Liên Hệ Ngay
						</motion.button>
					</Link>
				</div>
			</motion.div>
		</section>
	);
};

export default Contact;
