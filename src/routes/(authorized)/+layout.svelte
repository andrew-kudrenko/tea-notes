<script lang="ts">
	import AppBar from '$lib/common/components/app-bar/app-bar.svelte';
</script>

<AppBar>
	<div class="app">
		<slot />
	</div>
</AppBar>

<style lang="scss">
	.app {
		max-width: 1000px;

		display: flex;
		flex-direction: column;

		margin: 0 auto;
		padding: 0.5rem;
	}
</style>
