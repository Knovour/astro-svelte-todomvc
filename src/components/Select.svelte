<script lang="ts">
	import axios from 'axios'
	import { token } from '../stores'

	export let path: string
	export let name: string
	export let value: string
	export let ready: boolean = true

	$: req = !$token
		? null
		: axios.create({
				baseURL: '/api/clickup',
				headers: { Authorization: $token as string },
		  })

	async function fetchData(path) {
		if (!req) return []

		const { data } = await req.get(path)
		value = data[0]?.id || ''

		return data
	}
</script>

<fieldset>
	<label><slot /></label>
	<select {name} bind:value>
		{#if ready}
			{#await fetchData(path)}
				<option value="" disabled selected>更新中</option>
			{:then opts}
				{#if opts.length}
					{#each opts as { id, name }}
						<option value={id}>{name}</option>
					{/each}
				{:else}
					<option value="" disabled selected>無資料</option>
				{/if}
			{/await}
		{:else}
			<option value="" disabled selected>無資料</option>
		{/if}
	</select>
</fieldset>
