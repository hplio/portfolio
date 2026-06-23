"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function ParticleCanvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const isMobile = window.innerWidth < 768;
		const PARTICLE_COUNT = isMobile ? 40 : 80;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		type Particle = {
			x: number;
			y: number;
			vx: number;
			vy: number;
			size: number;
			opacity: number;
		};

		const particles: Particle[] = Array.from(
			{ length: PARTICLE_COUNT },
			() => ({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.3,
				vy: (Math.random() - 0.5) * 0.3,
				size: Math.random() * 1.5 + 0.5,
				opacity: Math.random() * 0.4 + 0.1,
			}),
		);

		let animId: number;

		function draw() {
			ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;

				if (p.x < 0) p.x = canvas!.width;
				if (p.x > canvas!.width) p.x = 0;
				if (p.y < 0) p.y = canvas!.height;
				if (p.y > canvas!.height) p.y = 0;

				ctx!.beginPath();
				ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx!.fillStyle = `rgba(123, 110, 246, ${p.opacity})`;
				ctx!.fill();
			}

			if (!isMobile) {
				for (let i = 0; i < particles.length; i++) {
					for (let j = i + 1; j < particles.length; j++) {
						const a = particles[i];
						const b = particles[j];
						const dist = Math.hypot(a.x - b.x, a.y - b.y);
						if (dist < 100) {
							ctx!.beginPath();
							ctx!.moveTo(a.x, a.y);
							ctx!.lineTo(b.x, b.y);
							ctx!.strokeStyle = `rgba(123, 110, 246, ${0.08 * (1 - dist / 100)})`;
							ctx!.lineWidth = 0.5;
							ctx!.stroke();
						}
					}
				}
			}

			animId = requestAnimationFrame(draw);
		}

		draw();

		const onResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		window.addEventListener("resize", onResize);

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "absolute",
				inset: 0,
				width: "100%",
				height: "100%",
				pointerEvents: "none",
			}}
		/>
	);
}

const containerVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: "easeOut" },
	},
};

export default function Hero() {
	return (
		<section
			id="hero"
			style={{
				position: "relative",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
				padding: "0 24px",
			}}
		>
			<ParticleCanvas />

			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "600px",
					height: "600px",
					background:
						"radial-gradient(circle, rgba(123,110,246,0.08) 0%, transparent 70%)",
					pointerEvents: "none",
				}}
			/>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				style={{
					position: "relative",
					zIndex: 1,
					textAlign: "center",
					maxWidth: "800px",
					width: "100%",
				}}
			>
				<motion.div variants={itemVariants}>
					<span
						style={{
							display: "inline-block",
							padding: "6px 16px",
							border: "1px solid rgba(123,110,246,0.3)",
							borderRadius: "100px",
							fontSize: "0.8rem",
							color: "#7B6EF6",
							letterSpacing: "0.08em",
							marginBottom: "24px",
							background: "rgba(123,110,246,0.06)",
						}}
					>
						Available for freelance & full-time
					</span>
				</motion.div>

				<motion.h1
					variants={itemVariants}
					style={{
						fontFamily: "ClashDisplay, Inter, sans-serif",
						fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
						fontWeight: 700,
						lineHeight: 1.05,
						letterSpacing: "-0.03em",
						marginBottom: "16px",
						color: "#EDEDED",
					}}
				>
					Harshil Patel
				</motion.h1>

				<motion.h2
					variants={itemVariants}
					style={{
						fontFamily: "ClashDisplay, Inter, sans-serif",
						fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
						fontWeight: 600,
						letterSpacing: "-0.02em",
						marginBottom: "24px",
						background: "linear-gradient(135deg, #7B6EF6 0%, #9D93F8 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
					}}
				>
					Flutter & Backend Developer
				</motion.h2>

				<motion.p
					variants={itemVariants}
					style={{
						fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
						color: "#8888A0",
						lineHeight: 1.7,
						maxWidth: "560px",
						margin: "0 auto 40px",
					}}
				>
					I build elegant mobile apps and scalable backends. From IoT platforms
					to mental wellness apps — turning ideas into shipped products.
				</motion.p>

				<motion.div
					variants={itemVariants}
					style={{
						display: "flex",
						gap: "16px",
						justifyContent: "center",
						flexWrap: "wrap",
					}}
				>
					<a
						href="#projects"
						style={{
							padding: "12px 28px",
							background: "#7B6EF6",
							borderRadius: "10px",
							color: "#fff",
							fontWeight: 600,
							fontSize: "0.95rem",
							textDecoration: "none",
							transition: "all 0.2s ease",
							boxShadow: "0 0 24px rgba(123,110,246,0.3)",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = "translateY(-2px)";
							e.currentTarget.style.boxShadow =
								"0 0 36px rgba(123,110,246,0.45)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = "translateY(0)";
							e.currentTarget.style.boxShadow =
								"0 0 24px rgba(123,110,246,0.3)";
						}}
					>
						View Projects
					</a>
					<a
						href="#contact"
						style={{
							padding: "12px 28px",
							border: "1px solid rgba(255,255,255,0.1)",
							borderRadius: "10px",
							color: "#EDEDED",
							fontWeight: 600,
							fontSize: "0.95rem",
							textDecoration: "none",
							transition: "all 0.2s ease",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.borderColor = "rgba(123,110,246,0.4)";
							e.currentTarget.style.transform = "translateY(-2px)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
							e.currentTarget.style.transform = "translateY(0)";
						}}
					>
						Get in touch
					</a>
				</motion.div>

				<motion.div variants={itemVariants} style={{ marginTop: "64px" }}>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
						style={{
							width: "20px",
							height: "32px",
							border: "2px solid rgba(255,255,255,0.15)",
							borderRadius: "10px",
							margin: "0 auto",
							display: "flex",
							justifyContent: "center",
							paddingTop: "6px",
						}}
					>
						<div
							style={{
								width: "3px",
								height: "6px",
								background: "#7B6EF6",
								borderRadius: "2px",
							}}
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
