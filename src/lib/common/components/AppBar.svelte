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
	import List, { Item, Text, Separator } from '@smui/list';
	import MenuSurface from '@smui/menu-surface';

	import { logout } from '$lib/common/api/auth.api';
	import { user } from '$lib/user/store/user.store';

	import MenuIcon from '$lib/assests/icons/menu.svg?raw'
	import AccountIcon from '$lib/assests/icons/account_circle.svg?raw'

	let open = false;
	let active = '';

	function setActive(title: string) {
		active = title;
		open = false;
	}

	let topAppBar: TopAppBar = null!;
	let surface: MenuSurface;

	const pages: Record<'title' | 'url', string>[] = [
		{ title: 'Записки', url: '/notes' },
		{ title: 'Создать записку', url: '/notes/new' },
	] as const;
</script>

<Drawer variant="modal" fixed bind:open>
	<Header>
		<DrawerTitle>
			<span>Tea Notes</span>
			<IconButton on:click={() => (open = !open)}>
				{@html MenuIcon}
			</IconButton>
		</DrawerTitle>
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
					<Text>{page.title}</Text>
				</Item>
				<Separator />
			{/each}
		</List>
	</Content>
</Drawer>

<Scrim fixed />
<AppContent class="app-content">
	<TopAppBar bind:this={topAppBar} variant="standard">
		<Row>
			<Section>
				<IconButton on:click={() => (open = !open)}>
					{@html MenuIcon}
				</IconButton>
				{#if !open}
					<Title>Tea Notes</Title>
				{/if}
			</Section>

			<Section align="end" toolbar>
				{#if $user}
				<div class="mdc-typography--subtitle2">{$user.nickname}</div>
				<IconButton on:click={() => surface.setOpen(true)}>
					{@html AccountIcon}
				</IconButton>
				{/if}
				<div style="margin: 1em; display: flex; flex-direction: column; align-items: flex-end;">
					<MenuSurface bind:this={surface} anchorCorner="BOTTOM_RIGHT">
						<List>
							<Item>
								<Text>Профиль</Text>
							</Item>
	
							<Separator />
							<Item on:click={logout}>
								<Text>Выйти</Text>
							</Item>
						</List>
					</MenuSurface>
				</div>
			</Section>
		</Row>
	</TopAppBar>
	<AutoAdjust {topAppBar}>
		<slot />
	</AutoAdjust>
</AppContent>
