export type Project = {
	id: number;
	title: string;
	description: string;
	tags: string[];
	liveUrl?: string;
	githubUrl?: string;
	featured: boolean;
};

export const projects: Project[] = [
	{
		id: 1,
		title: "Souloxy",
		description:
			"Student mental wellness platform with wellbeing services, appointment booking, mood tracking, AI chat, and integrated Razorpay payments.",
		tags: ["Flutter", "Dart", "Supabase", "Firebase", "Razorpay"],
		liveUrl: "#",
		githubUrl: "#",
		featured: true,
	},
	{
		id: 2,
		title: "WellTek",
		description:
			"IoT health monitoring backend with real-time MQTT device communication, reconnect logic, FCM push notifications, and production deployment on AWS EC2.",
		tags: ["Node.js", "TypeScript", "MQTT", "Firebase", "AWS EC2"],
		liveUrl: "#",
		githubUrl: "#",
		featured: true,
	},
	{
		id: 3,
		title: "Dabbawala",
		description:
			"Full-stack tiffin delivery platform with subscription management, IST-aware scheduling, delivery assignment, and real-time order tracking.",
		tags: ["Node.js", "TypeScript", "PostgreSQL", "Flutter", "Redis"],
		liveUrl: "#",
		githubUrl: "#",
		featured: true,
	},
	{
		id: 4,
		title: "Ecomly",
		description:
			"Scalable e-commerce mobile app with secure authentication, real-time product catalogue, ratings, reviews, and end-to-end order tracking.",
		tags: ["Flutter", "Dart", "Firebase", "REST API"],
		liveUrl: "#",
		githubUrl: "#",
		featured: false,
	},
];
