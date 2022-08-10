<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { getFantasyLeague } from "../api";

  let today = new Date();

  setInterval(() => (today = new Date()), 1000 * 61);

  $: query =
    today &&
    useQuery("fantasyLeague", () => getFantasyLeague(), {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    });
</script>

<div class="tile">
  <div class="container" class:loading={$query.isLoading}>
    <h2>Fantasy</h2>
    <div class="day">
      <div class="attendees">
        {#each $query?.data["new_entries"]?.results ?? [] as entry}
          {entry["entry_name"]}
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .day {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
    align-items: center;
  }

  .container h2 {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0;
    font-weight: 300;
  }

  .attendees {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
  }
</style>
