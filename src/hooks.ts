import { redirect, type Handle, type RequestEvent } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {
	if (isUrlAuthOnly(event) && !isAuth(event)) {
		redirect(303, '/auth/login');
	}

	if (!isUrlAuthOnly(event) && isAuth(event)) {
		redirect(303, '/notes');
	}

	return resolve(event);
};

function isUrlAuthOnly(event: RequestEvent): boolean {
	return !event.url.pathname.startsWith('/auth');
}

function isAuth(event: RequestEvent) {
	return !!event.cookies.get('User-Id');
}
