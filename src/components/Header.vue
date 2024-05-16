<template>
  <v-app-bar color="#41B883" height="80">
    <v-app-bar-title class="text-h3 overflow-auto d-flex">
      <RouterLink to="/" class="text-decoration-none text-white">
        <p class="text-h2 font-weight-bold my-5">Vimi</p>
      </RouterLink>
    </v-app-bar-title>
    <RouterLink to="/addProduct" class="text-white" v-if="isAddAction">
      <v-btn
        v-if="!smAndDown"
        class="mt-3 px-8 mr-8 text-h5"
        color="#34495E"
        text="Add Product"
        variant="flat"
        :height="50"
      />
      <v-btn v-else>
        <v-icon size="50"> mdi-plus-circle-outline </v-icon>
      </v-btn>
    </RouterLink>
  </v-app-bar>
</template>

<script>
export default {
  name: 'appHeader',
  computed: {
    smAndDown() {
      return this.$vuetify?.display?.smAndDown;
    },
    isAddAction() {
      return this.$route.meta.isAddAction;
    },
  },
};
</script>
