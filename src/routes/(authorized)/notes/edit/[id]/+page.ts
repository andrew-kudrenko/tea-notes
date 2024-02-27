import type { PageLoad } from './$types';
import { fetchNoteById } from '$lib/tea-notes/api/tea-notes.api';

export const load: PageLoad = async ({ params }) => {
	return {
		note: await fetchNoteById(parseInt(params.id))
	};
};
