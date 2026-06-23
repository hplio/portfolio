"use client";

import { useEffect } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";

export default function Home() {
	// Lenis smooth scroll — desktop only.
	// On mobile, JS smooth scroll fights with native momentum scrolling and causes jank.
	useEffect(() => {
		const initLenis = async () => {
			if (typeof window === "undefined") return;
			if (window.innerWidth < 768) return;

			const Lenis = (await import("lenis")).default;
			const lenis = new Lenis({
				duration: 1.2,
				easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
			});

			function raf(time: number) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

			requestAnimationFrame(raf);
		};

		initLenis();
	}, []);

	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Experience />
			<Contact />
			<Footer />
		</main>
	);
}
