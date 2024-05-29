<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import type { HTMLAttributes } from 'svelte/elements';

  let { note, ...foo }: HTMLAttributes<HTMLElement> & { note: TNote } = $props();
</script>

<Card.Root {...foo}>
  <Card.Header>
    <Card.Title>{note.title}</Card.Title>
    <Card.Description>{note.colIndex}</Card.Description>
  </Card.Header>

  <Card.Content>
    <p>{note.content}</p>
  </Card.Content>
</Card.Root>
