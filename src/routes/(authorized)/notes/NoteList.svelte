<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	import DataTable, {
		Head,
		Body,
		Row,
		Cell,
		Pagination,
	} from '@smui/data-table';
	import Select, { Option } from '@smui/select';
	import { Label } from '@smui/common';
	import IconButton from '@smui/icon-button';
	import Checkbox from '@smui/checkbox'
	
	import { METHODS } from '$lib/tea-notes/models/brewing.model';
	import type { TeaNote } from '$lib/tea-notes/models/tea-note.model';
	import { TEA_KINDS } from './../../../lib/tea-notes/models/general-info.model';
	
	import RemoveConfirmation from '$lib/tea-notes/components/RemoveConfirmation.svelte';
	
	export let notes: TeaNote[] = [];
	
	let selectedNote: TeaNote | null = null
	let rowsPerPage = 10;
	let currentPage = 0;
	let selected = []
	
	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, notes.length);
	$: slice = notes.slice(start, end);
	$: lastPage = Math.max(Math.ceil(notes.length / rowsPerPage) - 1, 0);

	const dispatch = createEventDispatcher();
</script>

<DataTable table$aria-label="Todo list" style="width: 100%;">
	<Head>
	  <Row>
		<Cell checkbox>
			<Checkbox />
		  </Cell>
		<Cell style="width: 100%;">Название</Cell>
		<Cell>Вид</Cell>
		<Cell numeric>Дата</Cell>
		<Cell numeric>Способ</Cell>
	  </Row>
	</Head>
	<Body>
	  {#each slice as item (item.id)}
		<Row>
			<Cell checkbox>
				<Checkbox
					bind:group={selected}
					value={item}
					valueKey={String(item.id)}
				/>
			</Cell>
		  <Cell>
			<a href={`/notes/${item.id}`}>
				<b>
					{item.general.title}
				</b>
			</a>
			</Cell>
		  <Cell>{TEA_KINDS[item.general.kind] ?? '-'}</Cell>
		  <Cell>{item.general.tastingDate}</Cell>
		  <Cell>{METHODS[item.brewing.method] ?? '-'}</Cell>
		</Row>
	  {/each}
	</Body>
   
	<Pagination slot="paginate">
	  <svelte:fragment slot="rowsPerPage">
		<Label>Rows Per Page</Label>
		<Select variant="outlined" bind:value={rowsPerPage} noLabel>
		  <Option value={10}>10</Option>
		  <Option value={25}>25</Option>
		  <Option value={100}>100</Option>
		</Select>
	  </svelte:fragment>
	  <svelte:fragment slot="total">
		{start + 1}-{end} of {notes.length}
	  </svelte:fragment>
   
	  <IconButton
		class="material-icons"
		action="first-page"
		title="First page"
		on:click={() => (currentPage = 0)}
		disabled={currentPage === 0}>first_page</IconButton
	  >
	  <IconButton
		class="material-icons"
		action="prev-page"
		title="Prev page"
		on:click={() => currentPage--}
		disabled={currentPage === 0}>chevron_left</IconButton
	  >
	  <IconButton
		class="material-icons"
		action="next-page"
		title="Next page"
		on:click={() => currentPage++}
		disabled={currentPage === lastPage}>chevron_right</IconButton
	  >
	  <IconButton
		class="material-icons"
		action="last-page"
		title="Last page"
		on:click={() => (currentPage = lastPage)}
		disabled={currentPage === lastPage}>last_page</IconButton
	  >
	</Pagination>
  </DataTable>

<RemoveConfirmation
	bind:note={selectedNote}
	on:accept={({ detail }) => dispatch('remove', { id: detail.id })}
/>
