import type { Timestamp } from "firebase/firestore";

export type EventResponse = {
	id: string;
	createdAt: Timestamp;
	date: Timestamp;
	description: string;
	links: string[];
	title: string;
};

export type Event = {
	description: string;
	links: string[];
	title: string;
	id: string;
	imageUrl: string;
	date: string;
};
