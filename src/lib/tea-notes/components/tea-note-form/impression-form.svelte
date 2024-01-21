<InnerGrid>
    <Cell span={6}>
        <Textfield 
            bind:value={impression.comment}
            textarea
            style="width: 100%;"
            helperLine$style="width: 100%;"
            label="Комментарий"
            input$rows={3}
            input$resizable={false}
        />
    </Cell>

    <Cell span={6}>
        <Textfield 
            bind:value={impression.wellCombinedWith}
            textarea
            style="width: 100%;"
            helperLine$style="width: 100%;"
            label="Хорошо сочетается с"
            input$rows={3}
            input$resizable={false}
        />
    </Cell>

    <Cell span={6}>
        <MeasureRate 
            bind:rate={impression.rate} 
            caption="Оценка"
            minLabel="Рядовой"
            maxLabel="Исключительный"
        />
    </Cell>
</InnerGrid>

<script lang="ts">
    import { Cell, InnerGrid } from '@smui/layout-grid'
    import Textfield from '@smui/textfield'
    
	import type { DeepEmpty } from '$lib/common/types/utility.types';
	import type { TeaNoteImpression } from '$lib/tea-notes/models/impression.model';
	import MeasureRate from '$lib/tea-notes/components/common/measure-rate.svelte';

    export let impression: DeepEmpty<TeaNoteImpression> = null!
</script>
