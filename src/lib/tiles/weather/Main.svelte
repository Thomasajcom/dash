<script lang="ts">
  import { QueryClientProvider, QueryClient } from "@sveltestack/svelte-query";
  import Content from "./Content.svelte";

  const queryClient = new QueryClient();
</script>

<div class="tile">
  <QueryClientProvider client={queryClient}>
    <Content />
  </QueryClientProvider>
</div>

<style lang="postcss">
  .tile {
    grid-column: span 2;
  }
</style>
