"use client";

import { skills } from "@/data/skills";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categoryLabel: Record<string, string> = {
	mobile: "Mobile",
	backend: "Backend",
	devops: "DevOps",
	language: "Languages",
};

const categoryColor: Record<string, string> = {
	mobile: "rgba(123,110,246,0.12)",
	backend: "rgba(99,210,246,0.10)",
	devops: "rgba(246,182,99,0.10)",
	language: "rgba(99,246,152,0.10)",
};

const categoryAccent: Record<string, string> = {
	mobile: "#7B6EF6",
	backend: "#63D2F6",
	devops: "#F6B663",
	language: "#63F698",
};

const categories = ["mobile", "backend", "devops", "language"];

export default function Skills() {
	const ref = useScrollAnimation();

	return (
		<section
			id="skills"
			className="section"
			ref={ref}
			style={{ background: "rgba(18,18,28,0.5)" }}
		>
			<div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
				<div
					className="fade-up"
					style={{ textAlign: "center", marginBottom: "64px" }}
				>
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
						Tech Stack
					</span>
					<h2
						style={{
							fontFamily: "ClashDisplay, Inter, sans-serif",
							fontSize: "clamp(2rem, 4vw, 3rem)",
							fontWeight: 700,
							letterSpacing: "-0.02em",
							color: "#EDEDED",
						}}
					>
						What I work with
					</h2>
				</div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
						gap: "24px",
					}}
				>
					{categories.map((cat) => (
						<div
							key={cat}
							className="fade-up glass"
							style={{ padding: "24px" }}
						>
							<h3
								style={{
									fontSize: "0.75rem",
									letterSpacing: "0.08em",
									textTransform: "uppercase",
									color: categoryAccent[cat],
									fontWeight: 600,
									marginBottom: "16px",
								}}
							>
								{categoryLabel[cat]}
							</h3>
							<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
								{skills
									.filter((s) => s.category === cat)
									.map((skill) => (
										<span
											key={skill.name}
											role="img"
											aria-label={skill.name}
											style={{
												padding: "6px 14px",
												background: categoryColor[cat],
												border: `1px solid ${categoryAccent[cat]}22`,
												borderRadius: "100px",
												fontSize: "0.8rem",
												color: "#EDEDED",
												fontWeight: 500,
												transition: "all 0.2s ease",
												cursor: "default",
												display: "inline-block",
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.borderColor = categoryAccent[cat];
												e.currentTarget.style.color = categoryAccent[cat];
												e.currentTarget.style.transform = "translateY(-2px)";
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.borderColor = `${categoryAccent[cat]}22`;
												e.currentTarget.style.color = "#EDEDED";
												e.currentTarget.style.transform = "translateY(0)";
											}}
										>
											{skill.name}
										</span>
									))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
