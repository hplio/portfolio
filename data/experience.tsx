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
		role: "Flutter Developer",
		company: "eSparse Matrix Solutions",
		period: "2024 – 2025",
		description: [
			"Built and shipped multiple Flutter apps including Souloxy (mental wellness) and Anchored (40-day journey app)",
			"Implemented GetX state management, Supabase integration, and custom animations",
			"Worked on push notifications, video players, and real-time chat features",
		],
		type: "full-time",
	},
	{
		id: 2,
		role: "Freelance Backend & Flutter Developer",
		company: "Independent",
		period: "2023 – Present",
		description: [
			"Developed WellTek IoT platform with MQTT/Node.js backend deployed on AWS EC2",
			"Built Dabbawala full-stack tiffin delivery app with NestJS, Prisma, and OSRM routing",
			"Delivered end-to-end solutions from database design to mobile frontend",
		],
		type: "freelance",
	},
];
