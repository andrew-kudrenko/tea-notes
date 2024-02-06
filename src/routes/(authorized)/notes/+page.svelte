<script lang="ts">
	import { onMount } from 'svelte';
	
	import Fab, { Icon } from '@smui/fab'

	import type { TeaNote } from '$lib/tea-notes/models/tea-note.model';
	import { fetchNotes, removeNote } from '$lib/tea-notes/api/tea-notes.api';
	import NoteList from './NoteList.svelte';

	import AddNoteIcon from '$lib/assests/icons/note_add.svg?raw' 

	let notes: TeaNote[] = [];

	onMount(update);

	async function update() {
		try {
			notes = await fetchNotes();
		} catch (e) {
			notes = [];
		}
	}

	async function remove(id: number) {
		await removeNote(id);
		await update();
	}
</script>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-bottom: 1rem;
	}
</style>

<header class="header">
	<div class="mdc-typography--headline4">Заметки</div>

	<div class="new-note-button">
		<Fab color="primary" href='/notes/new'>
			<Icon>{@html AddNoteIcon}</Icon>
		</Fab>
	</div>
</header>


<NoteList {notes} on:remove={({detail}) => remove(detail.id)} />
