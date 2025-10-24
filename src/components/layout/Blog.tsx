"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96] as const,
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
    hover: {
        scale: 1.03,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    },
};

const Blog = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const blogPosts = [
        {
            id: "1",
            title: "Mastering Python Data Structures",
            excerpt:
                "Explore advanced techniques for optimizing data structures in Python to enhance performance and scalability in your projects.",
            image: "/blogs/blog1.jpg",
            date: "June 5, 2025",
            slug: "/blog/mastering-python-data-structures",
        },
        {
            id: "2",
            title: "Best Practices in Web Development",
            excerpt:
                "Learn the latest best practices for building responsive and accessible websites with HTML, CSS, and JavaScript.",
            image: "/blogs/blog2.jpg",
            date: "June 8, 2025",
            slug: "/blog/best-practices-web-development",
        },
        {
            id: "3",
            title: "Best Practices in Web Development",
            excerpt:
                "Learn the latest best practices for building responsive and accessible websites with HTML, CSS, and JavaScript.",
            image: "/blogs/blog2.jpg",
            date: "June 8, 2025",
            slug: "/blog/best-practices-web-development",
        },
    ];

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
        if (typeof window !== "undefined" && window.innerWidth <= 768) {
            setTimeout(() => {
                setActiveIndex(null);
            }, 1000);
        }
    };

    const handleMouseLeave = () => {
        if (typeof window !== "undefined" && window.innerWidth > 768) {
            setActiveIndex(null);
        }
    };

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
                    Bài Viết Nổi Bật
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                            variants={cardVariants}
                            whileHover="hover"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleMouseEnter(index)}
                        >
                            <div className="relative w-full aspect-[4/3]">
                                <div
                                    className={`absolute inset-0 pointer-events-none z-10 ${
                                        activeIndex === index
                                            ? "after:animate-[shineEffect_1s_ease-out_forwards]"
                                            : ""
                                    } after:absolute after:content-[''] after:left-1/2 after:top-1/2 after:w-[200%] after:h-0 after:translate-x-[-50%] after:translate-y-[-50%] after:rotate-[-45deg] after:bg-white/30 after:z-10`}
                                />
                                <Image
                                    src={post.image}
                                    alt={`Hình ảnh bài viết: ${post.title}`}
                                    fill
                                    className={`object-cover transition-transform duration-500 ease-out ${
                                        activeIndex === index ? "scale-105" : ""
                                    }`}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-4 sm:p-5 flex flex-col flex-grow">
                                <h3 className="text-base sm:text-lg font-semibold text-secondary mb-1 sm:mb-2 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <p className="text-sm text-gray-500 mb-3 sm:mb-4">
                                    {post.date}
                                </p>
                                <Link
                                    href={post.slug}
                                    className="text-secondary font-medium hover:text-secondary/90 transition-colors inline-flex items-center"
                                    aria-label={`Đọc thêm về ${post.title}`}
                                >
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Đọc thêm
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Blog;
