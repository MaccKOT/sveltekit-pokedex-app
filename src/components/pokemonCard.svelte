<script>
	import { fade } from 'svelte/transition';
	export let pokeitem;
</script>

<a
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${pokeitem.id}`}
	transition:fade
>
	<img class="h-40 w-40 " src={pokeitem.image} alt={pokeitem.name} />
	<h2 class="uppercase text-2xl">
		<span class="text-gray-400">{pokeitem.id}.</span>
		{pokeitem.name}
	</h2>
</a>
