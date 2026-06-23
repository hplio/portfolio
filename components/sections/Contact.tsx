"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
	const ref = useScrollAnimation();
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

	const handleSubmit = async () => {
		setStatus("sending");
		// Add Formspree / EmailJS / Resend logic here
		await new Promise((r) => setTimeout(r, 1000));
		setStatus("sent");
	};

	return (
		<section id="contact" className="section" ref={ref}>
			<div
				style={{
					maxWidth: "640px",
					margin: "0 auto",
					padding: "0 24px",
					textAlign: "center",
				}}
			>
				<div className="fade-up" style={{ marginBottom: "48px" }}>
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
						Let's talk
					</span>
					<h2
						style={{
							fontFamily: "ClashDisplay, Inter, sans-serif",
							fontSize: "clamp(2rem, 4vw, 3rem)",
							fontWeight: 700,
							letterSpacing: "-0.02em",
							color: "#EDEDED",
							marginBottom: "16px",
						}}
					>
						Get in touch
					</h2>
					<p style={{ color: "#8888A0", lineHeight: 1.7 }}>
						Open to freelance projects, collaborations, or just a chat about
						tech and embedded systems.
					</p>
				</div>

				{status === "sent" ? (
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						className="glass"
						style={{ padding: "48px", textAlign: "center" }}
					>
						<div style={{ fontSize: "2rem", marginBottom: "12px" }}>✓</div>
						<p
							style={{ color: "#EDEDED", fontWeight: 600, marginBottom: "8px" }}
						>
							Message sent!
						</p>
						<p style={{ color: "#8888A0", fontSize: "0.875rem" }}>
							I'll get back to you soon.
						</p>
					</motion.div>
				) : (
					<div
						className="fade-up glass"
						style={{ padding: "32px", textAlign: "left" }}
					>
						<div
							style={{ display: "flex", flexDirection: "column", gap: "16px" }}
						>
							<div>
								<label
									htmlFor="name"
									style={{
										fontSize: "0.8rem",
										color: "#8888A0",
										display: "block",
										marginBottom: "8px",
									}}
								>
									Name
								</label>
								<input
									id="name"
									type="text"
									value={form.name}
									onChange={(e) => setForm({ ...form, name: e.target.value })}
									placeholder="Your name"
									style={{
										width: "100%",
										padding: "12px 16px",
										background: "rgba(255,255,255,0.04)",
										border: "1px solid rgba(255,255,255,0.08)",
										borderRadius: "10px",
										color: "#EDEDED",
										fontSize: "0.9rem",
										outline: "none",
										transition: "border-color 0.2s",
									}}
									onFocus={(e) =>
										(e.target.style.borderColor = "rgba(123,110,246,0.5)")
									}
									onBlur={(e) =>
										(e.target.style.borderColor = "rgba(255,255,255,0.08)")
									}
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									style={{
										fontSize: "0.8rem",
										color: "#8888A0",
										display: "block",
										marginBottom: "8px",
									}}
								>
									Email
								</label>
								<input
									id="email"
									type="email"
									value={form.email}
									onChange={(e) => setForm({ ...form, email: e.target.value })}
									placeholder="your@email.com"
									style={{
										width: "100%",
										padding: "12px 16px",
										background: "rgba(255,255,255,0.04)",
										border: "1px solid rgba(255,255,255,0.08)",
										borderRadius: "10px",
										color: "#EDEDED",
										fontSize: "0.9rem",
										outline: "none",
										transition: "border-color 0.2s",
									}}
									onFocus={(e) =>
										(e.target.style.borderColor = "rgba(123,110,246,0.5)")
									}
									onBlur={(e) =>
										(e.target.style.borderColor = "rgba(255,255,255,0.08)")
									}
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									style={{
										fontSize: "0.8rem",
										color: "#8888A0",
										display: "block",
										marginBottom: "8px",
									}}
								>
									Message
								</label>
								<textarea
									id="message"
									value={form.message}
									onChange={(e) =>
										setForm({ ...form, message: e.target.value })
									}
									placeholder="What's on your mind?"
									rows={5}
									style={{
										width: "100%",
										padding: "12px 16px",
										background: "rgba(255,255,255,0.04)",
										border: "1px solid rgba(255,255,255,0.08)",
										borderRadius: "10px",
										color: "#EDEDED",
										fontSize: "0.9rem",
										outline: "none",
										resize: "vertical",
										fontFamily: "Inter, sans-serif",
										transition: "border-color 0.2s",
									}}
									onFocus={(e) =>
										(e.target.style.borderColor = "rgba(123,110,246,0.5)")
									}
									onBlur={(e) =>
										(e.target.style.borderColor = "rgba(255,255,255,0.08)")
									}
								/>
							</div>

							<button
								type="button"
								onClick={handleSubmit}
								disabled={status === "sending"}
								style={{
									width: "100%",
									padding: "14px",
									background: "#7B6EF6",
									border: "none",
									borderRadius: "10px",
									color: "#fff",
									fontWeight: 600,
									fontSize: "0.95rem",
									cursor: status === "sending" ? "not-allowed" : "pointer",
									opacity: status === "sending" ? 0.7 : 1,
									transition: "all 0.2s ease",
									boxShadow: "0 0 24px rgba(123,110,246,0.25)",
								}}
								onMouseEnter={(e) => {
									if (status !== "sending")
										e.currentTarget.style.transform = "translateY(-2px)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "translateY(0)";
								}}
							>
								{status === "sending" ? "Sending..." : "Send message"}
							</button>
						</div>
					</div>
				)}

				<div
					className="fade-up"
					style={{
						display: "flex",
						gap: "24px",
						justifyContent: "center",
						marginTop: "40px",
					}}
				>
					{[
						{ label: "GitHub", url: "https://github.com/yourusername" },
						{ label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
						{ label: "Email", url: "mailto:your@email.com" },
					].map((link) => (
						<a
							key={link.label}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							style={{
								color: "#8888A0",
								fontSize: "0.875rem",
								textDecoration: "none",
								fontWeight: 500,
								transition: "color 0.2s",
							}}
							onMouseEnter={(e) => (e.currentTarget.style.color = "#7B6EF6")}
							onMouseLeave={(e) => (e.currentTarget.style.color = "#8888A0")}
						>
							{link.label} ↗
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
