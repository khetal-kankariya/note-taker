// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from '@prisma/client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	export type NoteMode = 'note' | 'draw' | 'list' | 'todo' | 'image' | 'table' | 'audio' | 'more';

	type dbNote = {
		id: number;
		title: string;
		content: string;
		creation_time: Date;
		modification_time: Date;
	};

	type TNote = {
		id: string;
		// timeCreated: string;
		// timeModified: string;
		title: string;
		index: number;
		colIndex: number;
	} & (
		| {
				type: 'note';
				content: string;
		  }
		| {
				type: 'list' | 'todo';
				content: string[];
		  }
		| {
				type: 'table';
				content: string[][];
		  }
	);

	var prisma: PrismaClient;
}

export {};
