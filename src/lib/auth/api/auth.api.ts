import ky from 'ky';

import { API_URL, api } from '$lib/api/api';
import type { LoginRequestPayload, RefreshResponse } from '../types/auth.types';

export function login(payload: LoginRequestPayload) {
	return api.post('auth/login', { json: payload });
}

export async function logout() {
	try {
		await api.post('auth/logout');
	} finally {
		localStorage.removeItem(LocalStorage.AccessToken);
		localStorage.removeItem(LocalStorage.AccessTokenExpiresAt);

		localStorage.removeItem(LocalStorage.RefreshToken);
		localStorage.removeItem(LocalStorage.RefreshTokenExpiresAt);
	}
}

export async function updateTokens() {
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

export function updateAuthorizationHeader(request: Request): void {
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
