export type Skill = {
	name: string;
	category: "mobile" | "backend" | "devops" | "language";
};

export const skills: Skill[] = [
	// Mobile
	{ name: "Flutter", category: "mobile" },
	{ name: "Dart", category: "mobile" },
	{ name: "GetX", category: "mobile" },
	// Backend
	{ name: "Node.js", category: "backend" },
	{ name: "NestJS", category: "backend" },
	{ name: "Supabase", category: "backend" },
	{ name: "Firebase", category: "backend" },
	{ name: "PostgreSQL", category: "backend" },
	{ name: "Redis", category: "backend" },
	{ name: "MQTT", category: "backend" },
	// DevOps
	{ name: "AWS EC2", category: "devops" },
	{ name: "Docker", category: "devops" },
	{ name: "nginx", category: "devops" },
	// Languages
	{ name: "TypeScript", category: "language" },
	{ name: "C++", category: "language" },
	{ name: "C", category: "language" },
];
