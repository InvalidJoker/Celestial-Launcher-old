<script lang="ts">
  import { cn } from '$lib/utils';
</script>


<div
  class={cn(
    'h-screen overflow-auto border-t bg-background pb-8',
    // "scrollbar-none"
    'scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md'
  )}
>
  <slot />
</div>
