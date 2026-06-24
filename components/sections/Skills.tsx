"use client";

import { skills } from "@/data/skills";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Category = "mobile" | "frontend" | "backend" | "devops" | "language";

const categories: Category[] = [
	"mobile",
	"frontend",
	"backend",
	"devops",
	"language",
];

const categoryLabel: Record<Category, string> = {
	mobile: "Mobile",
	frontend: "Frontend",
	backend: "Backend",
	devops: "DevOps",
	language: "Languages",
};

const categoryAccent: Record<Category, string> = {
	mobile: "#7B6EF6",
	frontend: "#F67BB6",
	backend: "#63D2F6",
	devops: "#F6B663",
	language: "#63F698",
};

const categoryBg: Record<Category, { base: string; hover: string }> = {
	mobile: { base: "rgba(123,110,246,0.06)", hover: "rgba(123,110,246,0.14)" },
	frontend: { base: "rgba(246,123,182,0.06)", hover: "rgba(246,123,182,0.14)" },
	backend: { base: "rgba(99,210,246,0.06)", hover: "rgba(99,210,246,0.14)" },
	devops: { base: "rgba(246,182,99,0.06)", hover: "rgba(246,182,99,0.14)" },
	language: { base: "rgba(99,246,152,0.06)", hover: "rgba(99,246,152,0.14)" },
};

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
				{/* Header */}
				<div className="fade-up" style={{ marginBottom: "64px" }}>
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

				{/* Skill rows */}
				<div>
					{categories.map((cat) => (
						<div
							key={cat}
							className="fade-up"
							style={{
								display: "flex",
								alignItems: "flex-start",
								gap: "32px",
								padding: "28px 0",
								borderTop: "1px solid rgba(255,255,255,0.05)",
							}}
						>
							{/* Category label */}
							<div
								style={{
									minWidth: "100px",
									width: "100px",
									flexShrink: 0,
									paddingTop: "9px",
								}}
							>
								<span
									style={{
										fontSize: "0.68rem",
										fontWeight: 700,
										letterSpacing: "0.12em",
										textTransform: "uppercase",
										color: categoryAccent[cat],
									}}
								>
									{categoryLabel[cat]}
								</span>
							</div>

							{/* Chips */}
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
									gap: "10px",
									flex: 1,
								}}
							>
								{skills
									.filter((s) => s.category === cat)
									.map((skill) => (
										<SkillChip
											key={skill.name}
											name={skill.name}
											accent={categoryAccent[cat]}
											bg={categoryBg[cat]}
										/>
									))}
							</div>
						</div>
					))}

					{/* Learning row */}
					<div
						className="fade-up"
						style={{
							borderTop: "1px solid rgba(255,255,255,0.05)",
							padding: "24px 0 0",
							display: "flex",
							alignItems: "center",
							gap: "32px",
						}}
					>
						<div style={{ minWidth: "100px", width: "100px", flexShrink: 0 }}>
							<span
								style={{
									fontSize: "0.68rem",
									fontWeight: 700,
									letterSpacing: "0.12em",
									textTransform: "uppercase",
									color: "#8888A0",
								}}
							>
								Learning
							</span>
						</div>
						<p
							style={{
								color: "#8888A0",
								fontSize: "0.875rem",
								lineHeight: 1.6,
							}}
						>
							STM32 · FreeRTOS · Embedded C diving into low-level systems for
							MSc in Embedded Systems.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function SkillChip({
	name,
	accent,
	bg,
}: {
	name: string;
	accent: string;
	bg: { base: string; hover: string };
}) {
	return (
		<span
			style={{
				display: "inline-block",
				padding: "8px 18px",
				background: bg.base,
				border: `1px solid ${accent}30`,
				borderLeft: `3px solid ${accent}`,
				borderRadius: "8px",
				fontSize: "0.875rem",
				color: "#EDEDED",
				fontWeight: 500,
				transition:
					"background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
				cursor: "default",
				lineHeight: 1,
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.background = bg.hover;
				e.currentTarget.style.color = accent;
				e.currentTarget.style.borderColor = `${accent}60`;
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.background = bg.base;
				e.currentTarget.style.color = "#EDEDED";
				e.currentTarget.style.borderColor = `${accent}30`;
			}}
		>
			{name}
		</span>
	);
}
