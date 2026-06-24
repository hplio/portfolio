"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
	const glowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (window.innerWidth < 768) return;

		const glow = glowRef.current;
		if (!glow) return;

		let rafId: number;
		let mouseX = window.innerWidth / 2;
		let mouseY = window.innerHeight / 2;
		let currentX = mouseX;
		let currentY = mouseY;

		const onMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};

		window.addEventListener("mousemove", onMove);

		function animate() {
			currentX += (mouseX - currentX) * 0.08;
			currentY += (mouseY - currentY) * 0.08;
			if (glow) {
				glow.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
			}
			rafId = requestAnimationFrame(animate);
		}

		animate();

		return () => {
			window.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(rafId);
		};
	}, []);

	return (
		<div
			ref={glowRef}
			aria-hidden="true"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "400px",
				height: "400px",
				borderRadius: "50%",
				background:
					"radial-gradient(circle, rgba(123,110,246,0.06) 0%, transparent 65%)",
				pointerEvents: "none",
				zIndex: 0,
				willChange: "transform",
			}}
		/>
	);
}
