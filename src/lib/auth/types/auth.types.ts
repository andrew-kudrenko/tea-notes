export interface RefreshResponse {
	tokens: AuthTokens;
}

export interface AuthTokens {
	access: AuthToken;
}

export interface AuthToken {
	token: string;
	expiresAt: string;
}
