<script>
	import { Form, TextInput, PasswordInput, Checkbox, Button } from 'carbon-components-svelte';
	let credentials = {
		emailOrUsername: ''
	};
	let submitCredentials = async () => {
		console.log(credentials);
	};
	const pageTitle = 'Забыли пароль?';
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

	<Button type="submit">Submit</Button>

	<p><a href="/auth/login">Вспомнили пароль?</a></p>
	<p>Учетная запись не найдена?<a href="/auth/register">Регистрация</a></p>
</Form>