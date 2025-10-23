"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariantLeft = {
	hidden: { opacity: 0, x: -10 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
		},
	},
};

const itemVariantDown = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
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
	hover: { scale: 1.02, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)" },
};

const courses = [
	{
		num: "01",
		category: "Programming",
		title: "Python Fundamentals",
		description:
			"Learn Python programming from basics to advanced concepts, including data structures, file handling, and object-oriented programming.",
		stack: [{ name: "Python" }, { name: "Pandas" }, { name: "NumPy" }],
		image: "/courses/course-programming.jpg",
		poster: "/courses/posterpython.png",
		live: "https://example.com/python-course",
		github: "https://github.com/example/python-fundamentals",
	},
	{
		num: "02",
		category: "Engineering",
		title: "Computational Fluid Dynamics",
		description:
			"Master CFD principles, numerical methods, and simulation techniques for fluid flow and heat transfer analysis.",
		stack: [{ name: "MATLAB" }, { name: "ANSYS Fluent" }, { name: "OpenFOAM" }],
		image: "/courses/course-university.jpg",
		poster: "/courses/postercoluuchat.png",
		live: "https://example.com/cfd-course",
		github: "https://github.com/example/cfd-simulations",
	},
	{
		num: "03",
		category: "Web Development",
		title: "HTML, CSS, JS Basics",
		description:
			"Build responsive websites with core web technologies, covering HTML structure, CSS styling, and JavaScript interactivity.",
		stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
		image: "/courses/course-web.jpg",
		poster: "/courses/posterweb.png",
		live: "https://example.com/webdev-course",
		github: "https://github.com/example/webdev-basics",
	},
	{
		num: "04",
		category: "Frontend",
		title: "React Development",
		description:
			"Create dynamic web applications using React, with a focus on components, state management, and modern JavaScript.",
		stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
		image: "/courses/course-programming.jpg",
		poster: "/courses/postercoluuchat.png",
		live: "https://example.com/react-course",
		github: "https://github.com/example/react-projects",
	},
];

const Courses = () => {
	const [course, setCourse] = useState(courses[0]);
	const router = useRouter();

	return (
		<section className="container mx-auto relative py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
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
				className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false }}
			>
				{/* Left Column - Text */}
				<motion.div
					className="w-full md:col-span-5 flex flex-col items-center md:items-start order-2 md:order-1"
					variants={containerVariants}
				>
					<motion.h2
						className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-4 sm:mb-6"
						variants={itemVariantLeft}
					>
						Khóa Học Của DHU-TECH
					</motion.h2>
					<motion.p
						className="text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed"
						variants={itemVariantLeft}
					>
						{course.description}
					</motion.p>
					<motion.div
						className="text-secondary font-semibold text-sm sm:text-base mb-3 sm:mb-4"
						variants={itemVariantLeft}
					>
						Danh mục: {course.category}
					</motion.div>
					<motion.div
						className="flex flex-wrap gap-2 mb-4 sm:mb-6"
						variants={itemVariantLeft}
					>
						{course.stack.map((tech, index) => (
							<span
								key={index}
								className="px-2 py-1 text-xs sm:text-sm bg-gray-200 text-gray-800 rounded-full"
							>
								{tech.name}
							</span>
						))}
					</motion.div>
					<motion.button
						className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all"
						variants={itemVariantLeft}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						onClick={() => router.push("/khoa-hoc")}
						aria-label="Join DHU-TECH courses"
					>
						Tham gia ngay
					</motion.button>
				</motion.div>

				{/* Right Column - Swiper */}
				<motion.div
					className="w-full md:col-span-7 order-1 md:order-2"
					variants={containerVariants}
				>
					<motion.div variants={itemVariantDown}>
						<Swiper
							modules={[Pagination]}
							spaceBetween={20}
							slidesPerView={1}
							loop
							pagination={{ clickable: true }}
							breakpoints={{
								640: { spaceBetween: 24 },
								1024: { spaceBetween: 30 },
							}}
							className="min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[520px] pb-12"
							onSlideChange={(swiper) => setCourse(courses[swiper.realIndex])}
						>
							{courses.map((course, index) => (
								<SwiperSlide key={course.title + index}>
									<motion.div
										className="bg-white rounded-lg shadow-md overflow-hidden"
										variants={cardVariants}
										whileHover="hover"
										initial="hidden"
										animate="visible"
									>
										<div className="relative w-full aspect-[4/3]">
											<Image
												src={course.poster}
												alt={`${course.title} Course Poster`}
												fill
												className="object-cover rounded-lg"
												sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
											/>
										</div>
										<div className="p-4 sm:p-5">
											<h3 className="text-base sm:text-lg font-semibold text-secondary mb-1 sm:mb-2">
												{course.title}
											</h3>
											<div className="flex gap-2">
												<a
													href={course.live}
													target="_blank"
													rel="noopener noreferrer"
													className="text-sm text-secondary hover:underline"
													aria-label={`View ${course.title} course page`}
												>
													Xem khóa học
												</a>
												<a
													href={course.github}
													target="_blank"
													rel="noopener noreferrer"
													className="text-sm text-secondary hover:underline"
													aria-label={`View ${course.title} GitHub repository`}
												>
													GitHub
												</a>
											</div>
										</div>
									</motion.div>
								</SwiperSlide>
							))}
						</Swiper>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Courses;
