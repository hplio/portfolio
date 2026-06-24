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
import Stats from "@/components/sections/Stats";
import CursorGlow from "@/components/ui/CursorGlow";

export default function Home() {
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
		<>
			<CursorGlow />
			<main style={{ position: "relative", zIndex: 1 }}>
				<Navbar />
				<Hero />
				<Stats />
				<About />
				<Skills />
				<Projects />
				<Experience />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
