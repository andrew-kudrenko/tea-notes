import ky from 'ky';

import { updateTokens, updateAuthorizationHeader } from '$lib/auth/api/auth.api';

export const API_URL = 'http://localhost:5291/api/';

export const api = ky.create({
	prefixUrl: API_URL,
	credentials: 'include',
	hooks: { beforeRequest: [updateTokens, updateAuthorizationHeader] }
});
