

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
    }
  
    let submitCredentials = async() => {
      console.log(credentials)
    }
  </script>

<svelte:head>
  <title>Забыли пароль?</title>
</svelte:head>
  
  <Form on:submit={submitCredentials()}>
    <h3>Забыли пароль?</h3>
    <TextInput 
      labelText="Электронная почта" 
      placeholder="Введите корпоративную почту" 
      bind:value={credentials.email}
      required/>
  
    <Button type="submit">Submit</Button>
  
    <p><a href="/auth/login">Вспомнили пароль?</a></p> 
    <p>Учетная запись не найдена?<a href="#/auth/register">Регистрация</a></p> 
  </Form>