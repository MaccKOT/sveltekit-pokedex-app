<script>
	import { pokemon } from '../stores/pokestore.js';

	console.log($pokemon); //output data in store object
</script>

<svelte:head>
	<title>Pokedex Kit</title>
</svelte:head>

<h1 class="text-red-600 text-4xl my-8 uppercase">SvelteKit Pokedex</h1>

{#each $pokemon as pokeitem}
	<p>{pokeitem.name}</p>
{/each}
