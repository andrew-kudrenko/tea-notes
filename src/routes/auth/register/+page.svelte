<div class="login-page">
	<RegisterForm handler={formHandler} on:submit={submit} />
</div>

<style lang="scss">
	.login-page {
		width: 100vw;
		height: 100vh;

		display: flex;
		align-items: center;
		justify-content: center;

		background: rgb(255,255,255);
	}
</style>

<script lang="ts">
	import { get } from 'svelte/store';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';
	
	import { RegisterPayloadSchema } from '$lib/auth/types/register.types';
	import { register } from '$lib/auth/api/auth.api';
	import RegisterForm from './RegisterForm.svelte';

	const formHandler = createForm({
		initialValues: {
			nickname: 'luuy',
			password: 'e5573g39ra',
			passwordRepeat: 'e5573g39ra',
			email: 'andrewkudrenko19@gmail.com',
		},
		extend: [validator({ schema: RegisterPayloadSchema })]
	});

	function submit() {
		return register(get(formHandler.data))
	}
</script>
