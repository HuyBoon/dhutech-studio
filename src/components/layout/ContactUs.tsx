"use client";
import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

// Animation variants
const slideLeft: Variants = {
	hidden: { opacity: 0, x: -50 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideRight: Variants = {
	hidden: { opacity: 0, x: 50 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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

const ContactUs: React.FC = () => {
	const shouldReduceMotion = useReducedMotion();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Placeholder for form submission logic
		alert("Form submitted! Replace with actual submission logic.");
	};

	return (
		<section className="min-h-screen flex items-center justify-center text-white relative bg-cover bg-center shadow-lg overflow-hidden">
			{/* Background linear gradient overlay */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage:
						"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))",
				}}
			/>

			<motion.div
				className="relative z-10 container px-4 py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
			>
				{/* Left: Map Section */}
				<motion.div
					className="w-full h-[600px] rounded-xl shadow-xl flex justify-center"
					variants={shouldReduceMotion ? fadeIn : slideLeft}
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3954535510566!2d106.65441861521666!3d10.764123392287269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f590a9cd319%3A0x9d49f5c91ccff6e3!2zRGFpIHR-hmnhIELhuqdpIFTDqyBLaWFuLCBxdS4gMSwgWnUlMEssIFAuIFjhuKTVIEzQ!5e0!3m2!1sen!2s!4v1677665127010!5m2!1sen!2s"
						width="100%"
						height="100%"
						style={{ border: "0", borderRadius: "12px" }}
						loading="lazy"
						title="DHU Tech Location Map"
						aria-label="Map showing DHU Tech location"
					></iframe>
				</motion.div>

				{/* Right: Contact Form Section */}
				<motion.div
					className="flex flex-col justify-between p-8 rounded-xl shadow-lg h-[600px]"
					variants={shouldReduceMotion ? fadeIn : slideRight}
				>
					<motion.h2
						className="text-3xl font-semibold mb-6 text-center"
						variants={fadeIn}
					>
						Contact Us
					</motion.h2>
					<motion.form
						className="space-y-6 flex flex-col justify-between h-full"
						variants={containerVariants}
						onSubmit={handleSubmit}
					>
						<motion.div variants={slideUp}>
							<label htmlFor="name" className="block text-lg font-medium">
								Your Name
							</label>
							<input
								type="text"
								id="name"
								className="w-full mt-2 p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
								placeholder="Enter your name"
								required
							/>
						</motion.div>

						<motion.div variants={slideUp}>
							<label htmlFor="email" className="block text-lg font-medium">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								className="w-full mt-2 p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
								placeholder="Enter your email"
								required
							/>
						</motion.div>

						<motion.div variants={slideUp}>
							<label htmlFor="message" className="block text-lg font-medium">
								Message
							</label>
							<textarea
								id="message"
								className="w-full mt-2 p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
								placeholder="Enter your message"
								rows={4}
								required
							></textarea>
						</motion.div>

						<motion.button
							type="submit"
							className="w-full py-3 mt-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
							variants={slideUp}
						>
							Send Message
						</motion.button>
					</motion.form>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default ContactUs;
