
<script>
    import {
      Form,
      TextInput,
      PasswordInput,
      Checkbox,
      Button,
    } from "carbon-components-svelte";
  
    let credentials = {
      email: '',
      password: ''
    }
  
    let submitCredentials = async() => {
      await console.log(credentials)
    }
  </script>

<svelte:head>
  <title>Авторизация</title>
</svelte:head>
  
  <Form on:submit={submitCredentials}>
    <h3>Авторизация</h3>
  
    <TextInput 
      labelText="Учетная запись или электронная почта" 
      placeholder="Введите учетную запись или корпоративную почту" 
      bind:value={credentials.email}
      required/>
  
    <PasswordInput
      labelText="Пароль"
      placeholder="Введите пароль" 
      bind:value={credentials.password}
      required/>
  
    <Checkbox labelText="Запомнить меня" />
    <Button type="submit">Submit</Button>
  
    <p><a href="#/auth/register">Регистрация</a></p> 
    <p><a href="#/auth/forgot">Забыли пароль?</a></p> 
  </Form>