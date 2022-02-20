<script>
    import {
      Form,
      TextInput,
      PasswordInput,
      Button,
    } from "carbon-components-svelte";
  
    let credentials = {
      email:'',
      password: '',
      repeatPassword: ''
    }
  
    let submitCredentials = async() => {
      await console.log(credentials)
    }
  </script>
  
  <svelte:head>
    <title>Регистрация</title>
</svelte:head>

  <Form on:submit={submitCredentials}>
    <h3>Регистрация</h3>
   
    <TextInput 
      labelText="Электронная почта" 
      placeholder="Введите корпоративную почту" 
      bind:value={credentials.email}
      required/>
  
    <PasswordInput
      labelText="Пароль"
      placeholder="Введите пароль" 
      bind:value={credentials.password}
      required/>
  
    <PasswordInput
      labelText="Повторите пароль"
      placeholder="Введите пароль повторно" 
      bind:value={credentials.repeatPassword}
      required/>
  
    
    <Button type="submit">Submit</Button>
  
    <p>Есть учетная запись? <a href="#/auth/login">Авторизация</a></p> 
  
  </Form>