import type { User } from '$lib/user/types/user.types';

export interface LoginRequestPayload {
	nickname: string;
	password: string;
}

export interface LoginResponse {
	tokens: AuthTokens;
	user: User;
}

export interface RefreshResponse {
	tokens: AuthTokens;
}

export interface AuthTokens {
	access: AuthToken;
	refresh: AuthToken;
}

export interface AuthToken {
	token: string;
	expiresAt: string;
}