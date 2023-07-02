<script lang="ts">
	import { token } from '../stores'

	let value
</script>

<form on:submit|preventDefault={() => ($token = value)}>
	<label>Token</label>
	<input type="text" name="token" bind:value />
	<button type="submit">送出</button>
</form>
