import './assets/main.css';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from '@/store';

import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { fa } from 'vuetify/iconsets/fa';
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  components,
  directives,
});

const app = createApp(App);

app.use(router);

app.use(vuetify);

app.use(mdiVue, {
  icons: mdijs,
});

app.use(store);

app.mount('#app');
