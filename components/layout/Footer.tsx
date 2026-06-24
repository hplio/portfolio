import { socials } from "@/lib/socials";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer
			style={{
				borderTop: "1px solid rgba(255,255,255,0.06)",
				padding: "32px 24px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				flexWrap: "wrap",
				gap: "12px",
			}}
		>
			<p style={{ color: "#8888A0", fontSize: "0.8rem" }}>
				Designed & built by{" "}
				<span style={{ color: "#7B6EF6", fontWeight: 600 }}>Harshil Patel</span>{" "}
				· {year}
			</p>
			<div style={{ display: "flex", gap: "20px" }}>
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
							fontSize: "0.75rem",
							textDecoration: "none",
							transition: "color 0.2s",
						}}
						onMouseEnter={(e) => (e.currentTarget.style.color = "#7B6EF6")}
						onMouseLeave={(e) => (e.currentTarget.style.color = "#8888A0")}
					>
						{link.label}
					</a>
				))}
			</div>
		</footer>
	);
}
