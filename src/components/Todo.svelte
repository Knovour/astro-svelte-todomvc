<script lang="ts">
	import Task from './Task.svelte'
	import { tasks, completed, show } from '../stores'

	function filter(tasks, completed, show) {
		const entries = [...tasks.entries()]

		switch(show) {
			case 'active': return entries.filter(([id]) => !completed.has(id))
			case 'completed': return entries.filter(([id]) => completed.has(id))
			default: return entries
		}
	}

	$: list = filter($tasks, $completed, $show)
</script>

<div class="todo-list">
	{#each list as [id, name] (id)}
		<Task {id} {name} />
	{/each}
</div>
