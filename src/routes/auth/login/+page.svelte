<div class="login-page">
	<Paper variant="outlined">
		<form class="auth-login-form" on:submit|preventDefault>
			<LayoutGrid>
				<Cell span={12}>
					<div class="tea-note-form__header mdc-typography--headline4">Войти</div>
				</Cell>
	
				<Cell span={12}>
					<Textfield 
						bind:value={credentials.nickname} 
						label="Ник" 
						variant="filled"
						style="width: 100%;"
						helperLine$style="width: 100%;"
					>
						<Icon slot="trailingIcon">
							{@html AccountIcon}
						</Icon>
					</Textfield>
				</Cell>
				
				<Cell span={12}>
					<Textfield 
						bind:value={credentials.password} 
						label="Пароль" 
						type="password"
						variant="filled"
						style="width: 100%;"
						helperLine$style="width: 100%;"
					>
						<Icon slot="trailingIcon">
							{@html PasswordIcon}
						</Icon>
					</Textfield>
				</Cell>
				
				<Cell span={12}>
					<div class="auth-login-form__actions">
						<Button on:click={() => login(credentials)} variant="outlined">
							<Label>Войти</Label>
						</Button>
					</div>
				</Cell>
	
				<Cell span={12}>
					<hr />
					<a href="/auth/register">Ещё нет аккаунта?</a>
				</Cell>
			</LayoutGrid>
		</form>
	</Paper>
</div>

<style lang="scss">
	.login-page {
		width: 100vw;
		height: 100vh;

		display: flex;
		align-items: center;
		justify-content: center;

		background: rgb(255,255,255);

		.auth-login-form {
			background-color: #fff;

			&__actions {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
	
<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import Button, { Label } from '@smui/button';
	import LayoutGrid, { Cell } from '@smui/layout-grid'

	import PasswordIcon from '$lib/assests/icons/password.svg?raw'
	import AccountIcon from '$lib/assests/icons/account_circle.svg?raw'
	import { login } from '$lib/auth/api/auth.api';
	import type { LoginPayload } from '$lib/auth/types/login.types';
	import Paper from '@smui/paper';

	let credentials: LoginPayload = {
		nickname: 'luuy',
		password: 'e5573g39ra'
	};
</script>
