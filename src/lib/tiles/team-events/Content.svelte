<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { format, isSameDay } from "date-fns";
  import nb from "date-fns/locale/nb";
  import { getTeamEvents } from "./api";

  let today = new Date();

  setInterval(() => today = new Date(), 1000 * 61);

  $: query = useQuery("teamEvents", () => getTeamEvents(today), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2
  });
</script>

<div class="container">
  <h1>Arrangementer</h1>
  {#if !$query.isLoading && $query.data}
    <div class="events">
      {#each $query.data as event}
        <div class="event">
          <h2>
            {#if isSameDay(event.start, today)}
              I dag {format(event.start, "HH:mm", { locale: nb })}
            {:else}
              {format(event.start, "eeee HH:mm", { locale: nb })}
            {/if}
          </h2>
          <p>{event.name}</p>
        </div>
      {/each}
    </div>
  {:else}
    Loading...
  {/if}
</div>

<style lang="postcss">
  .container {
    width: 100%;
    height: 100%;
    padding: 2rem;
  }

  .events {
    width: 100%;
    height: 100%;
  }

  .event {
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1;
  }

  h1 {
        font-size: 1rem;
        font-weight: 300;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 2rem;
  }

  h2 {
    font-size: 0.8rem;
    text-transform: uppercase;
    line-height: 1;
  }
</style>
