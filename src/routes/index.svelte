<script>
	import { pokemon } from '../stores/pokestore.js';
	import PokemonCard from '../components/pokemonCard.svelte';

	//console.log($pokemon); //output data in store object
</script>

<svelte:head>
	<title>Pokedex Kit</title>
</svelte:head>

<h1 class="text-red-600 text-4xl my-8 uppercase text-center">SvelteKit Pokedex</h1>

<div class="grid gap-4 py-4 md:grid-cols-2 grid-cols-1">
	{#each $pokemon as pokeitem}
		<PokemonCard {pokeitem} />
	{/each}
</div>
