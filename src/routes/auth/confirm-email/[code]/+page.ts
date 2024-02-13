import { confirmEmail } from '$lib/auth/api/auth.api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	let isConfirmed = false;
	let error = '';

	try {
		await confirmEmail(params.code);
		isConfirmed = true;
	} catch (e) {
		error = e instanceof Error ? e.message : 'Ошибка';
	}

	return { isConfirmed, error };
};
