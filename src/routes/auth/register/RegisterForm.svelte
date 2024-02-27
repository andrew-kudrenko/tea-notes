<Paper variant="outlined">
    <form use:form on:submit|preventDefault>
        <LayoutGrid>
            <Cell span={12}>
                <div class="tea-note-form__header mdc-typography--headline4">Регистрация</div>
            </Cell>

            <Cell span={12}>
                <Textfield
                    input$name="nickname"
                    bind:value={$data.nickname} 
                    invalid={!!$errors.nickname?.length}
                    label="Ник" 
                    variant="filled"
                    style="width: 100%;"
                    helperLine$style="width: 100%;"
                >
                    <HelperText slot="helper">{$errors.nickname ?? ''}</HelperText>
                    <Icon slot="trailingIcon">
                        {@html AccountIcon}
                    </Icon>
                </Textfield>
            </Cell>

            <Cell span={12}>
                <Textfield 
                    input$name="email"
                    bind:value={$data.email}
                    invalid={!!$errors.email?.length}
                    type="email"
                    label="Эл. почта" 
                    variant="filled"
                    style="width: 100%;"
                    helperLine$style="width: 100%;"
                >				
                    <HelperText slot="helper">{$errors.email ?? ''}</HelperText>
                    <Icon slot="trailingIcon">
                        {@html EmailIcon}
                    </Icon>
                </Textfield>
            </Cell>
            
            <Cell span={12}>
                <Textfield 
                    input$name="password"
                    bind:value={$data.password}
                    invalid={!!$errors.password?.length}
                    label="Пароль" 
                    type="password"
                    variant="filled"
                    style="width: 100%;"
                    helperLine$style="width: 100%;"
                >
                    <HelperText slot="helper">{$errors.password ?? ''}</HelperText>
                    <Icon slot="trailingIcon">
                        {@html PasswordIcon}
                    </Icon>
                </Textfield>
            </Cell>

            <Cell span={12}>
                <Textfield 
                    input$name="passwordRepeat"
                    bind:value={$data.passwordRepeat}
                    invalid={!!$errors.passwordRepeat?.length}
                    label="Подтверждение пароля" 
                    type="password"
                    variant="filled"
                    style="width: 100%;"
                    helperLine$style="width: 100%;"
                >
                    <HelperText slot="helper">{$errors.passwordRepeat ?? ''}</HelperText>
                    <Icon slot="trailingIcon">
                        {@html PasswordIcon}
                    </Icon>
                </Textfield>
            </Cell>
            
            <Cell span={12}>
                <hr>
                <Button 
                    type="button"
                    disabled={!$isValid}
                    on:click={() => dispatch('submit')} 
                    variant="outlined" 
                >
                    <Label>Отправить</Label>
                </Button>
            </Cell>

            <Cell span={12}>
                <a href="/auth/login">Уже есть аккаунт?</a>
            </Cell>
        </LayoutGrid>
    </form>
</Paper>


<script lang="ts">
	import type { createForm } from 'felte';
	import Paper from '@smui/paper';
	import LayoutGrid, { Cell } from '@smui/layout-grid'
	import Icon from '@smui/textfield/icon';
    import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import Button, { Label } from '@smui/button';
    
	import type { RegisterPayload } from '$lib/auth/types/register.types';
    import EmailIcon from '$lib/assests/icons/alternate_email.svg?raw'
	import PasswordIcon from '$lib/assests/icons/password.svg?raw'
	import AccountIcon from '$lib/assests/icons/account_circle.svg?raw'
	import { createEventDispatcher } from 'svelte';

    export let handler!: ReturnType<typeof createForm<RegisterPayload>>

    $: ({ form, data, errors, isValid } = handler)

    const dispatch = createEventDispatcher()
</script>
