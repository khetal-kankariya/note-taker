import { notes } from '@src/stores';

export let init_load = () => {
	notes.set(JSON.parse(window.localStorage.getItem('notes') || '[]'));

	notes.subscribe((n) => {
		console.log(n);
	});
};
