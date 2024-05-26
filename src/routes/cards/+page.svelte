<script lang="ts">
  import DemoCookieSettings from './CookieSettings.svelte';
  import DemoCreateAccount from './CreateAccount.svelte';
  import DemoContainer from './DemoContainer.svelte';
  import DemoNotifications from './Notifications.svelte';
</script>

<div class="items-start justify-center gap-6 p-8 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-3">
  <div class="grid items-start col-span-3 gap-6 lg:col-span-1">
    <DemoContainer>
      <DemoCreateAccount />
    </DemoContainer>
    <DemoContainer>
      <DemoNotifications />
    </DemoContainer>
  </div>
  <div class="grid items-start col-span-3 gap-6 lg:col-span-2">
    <DemoContainer>
      <DemoCookieSettings />
    </DemoContainer>
  </div>
</div>
