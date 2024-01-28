import { api } from '$lib/common/api/api';
import type { User } from '../types/user.types';

export async function fetchMe() {
	const response = await api.get('users/me');

	return response.status === 400 ? null : response.json<User>();
}
