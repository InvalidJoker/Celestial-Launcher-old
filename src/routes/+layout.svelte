<script lang="ts">
  import '../styles/globals.css';
  import { WindowTitlebar } from '@tauri-controls/svelte';
  import { cn } from '$lib/utils';

  import { onMount } from 'svelte';
  import type { WebviewWindow } from '@tauri-apps/plugin-window';
  import MainNav from '../lib/components/app/MainNav.svelte';
  import { Sailboat } from 'lucide-svelte';
  import { setModeCurrent } from '../lib/light-switch/light-switch';

  let appWindow: WebviewWindow;

  onMount(async () => {
    setModeCurrent();

    const { appWindow: windowPlugin } = await import('@tauri-apps/plugin-window');
    appWindow = windowPlugin;
  });
</script>

<div class="h-screen overflow-clip">
  <WindowTitlebar class="ml-2">
    <div class="flex items-center p-1 pl-2">
      <a href="/" class="w-5">
        <Sailboat />
      </a>
      <MainNav class="mx-6" />
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
</div>
