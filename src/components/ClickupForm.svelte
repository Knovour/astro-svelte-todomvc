<script lang="ts">
	import Select from './Select.svelte'
	import { token, team, space, folder, list, taskTmpl } from '../stores'
</script>

{#if $token}
	<form>
		<div class="grid">
			<Select name="team" path="/teams" bind:value={$team}>Team/Workspace</Select>
			<Select name="space" path={`/spaces?team=${$team}`} bind:value={$space} ready={!!$team}>Space</Select>
			<Select name="folder" path={`/folders?space=${$space}`} bind:value={$folder} ready={!!$space}>Folder</Select>
			<Select name="list" path={`/lists?folder=${$folder}`} bind:value={$list} ready={!!$folder}>List</Select>
		</div>
		<Select name="taskTmpl" path={`/task-tmpls?team=${$team}`} bind:value={$taskTmpl} ready={!!$team}>
			Task Template
		</Select>
	</form>
{/if}
