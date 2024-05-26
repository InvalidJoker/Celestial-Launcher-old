<script lang="ts">
  import { cn } from '$lib/utils';

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
  <a
    href="/cards"
    class="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
  >
    Cards
  </a>
  <a
    href="/authentication"
    class="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
  >
    Authentication
  </a>
</nav>
