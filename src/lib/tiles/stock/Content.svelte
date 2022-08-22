<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { getTicker } from "./api";

  $: query = useQuery("ticker", () => getTicker(), {
    cacheTime: 1000 * 60 * 15,
    staleTime: 1000 * 60 * 15,
    refetchInterval: 1000 * 60 * 15
  });
</script>

<div class="container">
  <div class="content">
    <h1 class="ticker">ITERA</h1>
    {#if $query.data}
      <h2 class="price">{ $query.data.price } <span class="currency">KR</span></h2>
      <h3 class:loss={$query.data.trendPercent < 0} class="movement">
        {#if $query.data.trendPercent > 0}
        🚀 +
        {:else if $query.data.trendPercent < 0}
        💸
        {/if}
        { $query.data.trendPercent }%</h3>
    {/if}
  </div>
</div>

<style lang="postcss">
  .container {
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1.ticker {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 300;
  }

  h2.price {
    font-size: 5rem;
    margin: 0;
    font-weight: 100;
  }

  .currency {
    font-size: 1.5rem;
  }

  h3.movement {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 100;
    color: #37e17b;
  }

  .loss {
    color: red !important;
  }
</style>
