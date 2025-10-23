"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";

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

const itemVariantRight = {
	hidden: { opacity: 0, x: 10 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
		},
	},
};

const feedbacks = [
	{
		num: "01",
		category: "Thiết kế Website",
		title: "Website Nội Thất Meon",
		feedback:
			"Từ một xưởng sản xuất nội thất nhỏ với số đơn hàng hạn chế mỗi tháng, tôi đã hợp tác với DHUTECH để thiết kế website và sử dụng các giải pháp marketing toàn diện. Kết quả vượt xa kỳ vọng: website được nhiều người biết đến, đơn hàng tăng mạnh, và Meon đã trở thành trang web dẫn đầu xu hướng kinh doanh nội thất trực tuyến tại TP.HCM. Quy mô công ty cũng mở rộng đáng kể!",
		reviewer: "Nguyễn Văn A",
		image: "/feedback/feedback1.jpg",
		live: "https://example.com/meon-website",
		github: "https://github.com/example/meon-interior",
	},
	{
		num: "02",
		category: "Dịch vụ Marketing",
		title: "Chiến dịch Marketing Du lịch",
		feedback:
			"Nhờ vào dịch vụ marketing của DHUTECH, chiến dịch quảng bá du lịch của chúng tôi đã đạt hiệu quả vượt trội. Các chiến lược SEO và quảng cáo trên mạng xã hội đã tăng gấp đôi lượng khách truy cập và đặt tour. Đội ngũ rất chuyên nghiệp và hỗ trợ tận tình!",
		reviewer: "Trần Thị B",
		image: "/feedback/feedback2.jpg",
		live: "https://example.com/travel-marketing",
		github: "https://github.com/example/travel-campaign",
	},
	{
		num: "03",
		category: "Khóa học",
		title: "Khóa học Thiết kế Web",
		feedback:
			"Khóa học thiết kế website tại DHUTECH đã giúp tôi từ một người mới hoàn toàn trở thành một nhà phát triển web tự tin. Nội dung rõ ràng, thực hành thực tế, và hỗ trợ sau khóa học rất tốt. Tôi đã tự xây dựng website cho doanh nghiệp của mình!",
		reviewer: "Lê Văn C",
		image: "/feedback/feedback3.jpg",
		live: "https://example.com/web-course",
		github: "https://github.com/example/web-course-project",
	},
	{
		num: "04",
		category: "Dịch vụ Marketing",
		title: "Chiến dịch Nội dung Sáng tạo",
		feedback:
			"Dịch vụ content marketing của DHUTECH đã nâng tầm thương hiệu của tôi. Các bài viết và chiến dịch trên mạng xã hội không chỉ thu hút khách hàng mà còn tăng doanh số đáng kể. Rất hài lòng với sự sáng tạo và hiệu quả!",
		reviewer: "Phạm Thị D",
		image: "/feedback/feedback4.jpg",
		live: "https://example.com/content-campaign",
		github: "https://github.com/example/content-marketing",
	},
];

const Feedback = () => {
	const [feedback, setFeedback] = useState(feedbacks[0]);
	const [progress, setProgress] = useState(100 / feedbacks.length);

	useEffect(() => {
		const swiper = (document.querySelector(".swiper") as any)?.swiper;
		if (swiper) {
			const step = 100 / feedbacks.length;
			const updateProgress = () => {
				const currentIndex = swiper.realIndex;
				const newProgress = (currentIndex + 1) * step;
				setProgress(newProgress);
			};
			swiper.on("slideChange", updateProgress);
			updateProgress();
			return () => swiper.off("slideChange", updateProgress);
		}
	}, []);

	return (
		<section className="container mx-auto relative py-10 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
			{/* Background Image */}
			<div className="absolute top-0 right-[-10%] md:right-[-25%] z-0 w-[300px] sm:w-[400px] md:w-[500px]">
				<Image
					src="/starbackground.png"
					alt="DHU-TECH Background"
					width={500}
					height={500}
					className="object-contain opacity-50 md:opacity-100"
				/>
			</div>

			<div className="relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
					{/* Image Slider */}
					<motion.div
						className="w-full md:col-span-7 order-2 md:order-1"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false }}
					>
						<motion.div variants={itemVariantLeft}>
							<Swiper
								modules={[Navigation]}
								spaceBetween={20}
								slidesPerView={1}
								loop
								navigation={{
									nextEl: ".feedback-next",
									prevEl: ".feedback-prev",
								}}
								className="min-h-[300px] sm:min-h-[400px] md:min-h-[450px] xl:min-h-[520px] pb-12"
								onSlideChange={(swiper) => {
									setFeedback(feedbacks[swiper.realIndex]);
								}}
							>
								{feedbacks.map((feedback, i) => (
									<SwiperSlide key={i} className="w-full">
										<div className="flex justify-center items-center bg-pink-50/20 rounded-2xl shadow-lg overflow-hidden">
											<div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[5/3]">
												<Image
													src={feedback.image}
													fill
													className="object-cover rounded-2xl"
													alt={feedback.title}
													sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
												/>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</motion.div>
					</motion.div>

					{/* Feedback Content */}
					<motion.div
						className="w-full md:col-span-5 flex flex-col justify-between order-1 md:order-2"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false }}
					>
						<div className="flex flex-col gap-4 sm:gap-6">
							<motion.div
								className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight font-extrabold text-outline"
								variants={itemVariantRight}
							>
								<span>Khách hàng </span>
								<h3 className="mt-2">Nói Về DHU TECH</h3>
							</motion.div>
							<motion.p
								className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed"
								variants={itemVariantRight}
							>
								{feedback.feedback}
							</motion.p>
							<motion.div
								className="text-white/80 font-semibold text-sm sm:text-base"
								variants={itemVariantRight}
							>
								- {feedback.reviewer}
							</motion.div>
							<motion.div
								className="flex gap-4 text-sm sm:text-base"
								variants={itemVariantRight}
							>
								<Link
									href={feedback.live}
									target="_blank"
									className="text-secondary hover:underline"
								>
									Xem Dự Án
								</Link>
								<Link
									href={feedback.github}
									target="_blank"
									className="text-secondary hover:underline"
								>
									GitHub
								</Link>
							</motion.div>
						</div>

						{/* Progress Bar and Navigation */}
						<div className="mt-6 w-full">
							<div className="w-full h-[3px] bg-gray-600 rounded-full mb-4">
								<motion.div
									className="bg-secondary h-full"
									style={{ transition: "width 0.3s ease" }}
									initial={{ width: `${100 / feedbacks.length}%` }}
									animate={{ width: `${progress}%` }}
								/>
							</div>
							<div className="flex gap-3">
								<button
									className="feedback-prev cursor-pointer bg-secondary hover:bg-secondary/90 text-[#130f32] w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full transition-all"
									aria-label="Previous Feedback"
								>
									<ChevronLeft size={24} />
								</button>
								<button
									className="feedback-next cursor-pointer bg-secondary hover:bg-secondary/90 text-[#130f32] w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full transition-all"
									aria-label="Next Feedback"
								>
									<ChevronRight size={24} />
								</button>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Feedback;
