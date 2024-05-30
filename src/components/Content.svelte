<script lang="ts">
	import { cn } from '$lib/utils';
	import { notes } from '../stores';
	import NotesActions from './NotesActions.svelte';
	import TextNote from './TextNote.svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let _notes = $state($notes);

	let { ...rest_props }: HTMLAttributes<HTMLElement> = $props();
	let classs = rest_props['class'];

	let displayMode: 'grid' | 'list' = $state('grid');
	let num_cols = $state(_notes.length % 4 == 0 ? 4 : _notes.length % 4);
	let grid_columns: Array<Array<TNote>> = [[], [], [], []];

	let isHovered = $state(false);
	let bar = $state(0);

	$effect(() => {
		_notes.forEach((note) => {
			grid_columns[_notes.indexOf(note) % 4].push(note);
			if (_notes.indexOf(note) == _notes.length - 1) {
				bar = 1;
			}
		});
	});
</script>

<div
	class={cn('notes__container flex h-96 w-full flex-col gap-8', classs)}
	role="main"
	onmouseenter={() => {
		isHovered = true;
	}}
	onmouseleave={() => {
		isHovered = false;
	}}
	{...rest_props}
>
	<div class={`notes-content mx-auto grid  h-full w-[80vw] grid-cols-4 gap-4 overflow-y-auto p-0`}>
		{#key $notes.length}
			<!-- {#each { length: num_cols } as _, i} -->
			{#each $notes as note}
				<div class="flex flex-col gap-4">
					<!-- {#each grid_columns[i] as note} -->
					<!-- {#if foo(grid_columns, note)} -->
					<TextNote class="max-h-fit" {note} />
					<!-- {/if} -->
					<!-- {/each} -->
				</div>
			{/each}
		{/key}
	</div>

	{#if isHovered}
		<NotesActions class="notes-actions" />
	{/if}
</div>
