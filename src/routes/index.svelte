<script>
	import { pokemon, fetchPokemon } from '../stores/pokestore.js';
	import PokemonCard from '../components/pokemonCard.svelte';

	let searchTerm = '';
	let filteredPokemons = [];

	// $ is reactivity when searchTerm change
	$: {
		if (searchTerm) {
			//search pokemon with filtered by searchTerm
			filteredPokemons = $pokemon.filter((pokeitem) =>
				pokeitem.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			//reset filter
			filteredPokemons = [...$pokemon];
		}
	}

	fetchPokemon();

	//console.log($pokemon); //output data in store object
</script>

<svelte:head>
	<title>Pokedex Kit</title>
</svelte:head>

<h1 class="text-red-600 text-4xl my-8 uppercase text-center">SvelteKit Pokedex</h1>

<input
	type="text"
	class="w-full rounded-md text-lg p-2 border-2 border-gray-300"
	placeholder="Search pokemon"
	bind:value={searchTerm}
/>

<div class="grid gap-4 py-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemons as pokeitem}
		<PokemonCard {pokeitem} />
	{/each}
</div>
