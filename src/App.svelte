<script lang="ts">
  import Logo from "./lib/components/Logo.svelte";
  import Clock from "./lib/components/Clock.svelte";
  import SummaryDay from "./lib/components/SummaryDay.svelte";
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  const queryClient = new QueryClient();
</script>

<main>
  <Logo />
  <Clock />
  <QueryClientProvider client={queryClient}>
    <SummaryDay />
  </QueryClientProvider>
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
</main>
