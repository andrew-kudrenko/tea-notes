import { redirect, type Handle, type RequestEvent } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {
	console.log(event.url.pathname, isAuth(event));

	if (!event.url.pathname.startsWith('/auth') && !isAuth(event)) {
		throw redirect(303, '/auth/login');
	}

	if (event.url.pathname.startsWith('/auth') && isAuth(event)) {
		throw redirect(303, '/notes');
	}

	return resolve(event);
};

function isAuth(event: RequestEvent) {
	return !!event.cookies.get('User-Id');
}
