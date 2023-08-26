<template>
  <div class="register-container">
    <form @submit.prevent="register" class="register-form">
      <h1>Register</h1>
      <div class="form-group">
        <label for="regUsername">Username:</label>
        <input type="text" v-model="username" id="regUsername" required>
      </div>
      <div class="form-group">
        <label for="regPassword">Password:</label>
        <input type="password" v-model="password" id="regPassword" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<style>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .register-form {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  }

  .register-form h1 {
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
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #1a682c;
  }
</style>

  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async register() {
        console.log("username and password: ", this.username, this.password)

        try {
          const response = await axios.post('http://localhost:3000/register', {
            "username": this.username,
            "password": this.password,
          });
          const data = response.data;
          if (data.success) {
            // Registration successful, redirect to the dashboard or perform any other action
            window.location.href = '/dashboard';
          } else {
            // Registration failed, show error message to the user
            alert(data.message);
          }
        } catch (error) {
          console.error('Error registering:', error);
        }
      },
    },
  };
  </script>
  