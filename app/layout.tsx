import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Harshil Patel - Mobile, Web & Backend Developer",
	description:
		"Full-stack developer specializing in Flutter, Node.js, and embedded systems. Building elegant mobile apps and scalable backends.",
	keywords: [
		"Flutter developer",
		"Backend developer",
		"Node.js",
		"Mobile app",
		"Vadodara",
	],
	authors: [{ name: "Harshil Patel" }],
	openGraph: {
		title: "Harshil Patel - Mobile, Web & Backend Developer",
		description: "Building elegant apps and scalable backends.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://api.fontshare.com" />
				<link
					href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
