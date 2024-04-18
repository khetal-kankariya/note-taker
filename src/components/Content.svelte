<script lang="ts">
	import { cn } from '$lib/utils';
	import type { PageData } from '../routes/$types';
	// import { notes } from '../stores';
	import NotesActions from './NotesActions.svelte';
	import SingleNote from './TextNote.svelte';

	let { data }: { data: PageData } = $props();

	let { notes } = data;

	let _notes = notes;
	let _notes__notrendered = $state(_notes);
	const _notes__notrendered__shift = () => {
		_notes__notrendered.shift();
	};
	let displayMode: 'grid' | 'list' = $state('grid');
	let num_cols = $state(4);

	let isHovered = $state(false);

	$effect(() => {
		window.onresize = () => {
			let notes__container =
				document.querySelector('.notes-content') || document.createElement('div');
			let notes__width = notes__container.getBoundingClientRect().width;
			if (notes__width <= 656) {
				num_cols = 2;
			} else if (notes__width <= 992) {
				num_cols = 3;
			} else {
				num_cols = 4;
			}
		};

		// _notes.forEach((_note) => {
		// 	_note.colIndex = (_note.index % num_cols) + 1;
		// });
	});
</script>

<div
	class="notes__container flex w-full flex-col gap-8"
	role="main"
	onmouseenter={() => {
		isHovered = true;
	}}
	onmouseleave={() => {
		isHovered = false;
	}}
>
	<div
		class={`notes-content mx-auto grid h-80 w-[80vw]  gap-4 overflow-y-scroll`}
		style={`grid-template-columns: repeat(${num_cols}, 1fr);`}
	>
		<!-- {#key num_cols}
			{#each { length: num_cols } as _, col_index}
				<div class={cn(`col-${col_index + 1}`, 'flex h-auto flex-1 flex-col gap-4')}>
					{#each { length: _notes.length } as _, _noteindex}
						{#if _notes[_noteindex].colIndex == col_index + 1}
							<SingleNote class="max-w-80" note={_notes[_noteindex]} />
						{/if}
					{/each}
				</div>
			{/each}
		{/key} -->

		<div class={cn('flex h-auto flex-1 flex-col gap-4')}>
			{#each { length: _notes.length } as _, _noteindex}
				<SingleNote class="max-w-80" note={_notes[_noteindex]} />
			{/each}
		</div>
	</div>

	{#if isHovered}
		<NotesActions class="notes-actions" />
	{/if}
</div>

<style lang="scss">
	// .notes__container {
	// 	&:hover {
	// 		:global(.notes-actions) {
	// 			display: flex;
	// 		}
	// 	}
	// }
</style>
