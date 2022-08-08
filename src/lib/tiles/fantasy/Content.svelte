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
        {#if $query?.data["new_entries"]?.results.length > 0}
          {#each $query?.data["new_entries"]?.results ?? [] as entry}
            <li>
              {entry["entry_name"]} ({`${entry["player_first_name"]}`}
              {`${entry["player_last_name"]}`})
            </li>
          {/each}
        {/if}
        {#if $query?.data.standings?.results.length > 0}
          {#each $query?.data.standings?.results.sort( (a, b) => (a.rank === b.rank ? 0 : a.rank > b.rank ? 1 : -1) ) ?? [] as entry}
            <li>
              {entry.rank}. {entry["entry_name"]} ({entry["player_name"]}) - {entry.total} poeng
            </li>
          {/each}
        {/if}
      </ul>
    </div>
  {:else}
    Loading...
  {/if}
</div>

<style>
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
    align-items: start;
  }

  .teams ul {
    padding: 0;
  }
  .teams li {
    list-style-type: none;
    line-height: 2rem;
  }

  .container h2 {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0;
    font-weight: 300;
  }
</style>
