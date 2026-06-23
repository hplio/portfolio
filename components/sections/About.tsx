"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
	{ value: "3+", label: "Apps Shipped" },
	{ value: "2+", label: "Years Experience" },
	{ value: "10+", label: "Tech Stack" },
];

export default function About() {
	const ref = useScrollAnimation();

	return (
		<section id="about" className="section" ref={ref}>
			<div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
						gap: "64px",
						alignItems: "center",
					}}
				>
					<div>
						<div className="fade-up">
							<span
								style={{
									fontSize: "0.75rem",
									letterSpacing: "0.1em",
									color: "#7B6EF6",
									textTransform: "uppercase",
									fontWeight: 600,
									display: "block",
									marginBottom: "16px",
								}}
							>
								About me
							</span>
						</div>

						<h2
							className="fade-up"
							style={{
								fontFamily: "ClashDisplay, Inter, sans-serif",
								fontSize: "clamp(2rem, 4vw, 3rem)",
								fontWeight: 700,
								letterSpacing: "-0.02em",
								lineHeight: 1.15,
								marginBottom: "24px",
								color: "#EDEDED",
							}}
						>
							Building things that
							<br />
							<span
								style={{
									background: "linear-gradient(135deg, #7B6EF6, #9D93F8)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
								}}
							>
								actually ship.
							</span>
						</h2>

						<p
							className="fade-up"
							style={{
								color: "#8888A0",
								lineHeight: 1.8,
								fontSize: "1rem",
								marginBottom: "16px",
							}}
						>
							I'm a Flutter and backend developer from Vadodara, India. I
							graduated in Computer Science & Engineering from GSFC University
							in 2025 and have since shipped apps used by real people — a mental
							wellness platform, an IoT health tracker, and a delivery system.
						</p>

						<p
							className="fade-up"
							style={{
								color: "#8888A0",
								lineHeight: 1.8,
								fontSize: "1rem",
								marginBottom: "32px",
							}}
						>
							Currently exploring embedded systems and C++ while pursuing an MSc
							in Embedded Systems at a German university. I like building close
							to the metal.
						</p>

						<div
							className="fade-up"
							style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}
						>
							{stats.map((stat) => (
								<div key={stat.label}>
									<div
										style={{
											fontFamily: "ClashDisplay, Inter, sans-serif",
											fontSize: "2rem",
											fontWeight: 700,
											color: "#7B6EF6",
											letterSpacing: "-0.02em",
										}}
									>
										{stat.value}
									</div>
									<div
										style={{
											fontSize: "0.85rem",
											color: "#8888A0",
											marginTop: "2px",
										}}
									>
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>

					<div
						className="fade-up"
						style={{ display: "flex", justifyContent: "center" }}
					>
						<div
							style={{
								width: "280px",
								height: "320px",
								borderRadius: "20px",
								background:
									"linear-gradient(135deg, rgba(123,110,246,0.1), rgba(26,26,46,0.8))",
								border: "1px solid rgba(123,110,246,0.2)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								position: "relative",
								overflow: "hidden",
							}}
						>
							{/* Replace with: <Image src="/assets/images/photo.jpg" alt="Harshil Patel" width={280} height={320} style={{ borderRadius: '20px', objectFit: 'cover' }} /> */}
							<span style={{ color: "#8888A0", fontSize: "0.85rem" }}>
								Your photo here
							</span>
							<div
								style={{
									position: "absolute",
									bottom: "-30px",
									right: "-30px",
									width: "120px",
									height: "120px",
									borderRadius: "50%",
									background: "rgba(123,110,246,0.15)",
									filter: "blur(30px)",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
