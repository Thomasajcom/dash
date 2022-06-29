<script lang="ts">
  import Logo from "./lib/components/Logo.svelte";
  import Clock from "./lib/components/Clock.svelte";
  import SummaryDay from "./lib/components/SummaryDay.svelte";
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  
  import TeamEvents from "./lib/tiles/team-events/Main.svelte";


  const queryClient = new QueryClient();
</script>

<main>
  <Logo />
  <Clock />
  <QueryClientProvider client={queryClient}>
    <SummaryDay />
  </QueryClientProvider>
  <TeamEvents/>
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
