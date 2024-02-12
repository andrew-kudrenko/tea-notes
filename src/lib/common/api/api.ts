import ky, { type NormalizedOptions } from 'ky';

import {
	isRefreshTokenRelevant,
	logout,
	tryUpdateTokens,
	updateAuthorizationHeader as attachAuthorizationHeader
} from '$lib/auth/api/auth.api';

export const API_URL = 'http://localhost:5291/api/';

export const api = ky.create({
	prefixUrl: API_URL,
	credentials: 'include',
	hooks: {
		beforeRequest: [(request) => attachAuthorizationHeader(request)],
		afterResponse: [retryWithRefreshedTokens.bind(null)]
	}
});

async function retryWithRefreshedTokens(
	request: Request,
	options: NormalizedOptions,
	response: Response
) {
	if (!response.ok && response.status === 401) {
		if (isRefreshTokenRelevant() && (await tryUpdateTokens())) {
			attachAuthorizationHeader(request);
			return api(request, options);
		} else {
			await logout();
		}
	}
}
