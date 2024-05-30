import { readable, writable, type Writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

let default_note: TNote[] = [
	{
		id: uuidv4(),
		index: 0,
		type: 'note',
		title: 'upcoming features',
		content:
			'actual working (adding, removing, editing), list view, list and other modes, other functionalities (searching, sorting)',
		timeCreated: new Date(2024, 4, 15).toDateString(),
		timeModified: new Date(2024, 5, 23).toDateString()
	}
];

export let notes: Writable<TNote[]> = writable([]);
