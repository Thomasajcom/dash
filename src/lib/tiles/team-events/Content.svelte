<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { format, isSameDay } from "date-fns";
  import nb from "date-fns/locale/nb";
  import { getTeamEvents } from "./api";

  let today = new Date();

  setInterval(() => (today = new Date()), 1000 * 61);

  function map<TIn, TOut>(target: TIn, fn: (t: TIn) => TOut): TOut {
    return fn(target);
  }

  function getDayId(date: Date) {
    return format(date, "ddMMyy");
  }

  $: query = useQuery("teamEvents", () => getTeamEvents(today), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  $: todaysEvents = ($query.data ?? []).filter((e) => isSameDay(e.start, today));
  $: otherEvents = ($query.data ?? [])
    .filter((e) => !isSameDay(e.start, today))
    .reduce(
      (p, n) => ({
        ...p,
        ...map(getDayId(n.start), (id) => ({
          [id]: [...(p[id] ?? []), n],
        })),
      }),
      {}
    );
</script>

<div class="container">
  {#if !$query.isLoading && $query.data}
    <div class="agenda">
      <div class="events today">
        <h1>I dag</h1>
        {#if todaysEvents.length == 0}
          Ingen hendelser i dag
        {/if}
        {#each todaysEvents as event}
          <div class="event">
            <h2>
              {format(event.start, "HH:mm", { locale: nb })}
              {event.name}
            </h2>
          </div>
        {/each}
      </div>
      <div class="events other">
        {#each Object.keys(otherEvents) as eventKey}
          {@const events = otherEvents[eventKey]}
          <h2>
            {format(events[0].start, "eeee", { locale: nb })}
          </h2>
          {#each events as event}
            <div class="event">
              {format(event.start, "HH:mm", { locale: nb })}
              {event.name}
            </div>
          {/each}
        {/each}
      </div>
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

  .agenda {
    display: flex;
  }

  .events {
    max-width: 50%;
    min-width: 50%;
  }

  .event {
    padding-bottom: 0.25rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    line-height: 1;
  }

  .today {
    font-size: 1.5rem;
  }
</style>
