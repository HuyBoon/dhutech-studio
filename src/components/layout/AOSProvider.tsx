"use client";
import { ReactNode, Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
	children: ReactNode;
}

const AOSProvider = ({ children }: AOSProviderProps) => {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			offset: 10,
			easing: "ease",
			once: true,
		});
	}, []);

	return <Fragment>{children}</Fragment>;
};

export default AOSProvider;
