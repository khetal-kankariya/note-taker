export default (
	node: HTMLElement,
	params: { modifier: 'alt' | 'ctrl' | 'shift'; key: string; callback: () => void }
) => {
	document.addEventListener('keydown', (event) => {
		// event.preventDefault();
		if (event.ctrlKey && event.key == 'k') event?.preventDefault();

		const paramModifier =
			params.modifier == 'ctrl'
				? 'Control'
				: params.modifier == 'alt'
					? 'Alt'
					: params.modifier == 'shift'
						? 'Shift'
						: 'sumn';

		const modifier = event.ctrlKey
			? 'Control'
			: event.altKey
				? 'Alt'
				: event.shiftKey
					? 'Shift'
					: 'sumn';

		if (event.key.toLowerCase() == params.key && modifier == paramModifier) {
			params.callback();
		}
	});
};
