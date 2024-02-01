<script lang="ts">
	import { Cell, InnerGrid } from '@smui/layout-grid';
	import Textfield from '@smui/textfield';

	import type { DeepEmpty } from '$lib/common/types/utility.types';
	import { type TeaNoteBrewing } from '$lib/tea-notes/models/brewing.model';
	import SelectDishware from '$lib/tea-notes/components/brewing-form/select-dishware.svelte';
	import SelectMethod from '$lib/tea-notes/components/brewing-form/select-method.svelte';

	export let brewing: DeepEmpty<TeaNoteBrewing> = null!;
</script>

<InnerGrid>
	<Cell spanDevices={{ desktop: 4, tablet: 4, phone: 4 }}>
		<Textfield
			bind:value={brewing.temperature}
			type="number"
			label="Температура, °C"
			variant="filled"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			input$min={0}
			input$max={100}
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 4, tablet: 4, phone: 4 }}>
		<Textfield
			bind:value={brewing.quantity}
			type="number"
			label="Количество чая, г"
			variant="filled"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			input$min={1}
			input$max={100}
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 4, tablet: 4, phone: 4 }}>
		<Textfield
			bind:value={brewing.volume}
			type="number"
			label="Объем воды, мл"
			variant="filled"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			input$min={1}
			input$max={5_000}
		/>
	</Cell>

	<Cell span={6}>
		<SelectDishware bind:dishware={brewing.dishware} />
	</Cell>
	<Cell span={6}>
		<SelectMethod bind:method={brewing.method} />
	</Cell>
</InnerGrid>
