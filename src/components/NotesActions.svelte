<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { fly } from 'svelte/transition';
	import keyboardShortcut from '../scripts/keyboard-shortcut';

	let { ...htmlattributes }: HTMLAttributes<HTMLElement> = $props();
	let classs = htmlattributes['class'];

	let searchActive = $state(false);

	let searchinput: HTMLInputElement;
</script>

<div
	class={cn(
		'flex h-16 w-full items-center gap-8 border border-searchbg px-4 py-2 text-white',
		classs
	)}
	style="font-family: Montserrat Alternates;"
	transition:fly={{ y: 20, duration: 300 }}
>
	<div class="flex-1">
		<select class="view-select rounded-sm bg-searchbg px-4 py-1">
			<option value="grid" class="rounded-none">grid view</option>
			<option value="list" class="">list view</option>
		</select>
	</div>

	<div class="search-box relative">
		<input
			type="text"
			class="w-64 bg-searchbg py-3 pl-10 pr-24 text-white outline-none transition-none focus:w-96 focus:transition-all"
			onfocus={() => {}}
			onblur={() => {}}
			name="notes_search"
			bind:this={searchinput}
			use:keyboardShortcut={{
				modifier: 'ctrl',
				key: 'k',
				callback: () => {
					searchinput.focus();
				}
			}}
		/>

		<span
			class="absolute left-2 top-1/2 -translate-y-1/2 bg-none px-2 py-2 opacity-30"
			style="font-family: fira code;"
		>
			<svg
				height="16px"
				id="Layer_1"
				style="enable-background:new 0 0 512 512;"
				version="1.1"
				viewBox="0 0 512 512"
				width="16px"
				xml:space="preserve"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				><path
					fill="white"
					d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"
				/></svg
			>
		</span>

		{#if !searchActive}
			<span
				class="absolute right-2 top-1/2 -translate-y-1/2 bg-none px-2 py-2 opacity-30"
				style="font-family: fira code;"
			>
				ctrl+k
			</span>
		{/if}
	</div>

	<button type="button" name="refresh">refresh</button>
	<button type="button" name="submit">settings</button>
</div>
