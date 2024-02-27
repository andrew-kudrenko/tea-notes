<script lang="ts">
	import { Cell, InnerGrid } from '@smui/layout-grid';

	import { TASTES, TASTE_KEYS, type TeaNoteInfusion } from '$lib/tea-notes/models/infusion.model';
	import MeasureRate from '$lib/tea-notes/components/MeasureRate.svelte';
	import { Label } from '@smui/button';
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import Textfield from '@smui/textfield';

	export let infusion!: TeaNoteInfusion
</script>

<InnerGrid>
	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<Textfield
			bind:value={infusion.appearance}
			textarea
			label="Внешний вид"
			input$cols={100}
			input$rows={3}
			input$resizable={true}
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<Textfield
			bind:value={infusion.aroma}
			textarea
			label="Аромат"
			input$cols={100}
			input$rows={3}
			input$resizable={true}
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<Textfield
			bind:value={infusion.taste}
			textarea
			label="Вкус"
			input$cols={100}
			input$rows={3}
			input$resizable={true}
		/>
	</Cell>

	<Cell span={6}>
		<div class="mdc-typography--subtitle2">Вкусы</div>

		<SegmentedButton segments={TASTE_KEYS} let:segment bind:selected={infusion.tastes}>
			<Segment {segment}>
				<Label>{TASTES[segment]}</Label>
			</Segment>
		</SegmentedButton>
	</Cell>

	<Cell span={6}>
		<MeasureRate
			bind:rate={infusion.balance}
			caption="Баланс"
			minLabel="Грубый"
			maxLabel="Гармоничный"
		/>
	</Cell>

	<Cell span={6}>
		<MeasureRate
			bind:rate={infusion.bouquet}
			caption="Букет"
			minLabel="Плоский"
			maxLabel="Богатый"
		/>
	</Cell>

	<Cell span={6}>
		<MeasureRate
			bind:rate={infusion.extractivity}
			caption="Экстрактивность"
			minLabel="Водянистый"
			maxLabel="Крепкий"
		/>
	</Cell>

	<Cell span={6}>
		<MeasureRate
			bind:rate={infusion.tartness}
			caption="Терпкость"
			minLabel="Сочный"
			maxLabel="Терпкий"
		/>
	</Cell>

	<Cell span={6}>
		<MeasureRate
			bind:rate={infusion.density}
			caption="Плотность"
			minLabel="Лёгкий"
			maxLabel="Плотный"
		/>
	</Cell>

	<Cell span={6}>
		<MeasureRate
			bind:rate={infusion.viscosity}
			caption="Вязкость"
			minLabel="Гладкий"
			maxLabel="Шершавый"
		/>
	</Cell>
</InnerGrid>
