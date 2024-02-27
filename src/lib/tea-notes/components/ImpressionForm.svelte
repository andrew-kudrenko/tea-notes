<script lang="ts">
	import { Cell, InnerGrid } from '@smui/layout-grid';
	import Textfield from '@smui/textfield';

	import type { TeaNoteImpression } from '$lib/tea-notes/models/impression.model';
	import MeasureRate from '$lib/tea-notes/components/MeasureRate.svelte';

	export let impression!: TeaNoteImpression
</script>

<InnerGrid>
	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<Textfield
			bind:value={impression.comment}
			textarea
			label="Комментарий"
			input$cols={100}
			input$rows={3}
			input$resizable={true}
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<Textfield
			bind:value={impression.wellCombinedWith}
			textarea
			label="Хорошо сочетается с"
			input$cols={100}
			input$rows={3}
			input$resizable={true}
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<MeasureRate
			bind:rate={impression.rate}
			caption="Оценка"
			minLabel="Рядовой"
			maxLabel="Исключительный"
		/>
	</Cell>
</InnerGrid>
