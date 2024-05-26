<script lang="ts">
  import { Button } from '$components/ui/button';
  import { invoke } from '@tauri-apps/api';

  let text: string = '';
</script>

<Button
  on:click={async () => {
    text = await invoke('greet', { name: 'noob' });
  }}>Click me</Button
>

<p>{text}</p>

<Button
  on:click={() => {
    text = '';
  }}>Close</Button
>
