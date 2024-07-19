import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddGame from '../views/AddGame.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddGame',
    component: AddGame
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
