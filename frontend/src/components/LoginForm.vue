<template>
  <div class="login-container">
    <form @submit.prevent="login" class="login-form">
      <h1>Login</h1>
      <div v-if="loginMessage" class="login-message">{{ loginMessage }}</div>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" required>
      </div>

      <button type="submit">Login</button>
      <button type="button" @click="requestAccess" class="request-access-button">Request Access</button>
    </form>
  </div>
</template>

<style>
  /* ... (Your existing CSS styles) ... */

  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login-form {
    /*border: 1px solid #ccc;*/
    border-radius: 4px;
    padding: 20px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  }

  .login-form h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  .login-message {
    background-color: #f8d7da;
    color: #721c24;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 10px;
  }

  .request-access-button {
    margin-top: 10px;
    background-color: #17a2b8;
  }

  .request-access-button:hover {
    background-color: #138496;
  }
</style>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        username: '',
        password: '',
        rememberMe: false,
        loginMessage: '',
      };
    },
    methods: {
      async login() {
        try {
            const response = await axios.post('http://localhost:3000/login', {
              username: this.username,
              password: this.password,
              rememberMe: this.rememberMe,
            });
            const data = response.data;
            if (data.success) {
              // Login successful, redirect to the dashboard or perform any other action
              window.location.href = '/dashboard';
            } else {
              // Login failed, show error message to the user
              this.loginMessage = data.message;
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
      },
      requestAccess() {
        // Implement your logic for requesting access here
        this.loginMessage = 'Access request sent!';
      },
    },
  };
</script>
