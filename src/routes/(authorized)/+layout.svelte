<script context="module" lang="ts">
	import { browser } from '$app/environment';

	import AppBar from '$lib/common/components/app-bar/app-bar.svelte';
	import { fetchMe } from '$lib/user/api/users.api';

	export async function load() {
		const user = await fetchMe()

		console.log('USER!', user);

		if (browser && !user) {
			return {
				redirect: '/auth/login',
				status: 302,
			}
		}

		return { user }
	}
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
