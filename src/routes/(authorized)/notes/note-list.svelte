<List class="demo-list" twoLine>
    {#each notes as note}
    <Item>
        <Graphic>
            <Checkbox bind:group={selected} value={note.id} />
        </Graphic>
        <Text>
            <a href={`/notes/${note.id}`}>
                <PrimaryText>{note.general.title}</PrimaryText>
            </a>
            <SecondaryText>
                {note.brewing.method ? METHODS[note.brewing.method] : ''}
            </SecondaryText>
        </Text>
        <Meta>
            <IconButton on:click={() => dispatch('remove', { id: note.id })} class="material-icons">
                delete
            </IconButton>
            <a href={`/notes/${note.id}`}>
                <IconButton class="material-icons">edit</IconButton>
            </a>
        </Meta>
    </Item>
    <Separator />
    {/each}
</List>

<script lang=ts>
    import { createEventDispatcher } from 'svelte';

    import List, {
        Item,
        Graphic,
        Separator,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from '@smui/list'
    import IconButton from '@smui/icon-button'
    import Checkbox from '@smui/checkbox'

	import { METHODS } from '$lib/tea-notes/models/brewing.model';
	import type { TeaNote } from '$lib/tea-notes/models/tea-note.model'

    export let notes: TeaNote[] = null!
    export let selected: number[] = null!

    const dispatch = createEventDispatcher()
</script>
