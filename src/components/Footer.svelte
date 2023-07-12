<script lang="ts">
	import { tasks } from '../stores'
</script>

{#if $tasks.size}
	<footer class="footer">
		<slot></slot>
	</footer>
{/if}
