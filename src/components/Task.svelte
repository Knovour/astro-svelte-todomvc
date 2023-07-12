<script lang="ts">
	import { tasks, completed } from '../stores'

	export let id: string
	export let name: string

	let value = name
	let editing = false

	function toggle() {
		$completed.has(id) ? $completed.delete(id) : $completed.add(id)
		$completed = $completed
	}

	function destroy() {
		$tasks.delete(id) && ($tasks = $tasks)
		$completed.delete(id) && ($completed = $completed)
	}

	function update({ key }) {
		switch(true) {
			case key !== 'Enter' && key !== 'Escape': return
			case key === 'Enter' && !!value:
				$tasks = $tasks.set(id, value)
				break
			default:
				value = name
		}

		editing = false
	}
</script>

<li class:editing={editing} class:completed={$completed.has(id)}>
	<div class="view">
		<input class="toggle" type="checkbox" value={id} checked={$completed.has(id)} on:change={toggle} />
		<label for={`edit${id}`} on:dblclick={() => editing = true}>{name}</label>
		<button class="destroy" on:click={destroy} />
	</div>
	<input id={`edit${id}`} class="edit" name="newName" bind:value on:keyup={update} />
</li>
