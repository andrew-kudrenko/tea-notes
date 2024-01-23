import ky from 'ky';

import type { RefreshResponse } from '$lib/auth/types/auth.types';

const API_URL = 'http://localhost:5291/api/';

export const api = ky.create({
	prefixUrl: API_URL,
	credentials: 'include',
	hooks: { beforeRequest: [updateTokens, updateAuthorizationHeader] }
});

async function updateTokens() {
	const accessToken = localStorage.getItem(LocalStorage.AccessToken);
	const accessExpiresAt = localStorage.getItem(LocalStorage.AccessTokenExpiresAt);

	if (accessToken && accessExpiresAt && !isTokenRelevant(accessExpiresAt)) {
		const { tokens } = await requestRefreshTokens();

		localStorage.setItem(LocalStorage.AccessToken, tokens.access.token);
		localStorage.setItem(LocalStorage.AccessTokenExpiresAt, tokens.access.expiresAt);

		localStorage.setItem(LocalStorage.RefreshToken, tokens.refresh.token);
		localStorage.setItem(LocalStorage.RefreshTokenExpiresAt, tokens.refresh.expiresAt);
	}
}

function updateAuthorizationHeader(request: Request): void {
	const token = localStorage.getItem(LocalStorage.AccessToken);

	if (token) {
		request.headers.set('Authorization', `Bearer ${token}`);
	}
}

function isTokenRelevant(expiresAt: string): boolean {
	return Date.now() < new Date(expiresAt).getTime();
}

async function requestRefreshTokens(): Promise<RefreshResponse> {
	return ky
		.post('auth/refresh', {
			credentials: 'include',
			prefixUrl: API_URL,
			retry: { limit: 3, maxRetryAfter: 3_000 }
		})
		.json<RefreshResponse>();
}

enum LocalStorage {
	AccessToken = 'accessToken',
	AccessTokenExpiresAt = 'accessTokenExpiresAt',
	RefreshToken = 'refreshToken',
	RefreshTokenExpiresAt = 'refreshTokenExpiresAt',
	User = 'user'
}
