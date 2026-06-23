export default function Footer() {
	return (
		<footer
			style={{
				borderTop: "1px solid rgba(255,255,255,0.06)",
				padding: "32px 24px",
				textAlign: "center",
			}}
		>
			<p style={{ color: "#8888A0", fontSize: "0.8rem" }}>
				Designed & built by{" "}
				<span style={{ color: "#7B6EF6", fontWeight: 600 }}>Harshil Patel</span>{" "}
				· {new Date().getFullYear()}
			</p>
		</footer>
	);
}
