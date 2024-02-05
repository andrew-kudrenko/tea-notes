import { get } from 'svelte/store';

import { browser } from '$app/environment';
import { fetchMe } from '$lib/user/api/users.api';
import { user } from '$lib/user/store/user.store';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	if (browser && !get(user)) {
		const me = await fetchMe();

		if (me) {
			user.set(me);
		}
	}
};
