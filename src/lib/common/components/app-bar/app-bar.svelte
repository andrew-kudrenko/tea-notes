<Drawer variant="dismissible" bind:open>
    <Header>
        <DrawerTitle>Записочки</DrawerTitle>
        <Subtitle>Сохраняй впечатления!</Subtitle>
    </Header>
    <Content>
        <List>
            {#each pages as page}
                <Item
                    href={page.url}
                    on:click={() => setActive(page.title)}
                    activated={active === page.title}
                    >
                    <Text>{page.title}</Text>
                </Item>
            {/each}
        </List>
    </Content>
</Drawer>

<AppContent class="app-content">
    <TopAppBar bind:this={topAppBar} variant="standard">
        <Row>
            <Section>
                <IconButton class="material-icons" on:click={() => (open = !open)}>
                    {open ? 'close' : 'menu'}
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

<script lang="ts">
import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
} from '@smui/top-app-bar'
import IconButton from '@smui/icon-button'
import Drawer, {
    AppContent,
    Content,
    Header,
    Title as DrawerTitle,
    Subtitle,
} from '@smui/drawer';
import List, {
    Item,
    Text
} from '@smui/list';

import type {
    User
} from '$lib/user/types/user.types';

let open = false;
let active = '';

function setActive(title: string) {
    active = title;
}

const user: User = {
    id: 2, 
    nickName: 'andy69',
    avatarUrl: '',
} 

let topAppBar: TopAppBar = null!

const pages: Record<'title' | 'url', string>[] = [
    { title: 'Вход', url: '/auth/login' },
    { title: 'Записки', url: '/notes' },
    { title: 'Создать записку', url: '/notes/new' },
    { title: 'Профиль', url: '/user' },
    { title: 'Index', url: '/' },
] as const
</script>
