// just sample of api. Not needed for that project

export async function get({ params }) {
	const id = params.id;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokeman = await res.json();

	return {
		status: 200,
		body: pokeman
	};
}
