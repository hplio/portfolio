export type Experience = {
	id: number;
	role: string;
	company: string;
	period: string;
	description: string[];
	type: "full-time" | "freelance" | "internship";
};

export const experiences: Experience[] = [
	{
		id: 1,
		role: "Freelance Backend & Flutter Developer",
		company: "Self-employed",
		period: "Dec 2025 – Present",
		description: [
			"Building cross-platform mobile apps with Flutter and RESTful APIs with Node.js, Express.js, and TypeScript",
			"Integrating third-party services including authentication providers, payment gateways, and cloud platforms",
			"Managing full project lifecycle — from requirements and database design to deployment on AWS EC2 and Render",
		],
		type: "freelance",
	},
	{
		id: 2,
		role: "Flutter Developer",
		company: "eSparse Matrix Solutions Pvt. Ltd.",
		period: "Jun 2024 – May 2025",
		description: [
			"Developed and shipped cross-platform mobile applications for Android and iOS using Flutter and Dart",
			"Built a mental wellness platform and a structured 40-day journey app from scratch to production",
			"Implemented responsive UI/UX, third-party API integrations, custom video players, and push notifications",
		],
		type: "full-time",
	},
	{
		id: 3,
		role: "IT Support Intern",
		company: "JCN Technology",
		period: "Oct 2025 – Dec 2025",
		description: [
			"Provided hardware maintenance, data backups, and first/second-line helpdesk support",
			"Handled network setup, cable management, and connectivity troubleshooting",
		],
		type: "internship",
	},
];
