export type Skill = {
	name: string;
	category: "mobile" | "backend" | "devops" | "language";
};

export const skills: Skill[] = [
	// Mobile
	{ name: "Flutter", category: "mobile" },
	{ name: "Dart", category: "mobile" },
	{ name: "iOS & Android", category: "mobile" },
	// Backend
	{ name: "Node.js", category: "backend" },
	{ name: "Express.js", category: "backend" },
	{ name: "REST APIs", category: "backend" },
	{ name: "PostgreSQL", category: "backend" },
	{ name: "Supabase", category: "backend" },
	{ name: "Firebase", category: "backend" },
	{ name: "Redis", category: "backend" },
	{ name: "MQTT", category: "backend" },
	// DevOps
	{ name: "Docker", category: "devops" },
	{ name: "Nginx", category: "devops" },
	{ name: "AWS EC2", category: "devops" },
	{ name: "Render", category: "devops" },
	{ name: "PM2", category: "devops" },
	// Languages
	{ name: "TypeScript", category: "language" },
	{ name: "C", category: "language" },
	{ name: "C++", category: "language" },
	{ name: "SQL", category: "language" },
];
