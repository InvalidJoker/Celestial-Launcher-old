<script lang="ts">
  import { WindowTitlebar } from '@tauri-controls/svelte';
  import { cn } from '$lib/utils';

  import { Sailboat } from 'lucide-svelte';
</script>

<WindowTitlebar class="ml-2">
  <div class="flex items-center p-1 pl-2">
    <a href="/" class="w-5">
      <Sailboat />
    </a>
  </div>
</WindowTitlebar>

<div
  class={cn(
    'h-screen overflow-auto border-t bg-background pb-8',
    // "scrollbar-none"
    'scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md'
  )}
>
  <slot />
</div>
