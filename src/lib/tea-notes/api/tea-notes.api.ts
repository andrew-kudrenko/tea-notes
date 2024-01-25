import { api } from '$lib/api/api';

import type { EmptyTeaNote, TeaNote } from '../models/tea-note.model';

const TEA_NOTES_ENDPOINT = 'notes';

export function fetchNotes() {
	return api.get(TEA_NOTES_ENDPOINT).json<TeaNote[]>();
}

export function fetchNoteById(id: number) {
	return api
		.get(`${TEA_NOTES_ENDPOINT}/${id}`)
		.json<TeaNote>()
		.catch(() => null);
}

export function createNote(note: EmptyTeaNote) {
	return api.post(TEA_NOTES_ENDPOINT, { json: note }).json<TeaNote>();
}

export function editNote(note: TeaNote) {
	return api.put(`${TEA_NOTES_ENDPOINT}/${note.id}`, { json: note }).json<TeaNote>();
}

export function removeNote(id: number) {
	return api.delete(`${TEA_NOTES_ENDPOINT}/${id}`).json();
}
