<script lang="ts">
</script>

<div class="container">
    <div class="logo-container">
        <img src="img/itera.png" alt="Logo" />
        <h1>Fredrikstad</h1>
    </div>
</div>

<style>
	.container {
        display: flex;
		/* grid-column: span 2; */
        padding: 2rem;
        align-items: center;
        justify-content: space-evenly;
        background-color: #222;
	}

    .logo-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo-container img {
        width: 48px;
        border-radius: 0.25rem;
    }

    .logo-container h1 {
        font-size: 2rem;
        font-family: "Feeling Passionate";
        margin: 0;
        margin-top: 1rem;
    }
</style>