<script lang="ts">
	import { tasks, completed } from '../stores'
</script>

<strong>{$tasks.size - $completed.size}</strong>
