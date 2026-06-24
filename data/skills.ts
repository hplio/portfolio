export type Skill = {
	name: string;
	category: "mobile" | "frontend" | "backend" | "devops" | "language";
};

export const skills: Skill[] = [
	// Mobile
	{ name: "Flutter", category: "mobile" },
	{ name: "Dart", category: "mobile" },
	{ name: "iOS & Android", category: "mobile" },
	// Frontend
	{ name: "Next.js", category: "frontend" },
	{ name: "React", category: "frontend" },
	{ name: "Tailwind CSS", category: "frontend" },
	{ name: "Framer Motion", category: "frontend" },
	// Backend
	{ name: "Node.js", category: "backend" },
	{ name: "Express.js", category: "backend" },
	{ name: "tRPC", category: "backend" },
	{ name: "REST APIs", category: "backend" },
	{ name: "PostgreSQL", category: "backend" },
	{ name: "Supabase", category: "backend" },
	{ name: "Firebase", category: "backend" },
	{ name: "Redis", category: "backend" },
	{ name: "MQTT", category: "backend" },
	// DevOps
	{ name: "Nginx", category: "devops" },
	{ name: "AWS EC2", category: "devops" },
	{ name: "Vercel", category: "devops" },
	{ name: "PM2", category: "devops" },
	// Languages
	{ name: "TypeScript", category: "language" },
	{ name: "C", category: "language" },
	{ name: "C++", category: "language" },
	{ name: "SQL", category: "language" },
];
