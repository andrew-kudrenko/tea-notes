<div class="mdc-typography--headline4">Записки</div>

<a href="/notes/new">Новая записка</a>

<NoteList bind:selected {notes} on:remove={event => remove(event.detail.id)} />

<script lang=ts>
    import { onMount } from 'svelte';

	import type { TeaNote } from '$lib/tea-notes/models/tea-note.model'
	import { fetchNotes, removeNote } from '$lib/tea-notes/api/tea-notes.api'
    import NoteList from './note-list.svelte' 
 
    let selected: number[] = []
    let notes: TeaNote[] = []

    onMount(update)

    async function update() {
        try {
            notes = await fetchNotes()
        } catch (e) {
            notes = []
        }
    }

    async function remove(id: number) {
        await removeNote(id)
        await update()
    }
</script>
