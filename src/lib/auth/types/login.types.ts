import { z } from 'zod';

import type { User } from '$lib/user/types/user.types';
import type { AuthTokens } from './auth.types';

export const LoginFormDataSchema = z.object({
	nickname: z.string().min(3).max(30),
	password: z.string().min(8).max(30)
});

export type LoginPayload = z.infer<typeof LoginFormDataSchema>;

export interface LoginResponse {
	tokens: AuthTokens;
	user: User;
}
