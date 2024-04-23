import { createStore } from 'vuex';

import movieModule from './modules/movies.state';

const store = createStore({
  modules: {
    movieModule,
  },
});

export default store;
