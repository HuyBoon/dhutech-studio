"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
    FaHome,
    FaWrench,
    FaPen,
    FaEnvelope,
    FaTwitter,
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    const t = useTranslations("Footer");

    const navLinks = [
        { title: "Home", href: "/", icon: FaHome },
        { title: "Services", href: "/services", icon: FaWrench },
        { title: "Blog", href: "/blog", icon: FaPen },
        { title: "Contact", href: "/contact", icon: FaEnvelope },
    ];

    const socialLinks = [
        {
            icon: FaTwitter,
            alt: "Twitter",
            href: "https://twitter.com/dhutech",
        },
        {
            icon: FaFacebookF,
            alt: "Facebook",
            href: "https://facebook.com/dhutech",
        },
        {
            icon: FaInstagram,
            alt: "Instagram",
            href: "https://instagram.com/dhutech",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
        },
    };

    return (
        <footer
            id="footer"
            className="py-8 md:py-16 bg-center bg-cover"
            style={{ backgroundImage: "url('/footer1.svg')" }}
            aria-label={t("title")}
            itemScope
            itemType="https://schema.org/Organization"
        >
            <div className="pt-[100px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
                >
                    <div itemProp="name">
                        <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">
                            DHUTECH
                        </h3>
                        <p
                            className="text-white  text-sm sm:text-base"
                            itemProp="description"
                        >
                            {t("description")}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white  text-lg sm:text-xl font-semibold mb-4">
                            {t("navTitle")}
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index} className="flex items-center">
                                    <link.icon className="mr-2 text-lg text-white" />
                                    <Link
                                        href={link.href}
                                        className="text-white text-sm sm:text-base hover:text-primary-btn transition-colors"
                                        itemProp="url"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                            {t("contactTitle")}
                        </h4>
                        <p
                            className="text-white text-sm sm:text-base"
                            itemProp="telephone"
                        >
                            {t("phone")}
                        </p>
                        <p
                            className="text-white text-sm sm:text-base"
                            itemProp="email"
                        >
                            {t("email")}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg text-white sm:text-xl font-semibold mb-4">
                            {t("socialTitle")}
                        </h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-white text-2xl hover:text-primary-btn transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    role="img"
                                    aria-label={link.alt}
                                >
                                    <link.icon />
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <div className="mt-8 text-center">
                    <p
                        className="text-white text-sm sm:text-base"
                        itemProp="copyrightYear"
                    >
                        © {new Date().getFullYear()} {t("copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
