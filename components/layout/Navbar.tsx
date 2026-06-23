"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Experience", href: "#experience" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<motion.nav
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 100,
				padding: "16px 24px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				background: scrolled ? "rgba(13,13,20,0.85)" : "transparent",
				backdropFilter: scrolled ? "blur(16px)" : "none",
				borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
				transition: "all 0.3s ease",
			}}
		>
			{/* Logo */}
			<a
				href="#hero"
				style={{
					fontFamily: "ClashDisplay, Inter, sans-serif",
					fontWeight: 700,
					fontSize: "1.25rem",
					color: "#EDEDED",
					textDecoration: "none",
					letterSpacing: "-0.02em",
				}}
			>
				hp<span style={{ color: "#7B6EF6" }}>.</span>
			</a>

			{/* Desktop links */}
			<div style={{ display: "flex", gap: "32px" }} className="hidden md:flex">
				{navLinks.map((link) => (
					<a
						key={link.label}
						href={link.href}
						style={{
							color: "#8888A0",
							textDecoration: "none",
							fontSize: "0.875rem",
							fontWeight: 500,
							transition: "color 0.2s ease",
						}}
						onMouseEnter={(e) => (e.currentTarget.style.color = "#EDEDED")}
						onMouseLeave={(e) => (e.currentTarget.style.color = "#8888A0")}
					>
						{link.label}
					</a>
				))}
			</div>

			{/* Resume button */}
			<a
				href="/assets/resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className="hidden md:block"
				style={{
					padding: "8px 20px",
					border: "1px solid rgba(123,110,246,0.4)",
					borderRadius: "8px",
					color: "#7B6EF6",
					fontSize: "0.875rem",
					fontWeight: 500,
					textDecoration: "none",
					transition: "all 0.2s ease",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.background = "rgba(123,110,246,0.1)";
					e.currentTarget.style.borderColor = "#7B6EF6";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.background = "transparent";
					e.currentTarget.style.borderColor = "rgba(123,110,246,0.4)";
				}}
			>
				Resume
			</a>

			{/* Mobile hamburger */}
			<button
				type="button"
				className="md:hidden"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Toggle menu"
				style={{
					background: "none",
					border: "none",
					cursor: "pointer",
					padding: "4px",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
					{([0, 1, 2] as const).map((i) => (
						<motion.span
							key={i}
							animate={
								menuOpen
									? i === 0
										? { rotate: 45, y: 7 }
										: i === 1
											? { opacity: 0 }
											: { rotate: -45, y: -7 }
									: { rotate: 0, y: 0, opacity: 1 }
							}
							style={{
								display: "block",
								width: "22px",
								height: "2px",
								background: "#EDEDED",
								borderRadius: "2px",
							}}
						/>
					))}
				</div>
			</button>

			{/* Mobile menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						style={{
							position: "absolute",
							top: "100%",
							left: 0,
							right: 0,
							background: "rgba(13,13,20,0.97)",
							backdropFilter: "blur(16px)",
							borderBottom: "1px solid rgba(255,255,255,0.06)",
							padding: "20px 24px",
							display: "flex",
							flexDirection: "column",
							gap: "20px",
						}}
					>
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								onClick={() => setMenuOpen(false)}
								style={{
									color: "#8888A0",
									textDecoration: "none",
									fontSize: "1rem",
									fontWeight: 500,
								}}
							>
								{link.label}
							</a>
						))}
						<a
							href="/assets/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								color: "#7B6EF6",
								textDecoration: "none",
								fontSize: "1rem",
								fontWeight: 500,
							}}
						>
							Resume ↗
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
