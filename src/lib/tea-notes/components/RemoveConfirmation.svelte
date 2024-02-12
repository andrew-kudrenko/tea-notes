<Dialog bind:open>
    {#if note}
    <Title>Подтвердите действие</Title>
    <Content>
        Вы действительно хотите удалить запись "{note.general.title}" 
        от {note.general.tastingDate}?
    </Content>
    <Actions>
        <Button on:click={() => dispatch('cancel')}>
            <Label>Нет</Label>
        </Button>
        
        <Button on:click={() => dispatch('accept', { id: note?.id })}>
            <Label>Да</Label>
        </Button>
    </Actions>
    {/if}
</Dialog>

<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import Dialog, { Title, Content, Actions } from '@smui/dialog'
  	import Button, { Label } from '@smui/button'

	import type { TeaNote } from '$lib/tea-notes/models/tea-note.model';

    export let note: TeaNote | null = null
    export let open = false
    
    const dispatch = createEventDispatcher()
</script>
