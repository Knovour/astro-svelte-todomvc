<script lang="ts">
	import { tasks, completed } from '../stores'

	function toggle() {
		$completed = $tasks.size === $completed.size
			? new Set()
			: new Set([...$tasks.keys()])
	}
</script>

<input id="toggle-all" class="toggle-all" type="checkbox" on:change={toggle} />
<label for="toggle-all">Mark all as complete</label>
