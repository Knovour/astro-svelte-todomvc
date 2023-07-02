import fetchData from './_fetchData'

export async function get({ request }) {
	const url = new URL(request.url)
	const teamId = url.searchParams.get('team')
	const data = await fetchData(`/team/${teamId}/taskTemplate?page=0`, request, 'templates')

	return new Response(JSON.stringify(data))
}
