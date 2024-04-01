<script lang="ts">
	import { cn } from '$lib/utils.js';
	import * as Card from '$lib/components/ui/card';
	import type { HTMLAttributes } from 'svelte/elements';

	let { ...htmlattributes }: HTMLAttributes<HTMLElement> = $props();
	let classs = htmlattributes['class'];
</script>

<div class="notes-actions">
	<ul class="view-select">
		<li>grid view</li>
		<li>list view</li>
	</ul>

	.search-box 
</div>
