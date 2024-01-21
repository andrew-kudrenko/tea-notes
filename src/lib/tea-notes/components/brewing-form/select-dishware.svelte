<div class="mdc-typography--subtitle2">Посуда</div>

<SegmentedButton 
    singleSelect 
    segments={DISHWARE_KEYS} 
    bind:selected={dishware}
    let:segment 
>
    <Segment {segment}>
        <Label>{DISHWARES[segment]}</Label>
    </Segment>
</SegmentedButton>

<script lang="ts">
    import { Label } from '@smui/common';
    import SegmentedButton, { Segment } from '@smui/segmented-button';

	import { DISHWARE_KEYS, DISHWARES, type TeaDishware } from "$lib/tea-notes/models/brewing.model";

    export let dishware: TeaDishware | null = null
</script>
