<template>
    <div>
      <p>Hello! </p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        loggedIn: true,
      };
    },
    created() {
      // Check if the user is logged in when the component is created
      this.checkLoggedIn();
    },
    methods: {
      async checkLoggedIn() {
        try {
          const response = await axios.get('/user');
          const data = response.data;
          if (data.success) {
            // The user is logged in, set the loggedIn flag to true
            this.loggedIn = true;
          } else {
            // The user is not logged in, set the loggedIn flag to false
            this.loggedIn = false;
          }
        } catch (error) {
          console.error('Error checking login status:', error);
          this.loggedIn = false;
        }
      },
    },
  };
  </script>
  