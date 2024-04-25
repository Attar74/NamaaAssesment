import { createRouter, createWebHistory } from 'vue-router';
import movieList from '@/views/moviesList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        isAddAction: true,
      },
      component: movieList,
    },
    {
      path: '/details/:id',
      name: 'details',
      meta: {
        isAddAction: true,
      },
      component: () => import('@/views/movieDetails.vue'),
    },
    {
      path: '/addMovie',
      name: 'addMovie',
      meta: {
        isAddAction: false,
      },
      component: () => import('@/views/addMovie.vue'),
    },
    {
      path: '/editMovie/:id',
      name: 'editMovie',
      meta: {
        isAddAction: true,
      },
      component: () => import('@/views/addMovie.vue'),
    },
    {
      path: '/:PathMatch(.*)*',
      name: '404-error',
      meta: {
        isAddAction: true,
      },
      component: () => import('@/views/404-error.vue'),
    },
  ],
});

export default router;
