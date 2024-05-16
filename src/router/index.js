import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/views/productList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        isAddAction: true,
      },
      component: ProductList,
    },
    {
      path: '/details/:id',
      name: 'details',
      meta: {
        isAddAction: true,
      },
      component: () => import('@/views/productDetails.vue'),
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      meta: {
        isAddAction: false,
      },
      component: () => import('@/views/addProduct.vue'),
    },
    {
      path: '/editProduct/:id',
      name: 'editProduct',
      meta: {
        isAddAction: true,
      },
      component: () => import('@/views/addProduct.vue'),
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
