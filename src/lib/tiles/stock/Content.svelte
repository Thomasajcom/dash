<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { getTicker } from "./api";

  $: query = useQuery("ticker", () => getTicker(), {
    cacheTime: 1000 * 60 * 15,
    staleTime: 1000 * 60 * 15,
    refetchInterval: 1000 * 60 * 15
  });

  $: trend = $query.data?.trendPercent ?? 0;
  $: icon = trend > 0 ? "🚀" : (trend < 0 ? "💸" : "");
</script>

<div class="container">
  <div class="content">
    <h1 class="ticker">ITERA</h1>
    {#if $query.data}
      <h2 class="price">{ $query.data.price } <span class="currency">KR</span></h2>
      <h3 class:loss={$query.data.trendPercent < 0} class="movement">
        { icon }
        { $query.data.trendPercent }%
        { icon }
      </h3>
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
    font-size: 2rem;
    margin: 0;
    font-weight: 100;
    color: #37e17b;
  }

  .loss {
    color: #ff4b33 !important;
  }
</style>
