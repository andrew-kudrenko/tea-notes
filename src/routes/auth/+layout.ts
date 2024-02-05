import { get } from 'svelte/store';

import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { user } from '$lib/user/store/user.store';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	if (browser && get(user)) {
		await goto('/notes');
	}
};
