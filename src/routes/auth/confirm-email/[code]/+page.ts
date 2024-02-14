import { confirmEmail } from '$lib/auth/api/auth.api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		await confirmEmail(params.code);
		return { isConfirmed: true };
	} catch {
		return { isConfirmed: false };
	}
};
