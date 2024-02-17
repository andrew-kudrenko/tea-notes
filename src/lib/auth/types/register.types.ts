import { z } from 'zod';

// At least one letter and one number. Length is from 8 to 30.
const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/;

// Only letters, digits, underscore and dot symbols. Length is from 3 to 30
const NICKNAME_PATTERN = /^[\d|\w|_|.]{3,30}$/;

export const RegisterFormDataSchema = z
	.object({
		nickname: z.string().min(2).max(30).regex(NICKNAME_PATTERN),
		email: z.string().email(),
		password: z.string().min(8).max(30).regex(PASSWORD_PATTERN),
		passwordRepeat: z.string()
	})
	.refine((data) => data.password === data.passwordRepeat, {
		message: 'Пароли не совпадают',
		path: ['passwordRepeat']
	});

export type RegisterPayload = z.infer<typeof RegisterFormDataSchema>;
