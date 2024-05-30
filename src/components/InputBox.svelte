<script lang="ts">
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import { tick } from 'svelte';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import { notes } from '../stores';
	import form_submit from '../scripts/form-submit';

	let { ...rest_props }: HTMLAttributes<HTMLElement> = $props();
	let props_class = rest_props['class'];

	const modeList: NoteMode[] = ['note'];

	let newNote = $state({
		title: '',
		content: ''
	});

	let open = $state(false);
	let curr_mode: NoteMode = $state('note');

	let selectedValue = $derived(modeList.find((f) => f === curr_mode));

	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}

	let formfocus = $state(false);

	$effect(() => {
		formfocus = newNote.content.length > 0;
	});
</script>

<div
	{...rest_props}
	class={cn(
		'input__container relative m-auto w-[40rem] rounded-lg bg-searchbg p-5 text-white transition-all',
		props_class
	)}
>
	<!-- <span
		class="floating-text absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 bg-fluogreen px-6 py-0.5 text-3xl text-black"
		style="font-family: Reddit Mono"
	>
		What's on your mind?
	</span> -->

	<form class="flex w-full flex-col gap-2" on:submit={form_submit}>
		<div class="flex flex-col gap-2">
			<div class="flex flex-col">
				{#if formfocus}
					<input
						class="w-full rounded-md border-b border-[#666] bg-transparent px-4 py-2"
						type="text"
						name="title"
						id="title"
						placeholder="Title"
						bind:value={newNote.title}
						style="outline: none"
					/>
				{/if}
				<!-- {#if curr_mode == 'note'} -->
				<textarea
					bind:value={newNote.content}
					oninput={(el) => {
						el.currentTarget.style.height = Math.max(el.currentTarget.scrollHeight, 48) + 'px';
					}}
					class="min-h-4 resize-y overflow-hidden rounded-md bg-transparent px-4 py-2 focus:outline-dashed"
					name="content"
					id="content"
					placeholder="Type it out..."
					rows="1"
					cols="40"
				></textarea>
			</div>
			<!-- {:else if curr_mode == 'draw'}
        <div></div>
      {:else if curr_mode == 'list'}
        <div></div>
      {:else if curr_mode == 'todo'}
        <div></div>
      {:else if curr_mode == 'image'}
        <div></div>
      {:else if curr_mode == 'table'}
        <div></div>
      {:else if curr_mode == 'audio'}
        <div></div>
      {:else if curr_mode == 'more'}
        <div></div>
      {/if} -->
		</div>

		{#if formfocus}
			<div class="relative flex w-full justify-center gap-2">
				<Popover.Root bind:open let:ids>
					<Popover.Trigger asChild let:builder>
						<Button
							builders={[builder]}
							variant="outline"
							role="combobox"
							aria-expanded={open}
							class="w-40 justify-between border-none bg-searchshortcutbg"
						>
							<span class="m-auto flex-1 justify-self-center text-start">
								{selectedValue}
							</span>
							<ChevronsUpDown class="m-auto ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</Popover.Trigger>
					<Popover.Content class="dark w-40 p-0">
						<Command.Root>
							<Command.Group class="grid-flow-row">
								{#each modeList as framework}
									<Command.Item
										class="hover:bg-accent"
										value={framework}
										onSelect={(val) => {
											// @ts-ignore
											curr_mode = val;
											closeAndFocusTrigger(ids.trigger);
										}}
									>
										<Check
											class={cn('mr-2 h-4 w-4', curr_mode !== framework && 'text-transparent')}
										/>
										{framework}
									</Command.Item>
								{/each}
							</Command.Group>
						</Command.Root>
					</Popover.Content>
				</Popover.Root>
				<Button class="bg-fluogreen text-black hover:bg-fluogreen__lighter" type="submit">
					Submit
				</Button>
			</div>
		{/if}
	</form>
</div>

<style lang="scss">
	.input__container {
	}
</style>
