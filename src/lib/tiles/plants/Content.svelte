<script lang="ts">
    import { useQuery } from "@sveltestack/svelte-query";
    import { format, isSameDay } from "date-fns";
    import nb from "date-fns/locale/nb";
</script>
  
<div class="container">
    <h1>Ny flis!</h1>
</div>
  
<style>
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
  
    h1 {
      font-size: 1rem;
      line-height: 1;
    }
  
    h2 {
      font-size: 0.8rem;
      text-transform: uppercase;
      line-height: 1;
    }
</style>
  