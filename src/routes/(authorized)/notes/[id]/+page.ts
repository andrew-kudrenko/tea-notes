import { fetchNoteById } from '$lib/tea-notes/api/tea-notes.api';
import type { TeaNote } from '$lib/tea-notes/models/tea-note.model';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const data: { note: TeaNote | null } = { note: null };
	const id = parseInt(params.id);

	if (!Number.isNaN(id)) {
		data.note = await fetchNoteById(id);
	}

	return data;
};
