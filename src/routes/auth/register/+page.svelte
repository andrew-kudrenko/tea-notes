<div class="login-page">
	<div class="container">
		<div class="picture"></div>
		<form class="auth-login-form" on:submit|preventDefault>
			<LayoutGrid>
				<Cell span={12}>
					<div class="tea-note-form__header mdc-typography--headline4">Регистрация</div>
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
						bind:value={credentials.email} 
                        type="email"
						label="Эл. почта" 
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
					<Textfield 
						bind:value={credentials.passwordRepeat} 
						label="Подтверждение пароля" 
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
					<hr />
					<div class="auth-login-form__actions">
						<Button on:click={() => register(credentials)} variant="outlined">
							<Label>Отправить</Label>
						</Button>
					</div>
				</Cell>
			</LayoutGrid>
		</form>
	</div>
</div>

<style lang="scss">
	.login-page {
		width: 100vw;
		height: 100vh;

		display: flex;
		align-items: center;
		justify-content: center;

		background: rgb(255,255,255);

		.container {
			min-width: 600px;
			display: flex;
			border-radius: 5px;
			border: 1px solid #ccc;

			.picture {
				flex-grow: 1;
				background-image: url('https://i.pinimg.com/564x/48/d1/0a/48d10a15a16f8c9aa852c2601c81943b.jpg');
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
			}
		}

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

	import { register } from '$lib/auth/api/auth.api';
	import type { RegisterRequestPayload } from '$lib/auth/types/auth.types';

	import PasswordIcon from '$lib/assests/icons/password.svg?raw'
	import AccountIcon from '$lib/assests/icons/account_circle.svg?raw'

	let credentials: RegisterRequestPayload = {
		nickname: 'luuy',
		password: 'e5573g39ra',
        passwordRepeat: 'e5573g39ra',
        email: 'andrewkudrenko19@gmail.com',
	};
</script>
