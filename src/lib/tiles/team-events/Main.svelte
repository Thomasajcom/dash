<script lang="ts">
  import {
    QueryClientProvider,
    QueryClient,
    useQuery,
  } from "@sveltestack/svelte-query";
  import { getTeamEvents } from "./api";
  import Content from "./Content.svelte";

  const queryClient = new QueryClient();
</script>

<div class="tile">
  <QueryClientProvider client={queryClient}>
    <Content />
  </QueryClientProvider>
</div>

<style>
  .tile {
    grid-column: span 2;
  }
</style>
