import fetchData from './_fetchData'

export async function get({ request }) {
	const url = new URL(request.url)
	const teamId = url.searchParams.get('team')
	const data = await fetchData(`/team/${teamId}/space?archived=false`, request, 'spaces')

	return new Response(JSON.stringify(data))
}
