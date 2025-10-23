"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const BlogSection = () => {
    const t = useTranslations("Blog");

    const posts = [
        {
            title: "Top 10 SEO Tips for 2025",
            date: "2025-10-15",
            link: "/blog/seo-tips",
            image: "/blogs/blog1.jpg",
        },
        {
            title: "How to Design a Modern Website",
            date: "2025-10-10",
            link: "/blog/modern-design",
            image: "/blogs/blog2.jpg",
        },
        {
            title: "How to Design a Modern Website",
            date: "2025-10-10",
            link: "/blog/modern-design",
            image: "/blogs/blog3.jpg",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96] as const,
            },
        },
    };

    return (
        <section
            id="blog"
            className="py-12 md:py-16 lg:py-20"
            aria-label={t("title")}
            itemScope
            itemType="https://schema.org/Blog"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center"
                    style={{ color: "var(--primary-color1)" }}
                    itemProp="name"
                >
                    {t("title")}
                </h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                >
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="w-full"
                    >
                        {posts.map((post, index) => (
                            <SwiperSlide key={index}>
                                <motion.a
                                    variants={itemVariants}
                                    href={post.link}
                                    className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 block"
                                    itemProp="blogPost"
                                    itemScope
                                    itemType="https://schema.org/BlogPosting"
                                >
                                    <div className="w-full h-[200px] mb-4 overflow-hidden rounded-lg">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={400}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3
                                        className="text-lg sm:text-xl font-semibold mb-2"
                                        style={{
                                            color: "var(--primary-color2)",
                                        }}
                                        itemProp="headline"
                                    >
                                        {post.title}
                                    </h3>
                                    <p
                                        className="text-sm sm:text-base"
                                        style={{ color: "var(--text-color)" }}
                                        itemProp="datePublished"
                                    >
                                        {post.date}
                                    </p>
                                    <meta itemProp="url" content={post.link} />
                                </motion.a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;
