<script lang="ts">
    import {
        QueryClientProvider,
        QueryClient,
    } from "@sveltestack/svelte-query";
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
        grid-column: span 1;
    }
</style>
  