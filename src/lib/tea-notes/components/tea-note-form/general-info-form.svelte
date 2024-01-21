<InnerGrid>
    <Cell span={6}>
        <Textfield 
            bind:value={general.title} 
            label="Название" 
            variant="filled"
            style="width: 100%;"
            helperLine$style="width: 100%;"
        />
    </Cell>

    <Cell span={6}>
        <Select 
            bind:value={general.kind} 
            label="Вид"
            variant="filled" 
            hiddenInput
            style="width: 100%;"
        >
            <Option value="" />
            {#each TEA_KIND_KEYS as kind}
                <Option value={kind}>{TEA_KINDS[kind]}</Option>
            {/each}
        </Select>
    </Cell>

    <Cell span={6}>
        <Textfield 
            bind:value={general.manufacturer} 
            label="Изготовитель" 
            variant="filled"
            style="width: 100%;"
            helperLine$style="width: 100%;"
        />
    </Cell>

    <Cell span={6}>
        <Textfield 
            bind:value={general.region} 
            label="Регион" 
            variant="filled"
            style="width: 100%;"
            helperLine$style="width: 100%;"
        />
    </Cell>

    <Cell span={6}>
        <Textfield 
            bind:value={general.manufacturingYear} 
            label="Год изготовления" 
            variant="filled"
            style="width: 100%;"
            type="number"
            helperLine$style="width: 100%;"
            input$min={1900}
            input$max={2024}
            input$step={1}
        />
    </Cell>

    <Cell span={6}>
        <Textfield 
            bind:value={general.pricePerGram} 
            label="Цена за грамм, р" 
            variant="filled"
            style="width: 100%;"
            helperLine$style="width: 100%;"
            type="number"
            input$min={0}
            input$max={1_000}
        />
    </Cell>
</InnerGrid>

<script lang="ts">
    import { Cell, InnerGrid } from '@smui/layout-grid'
    import Textfield from '@smui/textfield'
    import Select, { Option } from '@smui/select';

	import type { DeepEmpty } from '$lib/common/types/utility.types';
	import { TEA_KINDS, TEA_KIND_KEYS, type TeaNoteGeneralInfo } from '$lib/tea-notes/models/general-info.model';

    export let general: DeepEmpty<TeaNoteGeneralInfo> = null!
</script>
