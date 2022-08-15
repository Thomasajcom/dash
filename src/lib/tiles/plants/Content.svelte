<script lang="ts">
  import { format } from "date-fns";
  import { nb } from "date-fns/locale";

  let date = new Date("August 3, 2022");
  let color = "#37E17B";
  let gradientLevel = 100;

  function waterPlants() {
    date = new Date();
    color = "#37E17B";
    gradientLevel = 0;
  }

  setInterval(() => (gradientLevel += 0.583), 1000 * 60 * 60); // Every hour

  $: {
    gradientLevel >= 66 ? (color = "#FF4B33") : "";
    gradientLevel >= 33 ? (color = "#FFDD00") : "";
  }
</script>

<div class="container">
  <h1>Kontorplantene</h1>
  <div class="plant-wrapper">
    <div
      class="plant"
      style="background-image: linear-gradient(to bottom, grey {gradientLevel}%, {color} {gradientLevel}%, {color}), url('/img/plant.svg');"
    />
    <article>
      <p><span class="slogan">Make a difference</span> for kontorplantene.</p>
      <p>Plantene ble sist vannet {format(date, "eeee d. MMMM", { locale: nb })}.</p>
      <button class="watering-button" on:click={waterPlants}>Vann plantene</button>
    </article>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    padding: 2rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
  }

  .slogan {
    font-family: "Feeling Passionate";
    color: #ff4b33;
    margin-right: 8px;
  }

  .plant-wrapper {
    display: flex;
  }

  .plant-wrapper p {
    font-weight: 200;
  }

  .plant {
    -webkit-mask: url(img/plant.svg) no-repeat center;
    mask: url(img/plant.svg) no-repeat center;
    width: 200px;
    height: 200px;
    margin: 1rem 0;
  }

  .watering-button {
    color: white;
    background-color: #ff4b33;
    border-radius: 4px;
    border-style: none;
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    padding: 16px;
    margin-top: 1rem;
  }

  .watering-button:hover {
    background-color: #37e17b;
    cursor: pointer;
  }
</style>
