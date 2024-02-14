{#if data.isConfirmed}
    E-mail подтверждён.
{:else}
    Ссылка некорректна или срок её действия истек.
{/if}

<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
	import { goto } from "$app/navigation";

    export let data!: PageData;

    onMount(() => {
        if (data.isConfirmed) {
            setTimeout(() => goto('/auth/login'), 1_000)      
        }
    })
</script>
