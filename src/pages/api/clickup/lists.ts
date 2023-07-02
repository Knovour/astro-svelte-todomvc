import fetchData from './_fetchData'

export async function get({ request }) {
	const url = new URL(request.url)
	const folderId = url.searchParams.get('folder')
	const data = await fetchData(`/folder/${folderId}/list?archived=false`, request, 'lists')

	return new Response(JSON.stringify(data))
}
