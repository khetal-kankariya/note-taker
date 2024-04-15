<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { HTMLAttributes } from 'svelte/elements';
	import { slide } from 'svelte/transition';

	let { note, ...foo }: HTMLAttributes<HTMLElement> & { note: TNote } = $props();

	let isHovered = $state(false);
</script>

<Card.Root
	class="bg-none"
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
	{...foo}
>
	<Card.Header>
		<Card.Title>{note.title}</Card.Title>
	</Card.Header>

	<Card.Content>
		<p>{note.content}</p>
	</Card.Content>
	{#if isHovered}
		<div transition:slide={{ axis: 'y' }}>
			<Card.Footer class="flex flex-col text-sm">
				<p>last Modified: {note.timeModified}</p>
				<p>Created: {note.timeCreated}</p>
			</Card.Footer>
		</div>
	{/if}
</Card.Root>
