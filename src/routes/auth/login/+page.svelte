<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import Button, { Label } from '@smui/button';

	import { login } from '$lib/auth/api/auth.api';
	import type { LoginRequestPayload } from '$lib/auth/types/auth.types';

	let credentials: LoginRequestPayload = {
		nickname: 'luuy',
		password: 'e5573g39ra'
	};
</script>

<form class="auth-login-form">
	<Textfield bind:value={credentials.nickname} variant="filled" label="Ник">
		<Icon class="material-icons" slot="trailingIcon">account</Icon>
	</Textfield>

	<Textfield bind:value={credentials.password} variant="filled" label="Пароль" type="password">
		<Icon class="material-icons" slot="trailingIcon">password</Icon>
	</Textfield>

	<hr />

	<Button on:click={() => login(credentials)} variant="outlined">
		<Label>Войти</Label>
	</Button>
</form>
