<template>
  <div id="app">
    <header class="app-header">
      <!-- Your header content -->
      <h1>My App</h1>
      <nav>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <!-- You can add more navigation links as needed -->
      </nav>
    </header>

    <main class="app-main">
      <!-- This is where the content from the router will be rendered -->
      <router-view></router-view>
    </main>

    <footer class="app-footer">
      <!-- Your footer content -->
      <p>&copy; 2023 My App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  // You can add any logic or data properties specific to your App component here
};
</script>

<style>
/* Add your global styles here if needed */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: #007bff;
  padding: 20px;
  color: #fff;
}

.app-header h1 {
  margin: 0;
  font-size: 28px;
}

.app-header nav {
  margin-top: 10px;
}

.app-header nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
}

.app-header nav a:hover {
  text-decoration: underline;
}

.app-main {
  flex-grow: 1;
  padding: 20px;
}

.app-footer {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}
</style>