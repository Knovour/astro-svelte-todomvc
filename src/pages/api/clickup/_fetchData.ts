import axios from 'axios'

export default async function fetchData(path, req, name) {
	const res = await axios.get(`https://api.clickup.com/api/v2${path}`, {
		headers: { Authorization: req.headers.get('Authorization') },
	})

	return res.data[name].map(({ id, name }) => ({ id, name }))
}
