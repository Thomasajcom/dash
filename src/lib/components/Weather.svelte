<script lang="ts">
</script>

<div class="container">
  <div class="weather-container">
    <div class="weather">
      <div class="weather-icon">
        <img src="/img/lightrain.svg" alt="lett regn" />
      </div>
      <h1>20°C</h1>
    </div>
  </div>
</div>

<style lang="postcss">
  .container {
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .weather-container {
    display: flex;
  }

  .weather {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .weather-icon {
    width: 100px;
  }

  .weather h1 {
    font-size: 5rem;
    margin: 0;
    font-weight: 100;
  }

  .weather h2 {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0;
    font-weight: 300;
  }

  .weather h3 {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0;
    font-weight: 100;
  }
</style>
