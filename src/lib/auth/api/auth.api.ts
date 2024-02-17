import { goto } from '$app/navigation';
import ky from 'ky';

import { API_URL } from '$lib/common/api/api';
import type {
	RegisterRequestPayload,
	LoginRequestPayload,
	LoginResponse
} from '../types/auth.types';
import { setAuthTokens } from '$lib/common/api/auth.api';

export const unauthorizedApi = ky.create({ prefixUrl: API_URL });

export function confirmEmail(code: string) {
	return unauthorizedApi.get(`auth/confirm-email/${code}`);
}

export async function register(payload: RegisterRequestPayload) {
	await unauthorizedApi.post('auth/register', { json: payload }).json();
}

export async function login(payload: LoginRequestPayload) {
	const { tokens } = await unauthorizedApi
		.post('auth/login', { json: payload })
		.json<LoginResponse>();

	setAuthTokens(tokens);

	await goto('/notes');
}
