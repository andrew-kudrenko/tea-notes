import { api } from '$lib/common/api/api';
import type { User } from '../types/user.types';

export async function fetchMe() {
	try {
		const res = await api.get('users/me');
		return res.json<User>();
	} catch {
		return null;
	}
}
