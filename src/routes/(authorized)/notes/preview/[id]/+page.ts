import { goto } from '$app/navigation';
import { fetchNoteById } from '$lib/tea-notes/api/tea-notes.api';
import type { PageLoad } from '../../[id]/$types';

export const load: PageLoad = async ({ params }) => {
	const id = parseInt(params.id);

	if (Number.isNaN(id)) {
		await goto('/notes');
	}

	return { note: await fetchNoteById(id) };
};
