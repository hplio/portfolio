"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { socials } from "@/lib/socials";

const FORMSPREE_ID = "mgojoknl";

const inputStyle = {
	width: "100%",
	padding: "12px 16px",
	background: "rgba(255,255,255,0.04)",
	border: "1px solid rgba(255,255,255,0.08)",
	borderRadius: "10px",
	color: "#EDEDED",
	fontSize: "0.9rem",
	outline: "none",
	transition: "border-color 0.2s",
	fontFamily: "Inter, sans-serif",
} as React.CSSProperties;

export default function Contact() {
	const ref = useScrollAnimation();
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
		"idle",
	);

	const handleSubmit = async () => {
		if (!form.name || !form.email || !form.message) return;
		setStatus("sending");

		try {
			const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					message: form.message,
				}),
			});
			if (res.ok) {
				setStatus("sent");
				setForm({ name: "", email: "", message: "" });
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
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
				{/* Header */}
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
						Open to freelance projects, collaborations, or a chat about tech and
						embedded systems.
					</p>
				</div>

				{/* Success */}
				{status === "sent" ? (
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						className="glass"
						style={{ padding: "56px 32px", textAlign: "center" }}
					>
						<div
							style={{
								width: "48px",
								height: "48px",
								borderRadius: "50%",
								background: "rgba(99,246,152,0.1)",
								border: "1px solid rgba(99,246,152,0.3)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								margin: "0 auto 16px",
								fontSize: "1.2rem",
								color: "#63F698",
							}}
						>
							✓
						</div>
						<p
							style={{
								color: "#EDEDED",
								fontWeight: 600,
								marginBottom: "8px",
								fontSize: "1.1rem",
							}}
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
										fontWeight: 500,
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
									style={inputStyle}
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
										fontWeight: 500,
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
									style={inputStyle}
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
										fontWeight: 500,
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
									style={{ ...inputStyle, resize: "vertical" }}
									onFocus={(e) =>
										(e.target.style.borderColor = "rgba(123,110,246,0.5)")
									}
									onBlur={(e) =>
										(e.target.style.borderColor = "rgba(255,255,255,0.08)")
									}
								/>
							</div>

							{status === "error" && (
								<p
									style={{
										fontSize: "0.8rem",
										color: "#F66363",
										textAlign: "center",
									}}
								>
									Something went wrong. Email me directly at{" "}
									<a href={socials.emailUrl} style={{ color: "#7B6EF6" }}>
										{socials.email}
									</a>
								</p>
							)}

							<button
								type="button"
								onClick={handleSubmit}
								disabled={status === "sending"}
								style={{
									width: "100%",
									padding: "14px",
									background:
										status === "sending" ? "rgba(123,110,246,0.5)" : "#7B6EF6",
									border: "none",
									borderRadius: "10px",
									color: "#fff",
									fontWeight: 600,
									fontSize: "0.95rem",
									cursor: status === "sending" ? "not-allowed" : "pointer",
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

				{/* Social links */}
				<div
					className="fade-up"
					style={{
						display: "flex",
						gap: "24px",
						justifyContent: "center",
						marginTop: "40px",
						flexWrap: "wrap",
					}}
				>
					{[
						{ label: "GitHub", url: socials.github },
						{ label: "LinkedIn", url: socials.linkedin },
						{ label: "Email", url: socials.emailUrl },
					].map((link) => (
						<a
							key={link.label}
							href={link.url}
							target={link.label !== "Email" ? "_blank" : undefined}
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
