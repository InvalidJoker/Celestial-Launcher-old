<script lang="ts">

  import { Button } from '$components/ui/button';
  import { Input } from '$components/ui/input';
  import { Label } from '$components/ui/label';
  import { cn } from '$lib/utils';
    import { Icons } from '$lib/components/icons';

  let className: string | undefined | null = undefined;
  export { className as class };

  let isLoading = false;
  async function onSubmit() {
    isLoading = true;

    setTimeout(() => {
      isLoading = false;
    }, 3000);
  }
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
  <form on:submit|preventDefault={onSubmit}>
    <div class="grid gap-2">
      <div class="grid gap-1">
        <Label class="sr-only" for="email">Email</Label>
        <Input
          id="email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          disabled={isLoading}
        />
      </div>
      <Button disabled={isLoading}>
        {#if isLoading}
          <Icons.spinner class="w-4 h-4 mr-2 animate-spin" />
        {/if}
        Sign In with Email
      </Button>
    </div>
  </form>
  <div class="relative">
    <div class="absolute inset-0 flex items-center">
      <span class="w-full border-t" />
    </div>
    <div class="relative flex justify-center text-xs uppercase">
      <span class="px-2 bg-background text-muted-foreground"> Or continue with </span>
    </div>
  </div>
  <Button variant="outline" type="button" disabled={isLoading}>
    {#if isLoading}
      <Icons.spinner class="w-4 h-4 mr-2 animate-spin" />
    {:else}
      <Icons.pizza class="w-4 h-4 mr-2" />
    {/if}
    {' '}
    Github
  </Button>
</div>
