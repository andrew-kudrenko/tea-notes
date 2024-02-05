<script lang="ts">
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import { Label } from '@smui/common';
	import { TASTES, TASTE_KEYS, type Taste } from '$lib/tea-notes/models/infusion.model';

	export let selected: Taste[] = null!;

	// $: console.log('Selected', [...selected])
</script>

<div class="mdc-typography--subtitle2">Вкусы</div>

<SegmentedButton segments={TASTE_KEYS} let:segment bind:selected>
	<Segment {segment}>
		<Label>{TASTES[segment]}</Label>
	</Segment>
</SegmentedButton>
