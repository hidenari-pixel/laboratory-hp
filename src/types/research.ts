import type { Timestamp } from "firebase/firestore";

export type ResearchResponse = {
	id: string;
	description: string;
	title: string;
	links: string[];
	createdAt: Timestamp;
};

export type Research = {
	id: string;
	description: string;
	title: string;
	links: string[];
};
