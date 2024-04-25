<template>
  <v-app>
    <Header />
    <div class="mt-120">
      <RouterView />
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: { Header, Footer },
};
</script>
<style scoped>
.mt-120 {
  margin-top: 120px;
}
</style>
