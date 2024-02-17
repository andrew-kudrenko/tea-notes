import ky from 'ky';

import { goto } from '$app/navigation';
import { API_URL, api } from '$lib/common/api/api';
import { user } from '$lib/user/store/user.store';
import { LocalStorageKey } from '$lib/common/utils/local-storage-key.utils';
import type { AuthTokens, RefreshResponse } from '../../auth/types/auth.types';

export async function logout() {
	try {
		await api.post('auth/logout');
	} finally {
		localStorage.removeItem(LocalStorageKey.AccessToken);
		localStorage.removeItem(LocalStorageKey.AccessTokenExpiresAt);
		user.set(null);
		await goto('/auth/login');
	}
}

export async function tryUpdateAuthTokens() {
	try {
		const { tokens } = await fetchRefreshedTokens();
		setAuthTokens(tokens);

		return true;
	} catch {
		return false;
	}
}

export function attachAuthorizationHeader(request: Request): void {
	const accessToken = localStorage.getItem(LocalStorageKey.AccessToken);

	if (accessToken) {
		request.headers.set('Authorization', `Bearer ${accessToken}`);
	}
}

export function setAuthTokens(tokens: AuthTokens) {
	localStorage.setItem(LocalStorageKey.AccessToken, tokens.access.token);
	localStorage.setItem(LocalStorageKey.AccessTokenExpiresAt, tokens.access.expiresAt);
}

function fetchRefreshedTokens(): Promise<RefreshResponse> {
	return ky
		.post('auth/refresh', {
			credentials: 'include',
			prefixUrl: API_URL
		})
		.json<RefreshResponse>();
}
