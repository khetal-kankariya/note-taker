<script lang="ts">
  import { cn } from '$lib/utils';
  import { notes } from '../stores';
  import NotesActions from './NotesActions.svelte';
  import TextNote from './TextNote.svelte';

  let _notes = $state($notes);

  let displayMode: 'grid' | 'list' = $state('grid');
  let num_cols = $state(4);
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
  class="notes__container flex h-96 w-full flex-col gap-8"
  role="main"
  onmouseenter={() => {
    isHovered = true;
  }}
  onmouseleave={() => {
    isHovered = false;
  }}
>
  <div
    class={`notes-content h-41 mx-auto grid h-full w-[80vw] grid-cols-4 gap-4 overflow-y-auto p-0`}
  >
    {#key bar}
      {#each { length: num_cols } as _, i}
        <div class="flex flex-col gap-4">
          {#each grid_columns[i] as note}
            <!-- {#if foo(grid_columns, note)} -->
            <TextNote class="max-h-fit" {note} />
            <!-- {/if} -->
          {/each}
        </div>
      {/each}
    {/key}
  </div>

  {#if isHovered}
    <NotesActions class="notes-actions" />
  {/if}
</div>
