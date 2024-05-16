import { createStore } from 'vuex';

import ProductModule from './modules/products.state';

const store = createStore({
  modules: {
    ProductModule,
  },
});

export default store;
