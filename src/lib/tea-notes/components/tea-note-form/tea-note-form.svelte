<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Paper from '@smui/paper';
	import Button, { Label } from '@smui/button';

	import GeneralInfoForm from '$lib/tea-notes/components/tea-note-form/general-info-form.svelte';
	import BrewingForm from '$lib/tea-notes/components/brewing-form/brewing-form.svelte';
	import DryLeafForm from '$lib/tea-notes/components/tea-note-form/dry-leaf-form.svelte';
	import InfusionForm from '$lib/tea-notes/components/tea-note-form/infusion-form.svelte';
	import AftertasteForm from '$lib/tea-notes/components/tea-note-form/aftertaste-form.svelte';
	import ImpressionForm from '$lib/tea-notes/components/tea-note-form/impression-form.svelte';
	import type { EmptyTeaNote } from '$lib/tea-notes/models/tea-note.model';

	export let note: EmptyTeaNote = null!;
	export let isEmpty = false

	const dispatch = createEventDispatcher();
</script>

<form class="tea-note-form" on:submit|preventDefault>
	<Paper variant="outlined">
		<div class="tea-note-form__header mdc-typography--headline4">
			{isEmpty ? 'Новая запись' : note.general.title}
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
					<Button on:click={() => dispatch('save', note)} variant="raised">
						<Label>Сохранить</Label>
					</Button>

					{#if !isEmpty}
					<Button on:click={() => dispatch('remove', note)} color="secondary" variant="outlined">
						<Label>Удалить</Label>
					</Button>
					{/if}
				</div>
			</Cell>
		</LayoutGrid>
	</Paper>
</form>

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
