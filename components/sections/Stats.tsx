"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
	value: number;
	suffix: string;
	label: string;
	description: string;
	accent: string;
};

const stats: Stat[] = [
	{
		value: 5,
		suffix: "+",
		label: "Projects Shipped",
		description: "From IoT backends to AI meeting platforms in production",
		accent: "#7B6EF6",
	},
	{
		value: 2,
		suffix: "+",
		label: "Years Building",
		description: "Flutter apps, Node.js backends, and full-stack web",
		accent: "#63D2F6",
	},
	{
		value: 15,
		suffix: "+",
		label: "Technologies",
		description: "Mobile, frontend, backend, devops across the full stack",
		accent: "#F6B663",
	},
	{
		value: 3,
		suffix: "",
		label: "Client Apps Live",
		description: "Real users, real production Souloxy, WellTek, Dabbawala",
		accent: "#63F698",
	},
];

// Hook: counts from 0 → target when element enters viewport
function useCountUp(target: number, duration = 1600) {
	const [count, setCount] = useState(0);
	const [started, setStarted] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !started) {
					setStarted(true);
				}
			},
			{ threshold: 0.6 },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [started]);

	useEffect(() => {
		if (!started) return;

		let startTime: number | null = null;
		let animId: number;

		function step(timestamp: number) {
			if (!startTime) startTime = timestamp;
			const elapsed = timestamp - startTime;
			const progress = Math.min(elapsed / duration, 1);
			// Ease out cubic
			const eased = 1 - (1 - progress) ** 3;
			setCount(Math.floor(eased * target));
			if (progress < 1) {
				animId = requestAnimationFrame(step);
			} else {
				setCount(target);
			}
		}

		animId = requestAnimationFrame(step);
		return () => cancelAnimationFrame(animId);
	}, [started, target, duration]);

	return { count, ref };
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
	const { count, ref } = useCountUp(stat.value, 1400 + index * 100);

	return (
		<div
			ref={ref}
			style={{
				padding: "32px 28px",
				background: "rgba(255,255,255,0.02)",
				border: "1px solid rgba(255,255,255,0.06)",
				borderRadius: "16px",
				position: "relative",
				overflow: "hidden",
				transition: "border-color 0.3s ease, transform 0.3s ease",
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.borderColor = `${stat.accent}40`;
				e.currentTarget.style.transform = "translateY(-4px)";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
				e.currentTarget.style.transform = "translateY(0)";
			}}
		>
			{/* Top accent line */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: "2px",
					background: `linear-gradient(90deg, ${stat.accent}, transparent)`,
					opacity: 0.7,
				}}
			/>

			{/* Background glow */}
			<div
				style={{
					position: "absolute",
					top: "-20px",
					right: "-20px",
					width: "100px",
					height: "100px",
					borderRadius: "50%",
					background: `radial-gradient(circle, ${stat.accent}12, transparent)`,
					pointerEvents: "none",
				}}
			/>

			{/* Counter */}
			<div
				style={{
					fontFamily: "ClashDisplay, Inter, sans-serif",
					fontSize: "clamp(2.8rem, 5vw, 3.8rem)",
					fontWeight: 700,
					letterSpacing: "-0.03em",
					lineHeight: 1,
					color: stat.accent,
					marginBottom: "8px",
					fontVariantNumeric: "tabular-nums",
				}}
			>
				{count}
				<span style={{ fontSize: "60%", opacity: 0.8 }}>{stat.suffix}</span>
			</div>

			{/* Label */}
			<div
				style={{
					fontFamily: "ClashDisplay, Inter, sans-serif",
					fontSize: "1rem",
					fontWeight: 600,
					color: "#EDEDED",
					marginBottom: "10px",
					letterSpacing: "-0.01em",
				}}
			>
				{stat.label}
			</div>

			{/* Description */}
			<p
				style={{
					fontSize: "0.8rem",
					color: "#8888A0",
					lineHeight: 1.65,
					margin: 0,
				}}
			>
				{stat.description}
			</p>
		</div>
	);
}

export default function Stats() {
	return (
		<section
			style={{
				padding: "80px 0",
				borderTop: "1px solid rgba(255,255,255,0.04)",
				borderBottom: "1px solid rgba(255,255,255,0.04)",
			}}
		>
			<div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
				{/* Header */}
				<div style={{ textAlign: "center", marginBottom: "56px" }}>
					<span
						style={{
							fontSize: "0.75rem",
							letterSpacing: "0.1em",
							color: "#7B6EF6",
							textTransform: "uppercase",
							fontWeight: 600,
							display: "block",
							marginBottom: "12px",
						}}
					>
						By the numbers
					</span>
					<h2
						style={{
							fontFamily: "ClashDisplay, Inter, sans-serif",
							fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
							fontWeight: 700,
							letterSpacing: "-0.02em",
							color: "#EDEDED",
						}}
					>
						A quick snapshot
					</h2>
				</div>

				{/* Grid */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
						gap: "20px",
					}}
				>
					{stats.map((stat, i) => (
						<StatCard key={stat.label} stat={stat} index={i} />
					))}
				</div>

				{/* Bottom tagline */}
				<p
					style={{
						textAlign: "center",
						marginTop: "48px",
						color: "#8888A0",
						fontSize: "0.875rem",
						lineHeight: 1.7,
					}}
				>
					Currently studying{" "}
					<span style={{ color: "#EDEDED", fontWeight: 500 }}>
						Embedded Systems & C++
					</span>{" "}
				
				</p>
			</div>
		</section>
	);
}
