<script lang="ts">
	import { Cell, InnerGrid } from '@smui/layout-grid';
	import Textfield from '@smui/textfield';

	import type { DeepEmptyOmit } from '$lib/common/types/utility.types';
	import type { TeaNoteInfusion } from '$lib/tea-notes/models/infusion.model';
	import MeasureRate from '$lib/tea-notes/components/common/measure-rate.svelte';
	import SelectTastes from '$lib/tea-notes/components/infusion-form/select-tastes.svelte';

	export let infusion: DeepEmptyOmit<TeaNoteInfusion, 'tastes'> = null!;
</script>

<InnerGrid>
	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<Textfield
			bind:value={infusion.appearance}
			textarea
			label="Внешний вид"
			style="width: 100%;"
			input$cols={100}
			input$rows={6}
			input$resizable={false}
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<Textfield
			bind:value={infusion.aroma}
			textarea
			label="Аромат"
			input$cols={100}
			input$rows={6}
			input$resizable={false}
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<Textfield
			bind:value={infusion.taste}
			textarea
			label="Вкус"
			input$cols={100}
			input$rows={6}
			input$resizable={false}
		/>
	</Cell>

	<Cell span={6}>
		<SelectTastes bind:selected={infusion.tastes} />
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
