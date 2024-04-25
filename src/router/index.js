import { createRouter, createWebHistory } from 'vue-router';
import movieList from '@/components/moviesList.vue';

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
      name: 'about',
      component: () => import('@/components/details/movieDetails.vue'),
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
  ],
});

export default router;
