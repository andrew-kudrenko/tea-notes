<script lang="ts">
	import { Cell, InnerGrid } from '@smui/layout-grid';

	import { DISHWARES, DISHWARE_KEYS, METHODS, METHOD_KEYS, type TeaNoteBrewing } from '$lib/tea-notes/models/brewing.model';
	import SegmentedButton, { Label, Segment } from '@smui/segmented-button';
	import Textfield from '@smui/textfield';

	export let brewing!: TeaNoteBrewing
</script>

<InnerGrid>
	<Cell spanDevices={{ desktop: 4, tablet: 4, phone: 4 }}>
		<Textfield
			bind:value={brewing.temperature}
			type="number"
			label="Температура, °C"
			variant="filled"
			input$min={0}
			input$max={100}
			style="width: 100%;"
			helperLine$style="width: 100%;"
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 4, tablet: 4, phone: 4 }}>
		<Textfield
			bind:value={brewing.quantity}
			type="number"
			label="Количество чая, г"
			variant="filled"
			input$min={1}
			input$max={100}
			style="width: 100%;"
			helperLine$style="width: 100%;"
		/>
	</Cell>

	<Cell spanDevices={{ desktop: 4, tablet: 4, phone: 4 }}>
		<Textfield
			bind:value={brewing.volume}
			type="number"
			label="Объем воды, мл"
			variant="filled"
			input$min={1}
			input$max={5_000}
			style="width: 100%;"
			helperLine$style="width: 100%;"
		/>
	</Cell>

	<Cell span={6}>
		<SegmentedButton 
			singleSelect 
			segments={DISHWARE_KEYS} 
			bind:selected={brewing.dishware} 
			let:segment
		>
			<Segment {segment}>
				<Label>{DISHWARES[segment]}</Label>
			</Segment>
		</SegmentedButton>
	</Cell>
	<Cell span={6}>
		<SegmentedButton 
			singleSelect 
			segments={METHOD_KEYS} 
			bind:selected={brewing.method} 
			let:segment
		>
			<Segment {segment}>
				<Label>{METHODS[segment]}</Label>
			</Segment>
		</SegmentedButton>
	</Cell>
</InnerGrid>
