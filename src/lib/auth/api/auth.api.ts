import ky from 'ky';

import { API_URL, api } from '$lib/common/api/api';
import type {
	AuthTokens,
	LoginRequestPayload,
	LoginResponse,
	RefreshResponse
} from '../types/auth.types';

export async function login(payload: LoginRequestPayload) {
	const { tokens } = await api.post('auth/login', { json: payload }).json<LoginResponse>();
	setTokens(tokens);
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

export function isRefreshTokenRelevant() {
	const expiresAt = localStorage.getItem(LocalStorage.RefreshTokenExpiresAt);
	return expiresAt && isTokenRelevant(expiresAt);
}

export async function tryUpdateTokens() {
	try {
		const { tokens } = await fetchRefreshedTokens();
		setTokens(tokens);

		return true;
	} catch {
		return false;
	}
}

export function updateAuthorizationHeader(request: Request): void {
	const token = localStorage.getItem(LocalStorage.AccessToken);

	if (token) {
		request.headers.set('Authorization', `Bearer ${token}`);
	}
}

function setTokens(tokens: AuthTokens) {
	localStorage.setItem(LocalStorage.AccessToken, tokens.access.token);
	localStorage.setItem(LocalStorage.AccessTokenExpiresAt, tokens.access.expiresAt);

	localStorage.setItem(LocalStorage.RefreshToken, tokens.refresh.token);
	localStorage.setItem(LocalStorage.RefreshTokenExpiresAt, tokens.refresh.expiresAt);
}

function isTokenRelevant(expiresAt: string): boolean {
	return Date.now() < new Date(expiresAt).getTime();
}

function fetchRefreshedTokens(): Promise<RefreshResponse> {
	return ky
		.post('auth/refresh', {
			credentials: 'include',
			prefixUrl: API_URL
		})
		.json<RefreshResponse>();
}

const enum LocalStorage {
	AccessToken = 'accessToken',
	AccessTokenExpiresAt = 'accessTokenExpiresAt',
	RefreshToken = 'refreshToken',
	RefreshTokenExpiresAt = 'refreshTokenExpiresAt',
	User = 'user'
}
