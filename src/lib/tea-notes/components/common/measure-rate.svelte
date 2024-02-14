<script lang="ts">
	import Chip, { Set, Text } from '@smui/chips';

	export let rate: number | null = null;
	export let caption = '';
	export let minLabel = '';
	export let maxLabel = '';

	const rates = [1, 2, 3, 4, 5];
</script>

<div class="measure-rate">
	{#if caption}
		<header class="measure-rate__header">
			<span class="mdc-typography--subtitle2">{caption}</span>
			{#if minLabel && maxLabel}
			<span class="mdc-typography--caption">({minLabel} / {maxLabel})</span>
			{/if}
		</header>
	{/if}

	<div class="measure-rate__rates">
		<Set let:chip bind:selected={rate} choice chips={rates}>
			<Chip {chip}>
				<Text>{chip}</Text>
			</Chip>
		</Set>
	</div>
</div>

<style lang="scss">
	.measure-rate {
		display: flex;
		flex-direction: column;
		// align-items: center;

		&__rates {
			// width: 100%;
			display: flex;
			align-items: center;
		}
	}
</style>
