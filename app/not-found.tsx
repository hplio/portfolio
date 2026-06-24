"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
	return (
		<main
			style={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "0 24px",
				textAlign: "center",
				background: "var(--bg-primary)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Background glow */}
			<div
				style={{
					position: "absolute",
					top: "40%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "500px",
					height: "500px",
					background:
						"radial-gradient(circle, rgba(123,110,246,0.07) 0%, transparent 70%)",
					pointerEvents: "none",
				}}
			/>

			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				style={{ position: "relative", zIndex: 1 }}
			>
				{/* 404 big number */}
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					style={{
						fontFamily: "ClashDisplay, Inter, sans-serif",
						fontSize: "clamp(6rem, 20vw, 12rem)",
						fontWeight: 700,
						lineHeight: 1,
						letterSpacing: "-0.04em",
						background:
							"linear-gradient(135deg, rgba(123,110,246,0.3) 0%, rgba(157,147,248,0.15) 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
						marginBottom: "8px",
						userSelect: "none",
					}}
				>
					404
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					style={{
						fontFamily: "ClashDisplay, Inter, sans-serif",
						fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
						fontWeight: 700,
						color: "#EDEDED",
						letterSpacing: "-0.02em",
						marginBottom: "16px",
					}}
				>
					Page not found
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					style={{
						color: "#8888A0",
						fontSize: "1rem",
						lineHeight: 1.7,
						maxWidth: "380px",
						margin: "0 auto 40px",
					}}
				>
					Looks like this page drifted off into the void. Let's get you back.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<Link
						href="/"
						style={{
							display: "inline-block",
							padding: "12px 28px",
							background: "#7B6EF6",
							borderRadius: "10px",
							color: "#fff",
							fontWeight: 600,
							fontSize: "0.95rem",
							textDecoration: "none",
							boxShadow: "0 0 24px rgba(123,110,246,0.3)",
							transition: "all 0.2s ease",
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
						← Back to home
					</Link>
				</motion.div>
			</motion.div>
		</main>
	);
}
