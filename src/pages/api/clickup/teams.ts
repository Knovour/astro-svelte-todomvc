import fetchData from './_fetchData'

export async function get({ request }) {
	const data = await fetchData('/team', request, 'teams')

	return new Response(JSON.stringify(data))
}
