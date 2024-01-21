<div class="measure-rate">
    {#if caption}
    <div class="mdc-typography--subtitle2">{caption}</div>
    {/if}

    <div class="measure-rate__rates">
        {#if minLabel}<div class="mdc-typography--caption">{minLabel}</div>{/if}

        <Set let:chip bind:selected={rate} choice chips={rates}>
            <Chip {chip}>
              <Text>{chip}</Text>
            </Chip>
        </Set>

        {#if maxLabel}<div class="mdc-typography--caption">{maxLabel}</div>{/if}
    </div>
</div>

<style lang="scss">
    .measure-rate {
        
        &__rates {
            display: flex;
            align-items: center;
        }
    }
</style>

<script lang="ts">
    import Chip, { Set, Text } from '@smui/chips';
    
    export let rate: number | null = null
    export let caption = ''
    export let minLabel = ''
    export let maxLabel = ''
    
    const rates = [1, 2, 3, 4, 5]
</script>
