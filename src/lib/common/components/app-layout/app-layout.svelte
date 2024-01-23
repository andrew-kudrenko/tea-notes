<AppBar {user}>
    <div class="app">
        <slot />
    </div>
</AppBar>

<style lang="scss">
    .app {
        max-width: 1000px;
        
        display: flex;
        flex-direction: column;

        margin: 0 auto;
        padding: .5rem;
    }
</style>

<script lang=ts>
    import AppBar from '$lib/common/components/app-bar/app-bar.svelte';

    import type { User } from '$lib/user/types/user.types';

    const user: User = {
        id: 2, 
        nickName: 'andy69',
        avatarUrl: '',
    } 
</script>
