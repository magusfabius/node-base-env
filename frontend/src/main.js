import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router instance we defined in 'router.js'

createApp(App).use(router).mount('#app');
