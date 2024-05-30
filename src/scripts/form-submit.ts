import { v4 as uuidv4 } from 'uuid';
import { notes } from '@src/stores';

export default function form_submit(
	e: SubmitEvent & {
		currentTarget: EventTarget & HTMLFormElement;
	}
) {
	e.preventDefault();

	const form = e.currentTarget;
	const formData = new FormData(form);

	let new_note: TNote = {
		id: uuidv4(),
		index: 0,
		type: 'note',
		title: formData.get('title') as string,
		content: formData.get('content') as string,
		timeCreated: new Date().toDateString(),
		timeModified: new Date().toDateString()
	};

	notes.update((n) => {
		return [new_note, ...n];
	});

	notes.subscribe((n) => {
		console.log(n);
	});

	notes.subscribe((n) => window.localStorage.setItem('notes', JSON.stringify(n)));

	form.reset();
}
