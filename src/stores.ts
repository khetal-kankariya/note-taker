import { writable, type Writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

let localnote: TNote[] = [
	{
		id: uuidv4(),
		index: 0,
		colIndex: 1,
		type: 'note',
		title: 'foo note',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officia, voluptatum quibusdam soluta itaque qui. Ipsum architecto dolore sunt dolorum?',
		timeCreated: new Date(2024, 4, 15, 0, 0, 0).toLocaleTimeString(),
		timeModified: new Date(2024, 4, 15, 12, 0, 0).toLocaleDateString()
	},
	{
		id: uuidv4(),
		index: 1,
		colIndex: 2,
		type: 'list',
		title: 'foo list',
		content: ['1', '2', '3'],
		timeCreated: new Date(2024, 4, 15, 0, 1, 0).toLocaleTimeString(),
		timeModified: new Date(2024, 4, 15, 12, 1, 0).toLocaleDateString()
	},
	{
		id: uuidv4(),
		index: 2,
		colIndex: 3,
		type: 'table',
		title: 'foo table',
		content: [
			['11', '12', '13'],
			['21', '22', '23'],
			['31', '32', '33']
		],
		timeCreated: new Date(2024, 4, 15, 0, 2, 0).toLocaleTimeString(),
		timeModified: new Date(2024, 4, 15, 12, 2, 0).toLocaleDateString()
	},
	{
		id: uuidv4(),
		index: 3,
		colIndex: 4,
		type: 'todo',
		title: 'foo todo',
		content: ['1', '2', '3'],
		timeCreated: new Date(2024, 4, 15, 0, 3, 0).toLocaleTimeString(),
		timeModified: new Date(2024, 4, 15, 12, 3, 0).toLocaleDateString()
	}
];

export let notes: Writable<TNote[]> = writable(localnote);
