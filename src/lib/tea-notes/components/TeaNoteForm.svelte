<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Paper from '@smui/paper';
	import Button, { Label } from '@smui/button';

	import type { EmptyTeaNote, TeaNote } from '$lib/tea-notes/models/tea-note.model';
	import GeneralInfoForm from '$lib/tea-notes/components/GeneralInfoForm.svelte'
	import BrewingForm from '$lib/tea-notes/components/BrewingForm.svelte';
	import DryLeafForm from '$lib/tea-notes/components/DryLeaf-form.svelte';
	import InfusionForm from '$lib/tea-notes/components/InfusionForm.svelte';
	import AftertasteForm from '$lib/tea-notes/components/AftertasteForm.svelte';
	import ImpressionForm from '$lib/tea-notes/components/ImpressionForm.svelte';
	import RemoveConfirmation from '$lib/tea-notes/components/RemoveConfirmation.svelte';

	let removableNote: TeaNote | null = null;
	let isRemoveConfirmationOpened = false

	export let note: TeaNote = null!;
	export let isEmpty = false

	const dispatch = createEventDispatcher();

	function openRemoveConfirmation(note: TeaNote) {
		removableNote = note
		isRemoveConfirmationOpened = true
	} 

	function closeRemoveConfirmation() {
		removableNote = null
		isRemoveConfirmationOpened = false
	}
</script>

<form class="tea-note-form" on:submit|preventDefault>
	<Paper variant="outlined" elevation={10}>
		<div class="tea-note-form__header mdc-typography--headline4">
			{isEmpty ? 'Новая заметка' : note.general.title}
		</div>

		<LayoutGrid>
			<Cell span={12}>
				<div class="mdc-typography--headline6">Общая информация</div>
				<hr />
				<GeneralInfoForm general={note.general} />
			</Cell>

			<Cell span={12}>
				<div class="mdc-typography--headline6">Приготовление</div>
				<hr />
				<BrewingForm brewing={note.brewing} />
			</Cell>

			<Cell span={12}>
				<div class="mdc-typography--headline6">Сухой лист</div>
				<hr />
				<DryLeafForm dryLeaf={note.dryLeaf} />
			</Cell>

			<Cell span={12}>
				<div class="mdc-typography--headline6">Настой</div>
				<hr />
				<InfusionForm infusion={note.infusion} />
			</Cell>

			<Cell span={12}>
				<div class="mdc-typography--headline6">Послевкусие</div>
				<hr />
				<AftertasteForm aftertaste={note.aftertaste} />
			</Cell>

			<Cell span={12}>
				<div class="mdc-typography--headline6">Впечатление</div>
				<hr />
				<ImpressionForm impression={note.impression} />
			</Cell>

			
			<Cell span={12}>
				<hr />
				<div class="tea-note-form__actions">
					<Button on:click={() => dispatch('save', { note })} variant="raised">
						<Label>Сохранить</Label>
					</Button>

					{#if !isEmpty}
					<Button on:click={() => openRemoveConfirmation(note)} color="secondary" variant="outlined">
						<Label>Удалить</Label>
					</Button>
					{/if}
				</div>
			</Cell>
		</LayoutGrid>
	</Paper>
</form>

<RemoveConfirmation
	note={removableNote}
	bind:open={isRemoveConfirmationOpened}
	on:accept={({ detail }) => dispatch('remove', { id: detail.id })}
	on:cancel={() => closeRemoveConfirmation()}
/>

<style lang="scss">
	.tea-note-form {
		max-width: 1000px;

		hr {
			margin: .5rem 0 1rem;
		}

		&__header {
			text-align: center;
		}

		&__actions {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
		}
	}
</style>
