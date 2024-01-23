<AppLayout>
    <div class="mdc-typography--headline4">Записки</div>

    <List class="demo-list" twoLine>
        {#each notes as note}
        <Item>
            <Graphic>
                <Checkbox bind:group={selected} value={note.id} />
            </Graphic>
            <Text>
                <PrimaryText>{note.general.title}</PrimaryText>
                <SecondaryText>{note.brewing.method}</SecondaryText>
            </Text>
            <Meta>
                <IconButton class="material-icons">delete</IconButton>
                <IconButton class="material-icons">edit</IconButton>
            </Meta>
        </Item>
        <Separator />
        {/each}
    </List>
</AppLayout>

<script lang=ts>
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

    import AppLayout from '$lib/common/components/app-layout/app-layout.svelte'
	import type { TeaNote } from '$lib/tea-notes/models/tea-note.model';
	import { onMount } from 'svelte';
	import { api } from '$lib/common/api/api';
 
    let selected: number[] = []
    let notes: TeaNote[] = []

    onMount(() => {
        api.post('auth/login', {
            json: { nickName: "Van Darkholme", password: "dungeon-master69" },
        })
            .json()
            .then(console.log)
            .catch(console.info)

        // api.get('notes')
        //     .json()
        //     .then(data => console.log(data))
    })
</script>
