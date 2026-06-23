"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Projects() {
	const ref = useScrollAnimation();

	return (
		<section id="projects" className="section" ref={ref}>
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
						Work
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
						Projects I've shipped
					</h2>
				</div>

				{/* Cards */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: "24px",
					}}
				>
					{projects.map((project, i) => (
						<motion.div
							key={project.id}
							className="fade-up glass"
							whileHover={{ y: -6 }}
							transition={{ duration: 0.25, ease: "easeOut" }}
							style={{
								padding: "28px",
								cursor: "pointer",
								position: "relative",
								overflow: "hidden",
							}}
						>
							{/* Glow on hover accent */}
							<div
								style={{
									position: "absolute",
									top: "-40px",
									right: "-40px",
									width: "120px",
									height: "120px",
									background:
										"radial-gradient(circle, rgba(123,110,246,0.1), transparent)",
									borderRadius: "50%",
									pointerEvents: "none",
								}}
							/>

							{/* Project number */}
							<span
								style={{
									fontSize: "0.7rem",
									color: "#7B6EF6",
									fontWeight: 600,
									letterSpacing: "0.1em",
									opacity: 0.6,
								}}
							>
								0{i + 1}
							</span>

							{/* Title */}
							<h3
								style={{
									fontFamily: "ClashDisplay, Inter, sans-serif",
									fontSize: "1.4rem",
									fontWeight: 700,
									letterSpacing: "-0.02em",
									color: "#EDEDED",
									margin: "8px 0 12px",
								}}
							>
								{project.title}
							</h3>

							{/* Description */}
							<p
								style={{
									color: "#8888A0",
									fontSize: "0.9rem",
									lineHeight: 1.7,
									marginBottom: "20px",
								}}
							>
								{project.description}
							</p>

							{/* Tags */}
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
									gap: "6px",
									marginBottom: "24px",
								}}
							>
								{project.tags.map((tag) => (
									<span
										key={tag}
										style={{
											padding: "4px 10px",
											background: "rgba(123,110,246,0.08)",
											border: "1px solid rgba(123,110,246,0.15)",
											borderRadius: "100px",
											fontSize: "0.72rem",
											color: "#9D93F8",
											fontWeight: 500,
										}}
									>
										{tag}
									</span>
								))}
							</div>

							{/* Links */}
							<div style={{ display: "flex", gap: "16px" }}>
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											fontSize: "0.8rem",
											color: "#8888A0",
											textDecoration: "none",
											fontWeight: 500,
											transition: "color 0.2s",
										}}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = "#EDEDED")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "#8888A0")
										}
									>
										GitHub ↗
									</a>
								)}
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											fontSize: "0.8rem",
											color: "#7B6EF6",
											textDecoration: "none",
											fontWeight: 500,
											transition: "color 0.2s",
										}}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = "#9D93F8")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "#7B6EF6")
										}
									>
										Live Demo ↗
									</a>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
