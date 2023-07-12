<script lang="ts">
	import { show } from '../stores'

	export let status: string
</script>

<a
	class:selected={$show === status}
	href={`#${status === 'all' ? '' : status}`}
	on:click={() => $show = status}
>
	{status}
</a>

<style>
	a {
		text-transform: capitalize;
	}
</style>
