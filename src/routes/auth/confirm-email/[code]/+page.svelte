{#if data.isConfirmed}
    E-mail подтверждён, скоро Вы будете перенаправлены на главную страницу
{/if}

{#if data.error}
    Ошибка. {data.error}
{/if}

<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
	import { login } from "$lib/auth/api/auth.api";

    export let data!: PageData;

    onMount(() => {
        if (data.isConfirmed) {
            setTimeout(async () => {
                const nickname = localStorage.getItem('nickname')
                const password = localStorage.getItem('password')

                if (nickname && password) {
                    await login({ nickname, password })
                }

                localStorage.removeItem('nickname')
                localStorage.removeItem('password')
            }, 1_000)      
        }
    })
</script>
