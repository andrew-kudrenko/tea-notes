import ky, { type NormalizedOptions } from 'ky';

import { PUBLIC_API_URL } from '$env/static/public';

import { logout, tryUpdateAuthTokens, attachAuthorizationHeader } from '$lib/common/api/auth.api';

export const API_URL = PUBLIC_API_URL;

export const api = ky.create({
	prefixUrl: API_URL,
	credentials: 'include',
	hooks: {
		beforeRequest: [attachAuthorizationHeader],
		afterResponse: [retryWithRefreshedTokens]
	}
});

async function retryWithRefreshedTokens(
	request: Request,
	options: NormalizedOptions,
	response: Response
) {
	if (!response.ok && response.status === 401) {
		if (await tryUpdateAuthTokens()) {
			attachAuthorizationHeader(request);
			return api(request, options);
		} else {
			await logout();
		}
	}
}
