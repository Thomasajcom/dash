<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { getDayAtWorkItems } from "../api";

  import Avatar from "./Avatar.svelte";

  let today = new Date();

  setInterval(() => today = new Date(), 1000 * 61);

  $: query = today && useQuery("daySummary", () => getDayAtWorkItems(today), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2
  });
</script>

<div class="tile" style="grid-column: span 2;">
  <div class="container" class:loading={$query.isLoading}>
    <h2>
      {`${
        $query?.data && $query?.data.length === 0 ? "Ingen " : ""
      }På kontoret i dag`}
    </h2>
    <div class="day">
      <div class="attendees">
        {#each $query?.data ?? [] as attendee}
          <Avatar {attendee} />
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
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
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
</style>
