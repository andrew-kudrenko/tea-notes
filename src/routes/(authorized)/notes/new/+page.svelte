<TeaNoteForm note={note} on:save={() => save()} />

<script lang=ts>
	import { goto } from '$app/navigation';

    import TeaNoteForm from '$lib/tea-notes/components/tea-note-form/tea-note-form.svelte'
    import { createNote } from '$lib/tea-notes/api/tea-notes.api'
	import { getEmptyTeaNote } from '$lib/tea-notes/models/tea-note.model';
	
	let note = getEmptyTeaNote()

    async function save() {
        await createNote(note)
        await goto('/notes')
    }
</script>
