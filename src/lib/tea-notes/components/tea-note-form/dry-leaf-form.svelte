<script lang="ts">
	import { Cell, InnerGrid } from '@smui/layout-grid';
	import Textfield from '@smui/textfield';

	import type { DeepEmpty } from '$lib/common/types/utility.types';
	import type { TeaNoteDryLeaf } from '$lib/tea-notes/models/dry-leaf.model';

	export let dryLeaf: DeepEmpty<TeaNoteDryLeaf> = null!;
</script>

<InnerGrid>
	<Cell span={6}>
		<Textfield
			bind:value={dryLeaf.appearance}
			textarea
			style="width: 100%;"
			helperLine$style="width: 100%;"
			label="Внешний вид"
			input$rows={3}
			input$resizable={false}
		/>
	</Cell>
	<Cell span={6}>
		<Textfield
			bind:value={dryLeaf.aroma}
			textarea
			style="width: 100%;"
			helperLine$style="width: 100%;"
			label="Аромат"
			input$rows={3}
			input$resizable={false}
		/>
	</Cell>
</InnerGrid>
