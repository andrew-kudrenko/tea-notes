<script lang="ts">
	import { Cell, InnerGrid } from '@smui/layout-grid';
	import Textfield from '@smui/textfield';

	import type { TeaNoteAftertaste } from '$lib/tea-notes/models/aftertaste.model';
	import MeasureRate from '$lib/tea-notes/components/MeasureRate.svelte';

	export let aftertaste!: TeaNoteAftertaste
</script>

<InnerGrid>
	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<Textfield
			bind:value={aftertaste.comment}
			textarea
			label="Ощущения"
			input$cols={100}
			input$rows={3}
			input$resizable
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<MeasureRate
			bind:rate={aftertaste.duration}
			caption="Длительность"
			minLabel="Быстро уходящее"
			maxLabel="Длительное"
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<MeasureRate
			bind:rate={aftertaste.intensity}
			caption="Интенсивность"
			minLabel="Сдержанное"
			maxLabel="Выраженное"
		/>
	</Cell>
</InnerGrid>
