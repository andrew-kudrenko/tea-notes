<InnerGrid>
    <Cell span={6}>
        <Textfield 
            bind:value={infusion.appearance}
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
            bind:value={infusion.aroma}
            textarea
            style="width: 100%;"
            helperLine$style="width: 100%;"
            label="Аромат"
            input$rows={3}
            input$resizable={false}
        />
    </Cell>

    <Cell span={6}>
        <Textfield 
            bind:value={infusion.taste}
            textarea
            style="width: 100%;"
            helperLine$style="width: 100%;"
            label="Вкус"
            input$rows={3}
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

<script lang="ts">
    import { Cell, InnerGrid } from '@smui/layout-grid'
    import Textfield from '@smui/textfield'
    
	import type { DeepEmptyOmit } from '$lib/common/types/utility.types';
	import type { TeaNoteInfusion } from '$lib/tea-notes/models/infusion.model';
    import MeasureRate from '$lib/tea-notes/components/common/measure-rate.svelte'
    import SelectTastes from '$lib/tea-notes/components/infusion-form/select-tastes.svelte'

    export let infusion: DeepEmptyOmit<TeaNoteInfusion, 'tastes'> = null!;
</script>
