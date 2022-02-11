<script>
	import { Form, TextInput, PasswordInput, Checkbox, Button } from 'carbon-components-svelte';
	let credentials = {
		emailOrUsername: '',
		password: ''
	};
	let submitCredentials = async () => {
		await console.log(credentials);
	};
	const pageTitle = 'Авторизация';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<Form on:submit={submitCredentials}>
	<h3>{pageTitle}</h3>

	<TextInput
		labelText="Учетная запись или электронная почта"
		placeholder="Введите учетную запись или корпоративную почту"
		bind:value={credentials.emailOrUsername}
		required
	/>

	<PasswordInput
		labelText="Пароль"
		placeholder="Введите пароль"
		bind:value={credentials.password}
		required
	/>

	<Checkbox labelText="Запомнить меня" />
	<Button type="submit">Submit</Button>

	<p><a href="/auth/register">Регистрация</a></p>
	<p><a href="/auth/forgot">Забыли пароль?</a></p>
</Form>