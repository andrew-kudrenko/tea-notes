<script lang="ts">
	import { Cell, InnerGrid } from '@smui/layout-grid';
	import Textfield from '@smui/textfield';

	import type { TeaNoteDryLeaf } from '$lib/tea-notes/models/dry-leaf.model';

	export let dryLeaf!: TeaNoteDryLeaf
</script>

<InnerGrid>
	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<Textfield
			textarea
			bind:value={dryLeaf.appearance}
			label="Внешний вид"
			input$cols={100}
			input$rows={3}
			input$resizable={true}
		/>
	</Cell>
	<Cell spanDevices={{ desktop: 6, tablet: 12, phone: 12 }}>
		<Textfield
			bind:value={dryLeaf.aroma}
			label="Аромат"
			textarea
			input$cols={100}
			input$rows={3}
			input$resizable={true}			
		/>
	</Cell>
</InnerGrid>
