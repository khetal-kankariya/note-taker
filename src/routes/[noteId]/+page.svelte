<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { redirect } from '@sveltejs/kit';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let { note } = data;
</script>

<div
	class={cn(
		'input__container relative flex min-h-[5rem] w-[39rem] rounded-lg bg-searchbg p-5 text-white transition-all '
	)}
>
	<form action="?/updateNote" method="post">
		<h3>Editing: {note.title}</h3>
		<div class="w-full">
			<div class="flex flex-col gap-2">
				<input
					class="w-full rounded-md border border-[#666] bg-transparent px-4 py-2"
					type="text"
					name="title"
					id="title"
					placeholder="Title"
					bind:value={note.title}
				/>
				<textarea
					oninput={(el) => {
						el.currentTarget.style.height = Math.max(el.currentTarget.scrollHeight, 68) + 'px';
					}}
					class="min-h-4 resize-y overflow-hidden rounded-md border border-[#666] bg-transparent px-4 py-2"
					name="content"
					id="content"
					placeholder="Type it out..."
					bind:value={note.content}
					rows="2"
					cols="40"
				></textarea>
			</div>
		</div>

		<Button type="submit">Update Note</Button>
	</form>
</div>

<style lang="scss">
</style>
