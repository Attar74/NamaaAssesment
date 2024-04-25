<template>
  <v-app-bar color="#41B883" height="80">
    <v-app-bar-title class="text-h3 overflow-auto d-flex">
      <RouterLink to="/" class="text-decoration-none text-white">
        <p class="text-h2 font-weight-bold my-5">Movies</p>
      </RouterLink>
    </v-app-bar-title>
    <v-btn
      v-if="!smAndDown"
      class="mt-3 px-8 mr-8 text-h5"
      color="#34495E"
      @click="toggleModalStateDispatche({ val: true })"
      text="Add Movie"
      variant="flat"
      :height="50"
    />
    <v-icon
      v-else
      @click="toggleModalStateDispatche({ val: true })"
      class="mt-3 px-5 mr-8"
      size="50"
    >
      mdi-plus
    </v-icon>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'appHeader',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['toggleModalStateDispatche']),
  },
  computed: {
    smAndDown() {
      return this.$vuetify?.display?.smAndDown;
    },
  },
};
</script>
