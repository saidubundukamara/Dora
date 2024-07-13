<script>
    import Network from "../network.svelte";
</script>

{#each [{ name: "Home", url: "/" }, { name: "About Helius APIs", url: "https://helius.xyz" }] as { name, url }}
    <a
        href={url}
        data-sveltekit-reload
        class="btn-ghost btn w-full">{name}</a
    >
{/each}
<Network />
