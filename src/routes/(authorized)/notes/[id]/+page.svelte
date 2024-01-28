<script lang="ts">
	import TeaNoteForm from '$lib/tea-notes/components/tea-note-form/tea-note-form.svelte';
	import { editNote } from '$lib/tea-notes/api/tea-notes.api';

	import type { PageData } from './$types';

	export let data: PageData = null!;
</script>

{#if data.note}
	<TeaNoteForm note={data.note} on:save={() => editNote(data.note)} />
{:else}
	<div>Not found</div>
{/if}
