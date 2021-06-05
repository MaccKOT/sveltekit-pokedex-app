<script context="module">
	//this code will run before component load
	import { getPokemonById } from '../../stores/pokestore.js';
	export async function load(ctx) {
		let id = ctx.page.params.id;
		const pokeman = await getPokemonById(id);
		return { props: { pokeman } };
	}
</script>

<script>
	export let pokeman;
</script>

<svelte:head>
	<title>Pokedex - {pokeman.name}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-red-700 text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{pokeman.types[0].type.name}</strong> | Height: <strong>{pokeman.height}</strong>
		| Weight: <strong>{pokeman.weight}</strong>
	</p>
	<img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>
