<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Drawer, {
		AppContent,
		Content,
		Header,
		Title as DrawerTitle,
		Subtitle,
		Scrim,
	} from '@smui/drawer';
	import List, { Item, Text, Separator, Graphic } from '@smui/list';

	import type { User } from '$lib/user/types/user.types';
	import { logout } from '$lib/auth/api/auth.api';
	import { goto } from '$app/navigation';

	let open = false;
	let active = '';

	function setActive(title: string) {
		active = title;
		open = false;
	}

	const user: User = {
		id: 2,
		nickName: 'andy69',
		avatarUrl: ''
	};

	let topAppBar: TopAppBar = null!;

	const pages: Record<'title' | 'url', string>[] = [
		{ title: 'Записки', url: '/notes' },
		{ title: 'Создать записку', url: '/notes/new' },
	] as const;
</script>

<Drawer variant="modal" fixed bind:open>
	<Header>
		<DrawerTitle>Записочки</DrawerTitle>
		<Subtitle>Сохраняй впечатления!</Subtitle>
	</Header>
	<Content>
		<List>
			<Separator />

			{#each pages as page}
				<Item
					href={page.url}
					on:click={() => setActive(page.title)}
					activated={active === page.title}
				>
					<Graphic class="material-icons">bookmark</Graphic>
					<Text>{page.title}</Text>
				</Item>
				<Separator />
			{/each}
			<Item on:click={async () => {
				await logout()
				await goto('/auth/login')
			}}>
				<Text>Выйти</Text>
			</Item>
		</List>
	</Content>
</Drawer>

<Scrim fixed />
<AppContent class="app-content">
	<TopAppBar bind:this={topAppBar} variant="standard">
		<Row>
			<Section>
				<IconButton class="material-icons" on:click={() => (open = !open)}>
					{'menu'}
				</IconButton>
				{#if !open}
					<Title>Записочки</Title>
				{/if}
			</Section>

			<Section align="end" toolbar>
				<div class="mdc-typography--subtitle2">{user.nickName}</div>
				<IconButton class="material-icons">face</IconButton>
			</Section>
		</Row>
	</TopAppBar>
	<AutoAdjust {topAppBar}>
		<slot />
	</AutoAdjust>
</AppContent>
