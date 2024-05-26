<script lang="ts">
  import { cn } from '$lib/utils';

  import { Sailboat } from 'lucide-svelte';
</script>

<div
  class={cn(
    'h-screen overflow-auto border-t bg-background pb-8',
    // "scrollbar-none"
    'scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md'
  )}
>
  Whoops! Looks like you hit a route that doesn't exist. Click the sailboat to go back home.
</div>
