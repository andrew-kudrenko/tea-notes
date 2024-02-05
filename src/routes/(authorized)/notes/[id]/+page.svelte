<script lang="ts">
	import { goto } from '$app/navigation';

	import TeaNoteForm from '$lib/tea-notes/components/tea-note-form/tea-note-form.svelte';
	import { editNote, fetchNoteById, removeNote } from '$lib/tea-notes/api/tea-notes.api';
	import type { EmptyTeaNote, TeaNote } from '$lib/tea-notes/models/tea-note.model';

	import type { PageData } from './$types';

	export let data: PageData = null!;

	let note: EmptyTeaNote = null!;

	$: note = data.note as unknown as EmptyTeaNote;

	async function onSave() {
		await editNote(data.note as TeaNote)
		note = (await fetchNoteById(data.note!.id)) as unknown as EmptyTeaNote

		console.log('Done!', note.infusion.tastes);
	}

	async function onRemove() {
		if (data.note) {
			await removeNote(data.note.id)
			await goto('/notes')
		}
	}
</script>

{#if data.note}
	<TeaNoteForm {note} on:save={onSave} on:remove={onRemove} />
{:else}
	<div>Not found</div>
{/if}
