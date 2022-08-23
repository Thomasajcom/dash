<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { getWeather } from "./api";

  let today = new Date();

  setInterval(() => (today = new Date()), 1000 * 61);

  $: query =
    today &&
    useQuery("weather", () => getWeather(), {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    });
</script>

<div class="container">
  <h1>Været på brygga</h1>
  <div class="weather-container">
    <div class="weather">
      {#if !$query.isLoading && $query.data}
        {#if $query?.data.properties.timeseries && $query?.data.properties.timeseries.length > 0}
          <div class="weather-icon">
            <img
              src={`img/weather/svg/${$query?.data.properties.timeseries[0].data.next_1_hours.summary.symbol_code}.svg`}
              alt={`${$query?.data.properties.timeseries[0].data.next_1_hours.summary.symbol_code}`}
            />
          </div>
          <h1>
            {Math.round(
              $query?.data.properties.timeseries[2].data.instant.details.air_temperature
            )}°C
          </h1>
        {/if}
      {:else}
        Loading...
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  .container {
    width: 100%;
    height: 100%;
    padding: 2rem;
  }

  .weather-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .weather {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .weather-icon {
    width: 100px;
  }

  h1 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
  }

  .weather h1 {
    font-size: 5rem;
    margin: 0;
    font-weight: 100;
  }
</style>
