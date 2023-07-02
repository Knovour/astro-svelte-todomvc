import fetchData from './_fetchData'

export async function get({ request }) {
	const url = new URL(request.url)
	const spaceId = url.searchParams.get('space')
	const data = await fetchData(`/space/${spaceId}/folder?archived=false`, request, 'folders')

	return new Response(JSON.stringify(data))
}
