<script lang="ts">
  import '../styles/globals.css';

  import { onMount } from 'svelte';
  import { setModeCurrent } from '$lib/light-switch/light-switch';

  onMount(async () => {
    setModeCurrent();
  });
</script>

<slot />
