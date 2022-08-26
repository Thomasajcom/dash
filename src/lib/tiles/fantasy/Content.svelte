<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { getFantasyLeague } from "./api";

  let today = new Date();

  setInterval(() => (today = new Date()), 1000 * 61);

  $: query =
    today &&
    useQuery("fantasyLeague", () => getFantasyLeague(), {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    });
</script>

<div class="container" class:loading={$query.isLoading}>
  <h2>Fantasy Premier League</h2>
  {#if !$query.isLoading && $query.data}
    <div class="teams">
      <ul>
        {#if $query?.data.standings?.results.length > 0}
          {#each $query?.data.standings?.results.sort( (a, b) => (a.rank === b.rank ? 0 : a.rank > b.rank ? 1 : -1) ) ?? [] as entry, i}
            <li class:leader={entry.rank === 1}>
              {#if entry.rank === 1}
                <span class="king"><i class="fa-solid fa-crown" /></span>
              {/if}

              {#if entry.rank < entry.last_rank && entry.last_rank > 0}
                <span><i class="fa-solid fa-circle-chevron-up up" /></span>
              {:else if entry.rank > entry.last_rank && entry.last_rank > 0}
                <span><i class="fa-solid fa-circle-chevron-down down" /></span>
              {:else}
                <span><i class="fa-solid fa-circle" /></span>
              {/if}
              {entry.rank}. {entry.entry_name} ({entry.player_name}) - {entry.total} poeng (+{entry.event_total})
            </li>
          {/each}
        {/if}
      </ul>
      {#if $query?.data["new_entries"]?.results.length > 0}
        <h3>Nye spillere</h3>
        <ul>
          {#each $query?.data["new_entries"]?.results ?? [] as entry}
            <li>
              {entry["entry_name"]} ({`${entry["player_first_name"]}`}
              {`${entry["player_last_name"]}`})
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {:else}
    Loading...
  {/if}
</div>

<style lang="postcss">
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem;
  }

  .teams {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-start;
  }

  .teams ul {
    padding: 0;
  }
  .teams li {
    list-style-type: none;
    line-height: 2rem;
    position: relative;
  }

  .container h2 {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0;
    font-weight: 300;
  }

  h3 {
    font-size: 0.8rem;
    text-transform: uppercase;
    line-height: 1;
  }

  .down {
    color: #ff4b33;
  }

  .up {
    color: #37e17b;
  }

  .leader {
    font-size: 1.4rem;
  }

  .king {
    position: absolute;
    transform: rotate(-20deg);
    top: -8px;
    left: -6px;
    color: gold;
    font-size: 1.6rem;
  }
</style>
