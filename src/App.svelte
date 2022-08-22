<script lang="ts">
  import Logo from "./lib/components/Logo.svelte";
  import Clock from "./lib/components/Clock.svelte";
  import SummaryDay from "./lib/components/SummaryDay.svelte";
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";

  import TeamEvents from "./lib/tiles/team-events/Main.svelte";
  import Plants from "./lib/tiles/plants/Main.svelte";
  import Fantasy from "./lib/tiles/fantasy/Main.svelte";
  import Stock from "./lib/tiles/stock/Main.svelte";

  import "./App.postcss?import";
  import Weather from "./lib/tiles/weather/Main.svelte";

  const queryClient = new QueryClient();
</script>

<main>
  <Logo />
  <Clock />
  <Plants />
  <TeamEvents />
  <QueryClientProvider client={queryClient}>
    <SummaryDay />
    <Fantasy />
    <Weather />
  </QueryClientProvider>
  <Stock />
</main>
