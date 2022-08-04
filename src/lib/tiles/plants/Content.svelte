<script lang="ts">
    import { format } from "date-fns";
    import { nb } from "date-fns/locale";

    let date = new Date();
    let colorLevel = "green";
    // let imgHeight = "200px";
    // let gradient1 = "0%";
    // let gradient2 = "100%";

    setInterval(() => date = new Date(), 1000);
</script>
  
<div class="container">
    <h1>Kontorplantene</h1>
    <div class="plant-wrapper">
        <div class="plant" 
            style="background-image: linear-gradient(grey 50%, red 50%, red), url('img/plant.svg');"/>
        <article>
            <p>Plantene ble sist vannet { format(date, "d. MMMM ", { locale: nb }) }</p>
            <p><span class="slogan">Make a difference</span> for kontorplantene</p>
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
        font-style: italic;
        font-weight: normal;
        color: red;
        margin-right: 8px;
    }
  
    .plant-wrapper {
        display: flex;
    }

    .plant {
        -webkit-mask: url(img/plant.svg) no-repeat center;
        mask: url(img/plant.svg) no-repeat center;
        width: 200px;
        height: 200px;
        margin: 1rem 0;
    }
</style>
  