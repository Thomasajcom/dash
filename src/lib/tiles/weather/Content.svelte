<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { isBeerToday } from "../team-events/api";
  import { getWeather } from "./api";
  import type { WeatherTimeseries } from "./models";

  let today = new Date();

  setInterval(() => (today = new Date()), 1000 * 61);

  $: query =
    today &&
    useQuery("weather", () => getWeather(), {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    });

  $: beerQuery =
    today &&
    useQuery("beerEvent", () => isBeerToday(), {
      cacheTime: 1000 * 60 * 300,
      staleTime: 1000 * 60 * 300,
    });

  $: nextTimeseriesData = (timeseries: WeatherTimeseries[]) => {
    return timeseries.find((series) => {
      return new Date(series.time) > new Date();
    }).data;
  };
</script>

<div class="container">
  <div class="weather-container">
    <div class="weather">
      {#if !$query.isLoading && $query.data}
        {#if $query?.data.properties.timeseries && $query?.data.properties.timeseries.length > 0}
          <!-- {#if !$beerQuery?.isLoading && $beerQuery.data === true}
            <div class="party-icon">
              <i class="fa-solid fa-beer-mug-empty" />
            </div>
          {:else} -->
          <div class="weather-icon">
            <img
              class="icon"
              src={`img/weather/svg/${
                nextTimeseriesData($query?.data.properties.timeseries).next_1_hours.summary
                  .symbol_code
              }.svg`}
              alt={`${
                nextTimeseriesData($query?.data.properties.timeseries).next_1_hours.summary
                  .symbol_code
              }`}
            />
            <span>
              <span
                style="transform:rotate({nextTimeseriesData($query?.data.properties.timeseries)
                  .instant.details.wind_from_direction}deg); display: inline-block;">↓</span
              >
              {Math.round(
                nextTimeseriesData($query?.data.properties.timeseries).instant.details.wind_speed
              )}m/s
            </span>
          </div>
          <!-- {/if} -->

          <h1>
            {Math.round(
              nextTimeseriesData($query?.data.properties.timeseries).instant.details.air_temperature
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .weather-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .weather {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
  }

  .weather-icon img {
    width: 132px;
    margin-bottom: -2rem;
  }

  /* .party-icon {
    font-size: 100px;
  } */

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
