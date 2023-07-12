<script lang="ts">
	import { tasks, completed } from '../stores'

	function clear() {
		$completed.forEach(id => $tasks.delete(id))
		$completed = new Set()
		$tasks = $tasks
	}
</script>

{#if $completed.size}
	<button class="clear-completed" on:click={clear}>Clear completed</button>
{/if}
