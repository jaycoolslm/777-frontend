<script>
  import Auth from "./lib/Auth.svelte";
  import Mint from "./lib/Mint.svelte";
  let verified = false;
</script>

<main>
  {#if !verified}
    <Auth bind:verified />
  {:else}
    <Mint />
  {/if}
</main>
