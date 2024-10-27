import { createRouter, createWebHistory } from 'vue-router';
import TodoPage from '../features/todo/presentation/views/TodoPage.vue';

const routes = [
  { path: '/', component: TodoPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
