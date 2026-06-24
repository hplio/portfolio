export type Project = {
	id: number;
	title: string;
	description: string;
	tags: string[];
	liveUrl?: string;
	githubUrl?: string;
	featured: boolean;
	isClientWork?: boolean;
};

export const projects: Project[] = [
	{
		id: 1,
		title: "AiMeet",
		description:
			"AI-powered meeting platform where you can have real-time conversations with an AI agent inside a live video call. Built with Stream Video SDK, OpenAI Realtime API, tRPC, Drizzle ORM, and Neon Postgres featuring AI agents that join your meetings and respond in real time.",
		tags: [
			"Next.js",
			"TypeScript",
			"Stream SDK",
			"OpenAI",
			"tRPC",
			"Drizzle",
			"Neon",
		],
		githubUrl: "https://github.com/hplio/aimeet",
		liveUrl: undefined,
		featured: true,
		isClientWork: false,
	},
	{
		id: 2,
		title: "Ecomly",
		description:
			"Full-stack e-commerce platform with secure authentication, real-time product catalogue, ratings, reviews, and end-to-end order tracking. Built the Flutter mobile app.",
		tags: ["Flutter", "Dart", "Firebase", "REST API"],
		githubUrl: "https://github.com/hplio/Ecommerce",
		liveUrl: undefined,
		featured: true,
		isClientWork: false,
	},
	{
		id: 3,
		title: "Souloxy",
		description:
			"Student mental wellness platform with wellbeing services, appointment booking, mood tracking, AI chat, and integrated Razorpay payments. Client project shipped to production.",
		tags: ["Flutter", "Dart", "Supabase", "Firebase", "Razorpay"],
		liveUrl: undefined,
		githubUrl: undefined,
		featured: true,
		isClientWork: true,
	},
	{
		id: 4,
		title: "WellTek",
		description:
			"IoT health monitoring backend with real-time MQTT device communication, reconnect logic, FCM push notifications, and production deployment on AWS EC2 with nginx SSL. Client project.",
		tags: ["Node.js", "TypeScript", "MQTT", "Firebase", "AWS EC2", "Nginx"],
		liveUrl: undefined,
		githubUrl: undefined,
		featured: true,
		isClientWork: true,
	},
	{
		id: 5,
		title: "Dabbawala",
		description:
			"Full-stack tiffin delivery platform with subscription management, IST-aware scheduling, OSRM road-distance pricing, delivery assignment, and real-time order tracking. Client project.",
		tags: ["Node.js", "TypeScript", "PostgreSQL", "Flutter", "Redis", "OSRM"],
		liveUrl: undefined,
		githubUrl: undefined,
		featured: false,
		isClientWork: true,
	},
];
