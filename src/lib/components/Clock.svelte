<script lang="ts">
    import { format } from "date-fns";
    import { nb } from "date-fns/locale";

    let date = new Date();

    setInterval(() => date = new Date(), 1000);
</script>

<div class="tile">
    <div class="clock-container">
        <div class="clock">
            <h2>{ format(date, "eeee", { locale: nb }) }</h2>
            <h1>{ format(date, "HH:mm") }</h1>
            <h3>{ format(date, "d. MMMM yyyy", { locale: nb }) }</h3>
        </div>
    </div>
</div>

<style lang="postcss">
    .clock-container {
        width: 100%;
        height: 100%;
        display: flex;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clock {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .clock h1 {
        font-size: 5rem;
        margin: 0;
        font-weight: 100;
    }

    .clock h2 {
        font-size: 1rem;
        text-transform: uppercase;
        margin: 0;
        font-weight: 300;
    }

    .clock h3 {
        font-size: 1rem;
        text-transform: uppercase;
        margin: 0;
        font-weight: 100;
    }
</style>