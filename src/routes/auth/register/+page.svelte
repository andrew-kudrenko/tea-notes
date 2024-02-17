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
						bind:value={formData.nickname} 
						invalid={errors.nickname.length > 0}
						label="Ник" 
						variant="filled"
						style="width: 100%;"
						helperLine$style="width: 100%;"
					>
						<HelperText slot="helper">{errors.nickname}</HelperText>
						<Icon slot="trailingIcon">
							{@html AccountIcon}
						</Icon>
					</Textfield>
				</Cell>

                <Cell span={12}>
					<Textfield 
						bind:value={formData.email} 
						invalid={errors.email.length > 0}
                        type="email"
						label="Эл. почта" 
						variant="filled"
						style="width: 100%;"
						helperLine$style="width: 100%;"
					>				
						<HelperText slot="helper">{errors.email}</HelperText>
						<Icon slot="trailingIcon">
							{@html AccountIcon}
						</Icon>
					</Textfield>
				</Cell>
				
				<Cell span={12}>
					<Textfield 
						bind:value={formData.password} 
						invalid={errors.password.length > 0}
						label="Пароль" 
						type="password"
						variant="filled"
						style="width: 100%;"
						helperLine$style="width: 100%;"
					>
						<HelperText slot="helper">{errors.password}</HelperText>
						<Icon slot="trailingIcon">
							{@html PasswordIcon}
						</Icon>
					</Textfield>
				</Cell>

                <Cell span={12}>
					<Textfield 
						bind:value={formData.passwordRepeat}
						invalid={errors.passwordRepeat.length > 0}
						label="Подтверждение пароля" 
						type="password"
						variant="filled"
						style="width: 100%;"
						helperLine$style="width: 100%;"
					>
						<HelperText slot="helper">{errors.passwordRepeat}</HelperText>
						<Icon slot="trailingIcon">
							{@html PasswordIcon}
						</Icon>
					</Textfield>
				</Cell>
				
				<Cell span={12}>
					<hr />
					<div class="auth-login-form__actions">
						<Button 
							disabled={!isValid} 
							on:click={() => onSubmit(formData)} 
							variant="outlined"
						>
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
	import { HTTPError } from 'ky';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import Button, { Label } from '@smui/button';
	import LayoutGrid, { Cell } from '@smui/layout-grid'
	import HelperText from '@smui/textfield/helper-text';

	import PasswordIcon from '$lib/assests/icons/password.svg?raw'
	import AccountIcon from '$lib/assests/icons/account_circle.svg?raw'
	import { register } from '$lib/auth/api/auth.api';
	import { RegisterFormDataSchema, type RegisterPayload } from '$lib/auth/types/register.types';

	let formData: RegisterPayload = {
		nickname: 'luuy',
		password: 'e5573g39ra',
        passwordRepeat: 'e5573g39ra',
        email: 'andrewkudrenko19@gmail.com',
	};

	let errors: Record<keyof RegisterPayload, string> = {
		nickname: '',
		password: '',
        passwordRepeat: '',
        email: '',
	}

	let isValid = false

	$: {
		const result = RegisterFormDataSchema.safeParse(formData)
		isValid = result.success
	}

	async function onSubmit(credentials: RegisterPayload) {
		try {
			await register(credentials)
		} catch (e) {
			if (e instanceof HTTPError) {
				const response = await e.response.json()
				Object.keys(errors).forEach(k => errors[k] = response.errors[k] ?? '')
				errors = errors
			}
		}
	}
</script>
