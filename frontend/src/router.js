import { createRouter, createWebHistory } from 'vue-router';

// Import your components here (LoginForm and RegisterForm)
import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';
import Dashboard from './components/DashboardView.vue'; // Assuming you have a Dashboard component

// Create the router and define the routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: LoginForm,
    },
    {
      path: '/register',
      component: RegisterForm,
    },
    {
      path: '/dashboard',
      component: Dashboard,
    },
    // Add other routes if needed
  ],
});

export default router;
