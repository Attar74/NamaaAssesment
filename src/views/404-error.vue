<template>
  <v-container>
    <v-card class="mx-auto" width="900" height="400px">
      <v-card-text class="d-flex">
        <div class="mx-auto my-auto d-flex" :style="{ height: '40vh' }">
          <p class="my-auto text-h2">404 - Not Found</p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <RouterLink to="/" class="text-black">
          <v-btn class="px-8" color="#41b883" text="Back Home" variant="flat" />
        </RouterLink>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-container>
</template>
