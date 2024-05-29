<script lang="ts">
  import { cn } from '$lib/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  let { ...rest_props }: HTMLAttributes<HTMLElement> = $props();
  let rest_class = rest_props['class'];
</script>

<nav {...rest_props} class={cn('h-24 w-full bg-none', rest_class)}>
  <div
    class="relative m-auto flex h-16 w-96 place-content-between rounded-lg bg-fluopurple px-4 after:absolute"
  >
    <div class="logo-circles circles flex place-items-center gap-4">
      <div class="logo-circle bg-fluogreen"></div>
      <div class="divider h-14 w-0.5 rounded-full bg-white"></div>
      <div class="app-circle bg-fluoblue"></div>
    </div>

    <div class="user-actions flex place-items-center gap-4">
      <div class="apps bg-fluoyellow"></div>
      <div class="user bg-fluored"></div>
    </div>
  </div>
</nav>

<style lang="scss">
  nav {
    &::after {
      @apply absolute left-0.5 top-0.5 h-full w-full rounded-lg border border-s-0 border-t-0 border-b-black border-e-black;
    }

    .logo-circle,
    .app-circle {
      @apply relative aspect-square h-10 rounded-full before:absolute before:rounded-full after:absolute after:rounded-full;
    }

    .user {
      @apply relative aspect-square h-12 rounded-full before:absolute before:rounded-full after:absolute after:rounded-full;
    }

    .apps {
      @apply relative aspect-square h-10 rounded-lg before:absolute before:rounded-lg after:absolute after:rounded-lg;
    }

    .logo-circle,
    .app-circle,
    .apps,
    .user {
      &::before {
        @apply absolute -left-0.5 -top-0.5 -z-10 h-full w-full  border border-black;
      }

      &::after {
        @apply absolute left-0.5 top-0.5 h-full w-full  border border-black;
      }
    }
  }
</style>
