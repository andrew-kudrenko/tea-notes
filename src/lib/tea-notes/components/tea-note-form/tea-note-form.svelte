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

	const dispatch = createEventDispatcher();
</script>

<form class="tea-note-form">
	<Paper variant="outlined">
		<div class="tea-note-form__header mdc-typography--headline4">Заметка</div>

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
				<Button on:click={() => dispatch('save', note)} variant="outlined">
					<Label>Сохранить</Label>
				</Button>
			</Cell>
		</LayoutGrid>
	</Paper>
</form>

<style lang="scss">
	.tea-note-form {
		max-width: 1000px;

		&__header {
			text-align: center;
		}
	}
</style>
