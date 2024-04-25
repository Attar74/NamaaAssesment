<template>
  <v-app>
    <Header />
    <div class="mt-120">
      <RouterView />
    </div>
    <Footer />
    <addEditMovie />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import addEditMovie from '@/components/modals/addEditMovie.vue';

export default {
  name: 'App',
  components: { Header, Footer, addEditMovie },
};
</script>
