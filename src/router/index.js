import { createRouter, createWebHistory } from 'vue-router';
import movieList from '@/views/moviesList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: movieList,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('@/views/movieDetails.vue'),
    },
    {
      path: '/:PathMatch(.*)*',
      name: '404-error',
      component: () => import('@/views/404-error.vue'),
    },
  ],
});

export default router;
