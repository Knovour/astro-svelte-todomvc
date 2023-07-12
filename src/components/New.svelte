<script lang="ts">
	import { tasks } from '../stores'

	let value = ''

	function create({ key }) {
		if (key === 'Enter' && value) {
			$tasks = $tasks.set(crypto.getRandomValues(new Uint32Array(1)).toString(), value)
			value = ''
		}
	}
</script>

<!-- svelte-ignore a11y-autofocus -->
<input class="new-todo" placeholder="What needs to be done?" autofocus bind:value on:keyup={create} />
