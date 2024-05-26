<script lang="ts">
  import { Icons } from '$components/icons';
  import { Button } from '$components/ui/button';
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '$components/ui/card';
  import { Input } from '$components/ui/input';
  import { Label } from '$components/ui/label';
</script>

<Card>
  <CardHeader class="space-y-1">
    <CardTitle class="text-2xl">Create an account</CardTitle>
    <CardDescription>Enter your email below to create your account</CardDescription>
  </CardHeader>
  <CardContent class="grid gap-4">
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="px-2 bg-background text-muted-foreground"> Or continue with </span>
      </div>
    </div>
    <div class="grid gap-2">
      <Label for="email">Email</Label>
      <Input id="email" type="email" placeholder="m@example.com" />
    </div>
    <div class="grid gap-2">
      <Label for="password">Password</Label>
      <Input id="password" type="password" />
    </div>
  </CardContent>
  <CardFooter>
    <Button class="w-full">Create account</Button>
  </CardFooter>
</Card>
