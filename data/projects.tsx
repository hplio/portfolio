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
			"Mental wellness app with mood tracking, soul compass, and guided journeys. Built with Flutter, GetX, and Supabase.",
		tags: ["Flutter", "GetX", "Supabase", "Firebase"],
		liveUrl: "#",
		githubUrl: "#",
		featured: true,
	},
	{
		id: 2,
		title: "WellTek",
		description:
			"IoT health monitoring platform with real-time MQTT data streaming, push notifications, and AWS EC2 deployment.",
		tags: ["Node.js", "MQTT", "AWS EC2", "Flutter", "Redis"],
		liveUrl: "#",
		githubUrl: "#",
		featured: true,
	},
	{
		id: 3,
		title: "Dabbawala",
		description:
			"Full-stack tiffin delivery platform with OSRM road routing, delivery assignment, and real-time order tracking.",
		tags: ["NestJS", "Prisma", "PostgreSQL", "Flutter", "OSRM"],
		liveUrl: "#",
		githubUrl: "#",
		featured: true,
	},
];
