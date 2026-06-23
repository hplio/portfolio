"use client";

import { experiences } from "@/data/experience";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const typeColor: Record<string, string> = {
	"full-time": "#63D2F6",
	freelance: "#7B6EF6",
	internship: "#63F698",
};

export default function Experience() {
	const ref = useScrollAnimation();

	return (
		<section
			id="experience"
			className="section"
			ref={ref}
			style={{ background: "rgba(18,18,28,0.5)" }}
		>
			<div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
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
						Journey
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
						Experience
					</h2>
				</div>

				<div style={{ position: "relative" }}>
					<div
						style={{
							position: "absolute",
							left: "0",
							top: "8px",
							bottom: "0",
							width: "1px",
							background:
								"linear-gradient(to bottom, rgba(123,110,246,0.4), transparent)",
						}}
					/>

					<div
						style={{ display: "flex", flexDirection: "column", gap: "48px" }}
					>
						{experiences.map((exp) => (
							<div
								key={exp.id}
								className="fade-up"
								style={{ paddingLeft: "32px", position: "relative" }}
							>
								<div
									style={{
										position: "absolute",
										left: "-4px",
										top: "8px",
										width: "9px",
										height: "9px",
										borderRadius: "50%",
										background: "#7B6EF6",
										boxShadow: "0 0 12px rgba(123,110,246,0.5)",
									}}
								/>

								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "12px",
										marginBottom: "8px",
									}}
								>
									<span style={{ fontSize: "0.8rem", color: "#8888A0" }}>
										{exp.period}
									</span>
									<span
										style={{
											padding: "2px 10px",
											background: `${typeColor[exp.type]}15`,
											border: `1px solid ${typeColor[exp.type]}30`,
											borderRadius: "100px",
											fontSize: "0.7rem",
											color: typeColor[exp.type],
											fontWeight: 600,
											textTransform: "capitalize",
										}}
									>
										{exp.type}
									</span>
								</div>

								<h3
									style={{
										fontFamily: "ClashDisplay, Inter, sans-serif",
										fontSize: "1.2rem",
										fontWeight: 700,
										color: "#EDEDED",
										letterSpacing: "-0.01em",
										marginBottom: "4px",
									}}
								>
									{exp.role}
								</h3>

								<p
									style={{
										fontSize: "0.875rem",
										color: "#7B6EF6",
										fontWeight: 500,
										marginBottom: "16px",
									}}
								>
									{exp.company}
								</p>

								<ul
									style={{
										listStyle: "none",
										display: "flex",
										flexDirection: "column",
										gap: "8px",
									}}
								>
									{exp.description.map((point) => (
										<li
											key={point}
											style={{
												fontSize: "0.875rem",
												color: "#8888A0",
												lineHeight: 1.7,
												paddingLeft: "16px",
												position: "relative",
											}}
										>
											<span
												style={{
													position: "absolute",
													left: 0,
													top: "10px",
													width: "4px",
													height: "4px",
													borderRadius: "50%",
													background: "#7B6EF6",
													opacity: 0.5,
												}}
											/>
											{point}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
