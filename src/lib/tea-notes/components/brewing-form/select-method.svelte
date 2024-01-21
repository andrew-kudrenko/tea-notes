<div class="mdc-typography--subtitle2">Способ приготовления</div>

<SegmentedButton 
    singleSelect 
    segments={METHOD_KEYS} 
    bind:selected={method}
    let:segment 
>
    <Segment {segment}>
        <Label>{METHODS[segment]}</Label>
    </Segment>
</SegmentedButton>

<script lang="ts">
    import { Label } from '@smui/common';
    import SegmentedButton, { Segment } from '@smui/segmented-button';

	import { METHODS, METHOD_KEYS, TeaBrewingMethod } from "$lib/tea-notes/models/brewing.model";

    export let method: TeaBrewingMethod | null = null
</script>
