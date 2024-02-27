<script lang="ts">
	import { goto } from '$app/navigation';

	import TeaNoteForm from '$lib/tea-notes/components/TeaNoteForm.svelte';
	import { createNote } from '$lib/tea-notes/api/tea-notes.api';
	import { getEmptyTeaNote } from '$lib/tea-notes/models/tea-note.model';

	let note = getEmptyTeaNote();

	async function onSave() {
		const created = await createNote(note);
		await goto(`/notes/${created.id}`);
	}
</script>

<TeaNoteForm {note} isEmpty on:save={() => onSave()} />
