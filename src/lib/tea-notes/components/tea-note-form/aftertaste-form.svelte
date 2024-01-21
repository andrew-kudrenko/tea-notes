<InnerGrid>
    <Cell span={6}>
        <Textfield 
            bind:value={aftertaste.comment}
            textarea
            style="width: 100%;"
            helperLine$style="width: 100%;"
            label="Ощущения"
            input$rows={3}
            input$resizable={false}
        />
    </Cell>

    <Cell span={6}>
        <MeasureRate 
            bind:rate={aftertaste.duration} 
            caption="Длительность"
            minLabel="Быстро уходящее"
            maxLabel="Длительное"
        />
    </Cell>

    <Cell span={6}>
        <MeasureRate 
            bind:rate={aftertaste.intensity} 
            caption="Интенсивность"
            minLabel="Сдержанное"
            maxLabel="Выраженное"
        />
    </Cell>
</InnerGrid>

<script lang="ts">
    import { Cell, InnerGrid } from '@smui/layout-grid'
    import Textfield from '@smui/textfield'
    
	import type { DeepEmpty } from '$lib/common/types/utility.types';
	import type { TeaNoteAftertaste } from '$lib/tea-notes/models/aftertaste.model';
	import MeasureRate from '$lib/tea-notes/components/common/measure-rate.svelte';

    export let aftertaste: DeepEmpty<TeaNoteAftertaste> = null!
</script>
