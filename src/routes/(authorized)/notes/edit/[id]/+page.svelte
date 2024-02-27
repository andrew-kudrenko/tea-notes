<script lang="ts">
	import { goto } from '$app/navigation';

	import TeaNoteForm from '$lib/tea-notes/components/TeaNoteForm.svelte';
	import { editNote, removeNote } from '$lib/tea-notes/api/tea-notes.api';
	import type { TeaNote } from '$lib/tea-notes/models/tea-note.model';

	import type { PageData } from './$types';

	export let data!: PageData

	let note!: TeaNote

	$: if (data.note) note = data.note;

	async function onSave(event: CustomEvent<{ note: TeaNote }>) {
		const edited = await editNote(event.detail.note)
		note = edited
	}

	async function onRemove(event: CustomEvent<{ id: number }>) {
		await removeNote(event.detail.id)
		await goto('/notes')
	}
</script>

{#if data.note}
	<TeaNoteForm 
		{note} 
		on:save={onSave} 
		on:remove={onRemove} 
	/>
{:else}
	<div>Not found</div>
{/if}
