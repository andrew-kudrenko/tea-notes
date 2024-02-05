<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import List, {
		Item,
		Separator,
		Meta,
		Text,
		PrimaryText,
		SecondaryText
	} from '@smui/list';
	import IconButton from '@smui/icon-button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
  	import Button, { Label } from '@smui/button';
 
	import { METHODS } from '$lib/tea-notes/models/brewing.model';
	import type { TeaNote } from '$lib/tea-notes/models/tea-note.model';
	
	import EditIcon from '$lib/assests/icons/edit.svg?raw'
	import DeleteIcon from '$lib/assests/icons/delete.svg?raw'
	
	export let notes: TeaNote[] = null!;

	let isDeletingDialogOpened = false;
	let selectedIndex = -1

	const dispatch = createEventDispatcher();
</script>

<List twoLine>
	{#each notes as note, idx}
		<Item>
			<Text>
				<a href={`/notes/${note.id}`} data-sveltekit-preload-data="tap">
					<PrimaryText>{note.general.title}</PrimaryText>
				</a>
				<SecondaryText>
					{note.brewing.method ? METHODS[note.brewing.method] : ''}
				</SecondaryText>
			</Text>
			<Meta>
				<IconButton on:click={() => {
					selectedIndex = idx
					isDeletingDialogOpened = true
				}}>
					{@html DeleteIcon}					
				</IconButton>
				<a href={`/notes/${note.id}`} data-sveltekit-preload-data="tap">
					<IconButton>
						{@html EditIcon}
					</IconButton>
				</a>
			</Meta>
		</Item>
		<Separator />
	{/each}
</List>

<Dialog bind:open={isDeletingDialogOpened}>
	<Title>Подтвердите действие</Title>
	<Content>Вы действительно хотите удалить?</Content>
	<Actions>
		<Button on:click={() => {
			isDeletingDialogOpened = false; 
			selectedIndex = -1;
		}}>
		<Label>Нет</Label>
		</Button>
		<Button on:click={() => dispatch('remove', { id: notes[selectedIndex].id })}>
		<Label>Да</Label>
		</Button>
	</Actions>
</Dialog>
