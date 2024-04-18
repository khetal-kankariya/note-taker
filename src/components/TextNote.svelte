<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { HTMLAttributes } from 'svelte/elements';
	import { slide } from 'svelte/transition';
	import type { PageData } from '../routes/$types';
	import Button from '$lib/components/ui/button/button.svelte';

	/* TODO: type annotate note */
	let { note, ...foo }: HTMLAttributes<HTMLElement> & { note: any } = $props();

	// let isHovered = $state(false);
</script>

<Card.Root class="bg-none" {...foo}>
	<Card.Header>
		<Card.Title>{note.title}</Card.Title>
	</Card.Header>

	<Card.Content>
		<p>{note.content}</p>
	</Card.Content>

	<form action="?/deleteNote&id={note.id}" method="post">
		<Button variant="destructive" type="submit">Delete</Button>
		<a href="/{note.id}" role="button">Edit</a>
	</form>
	<!-- {#if isHovered}
		<div transition:slide={{ axis: 'y' }}>
			<Card.Footer class="flex flex-col text-sm">
				<p>last Modified: {note.timeModified}</p>
				<p>Created: {note.timeCreated}</p>
			</Card.Footer>
		</div>
	{/if} -->
</Card.Root>
