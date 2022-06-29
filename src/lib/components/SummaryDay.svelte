<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { getDayAtWorkItems } from "../api";

  import Avatar from "./Avatar.svelte";

  let day = new Date();

  $: query = day && useQuery(["daySummary", day], () => getDayAtWorkItems(day));
</script>

<div class="tile">
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
