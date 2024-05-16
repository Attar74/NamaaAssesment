<template>
  <div class="px-1">
    <v-card
      flat
      class="mx-auto mt-5 cursor-pointer"
      max-width="344"
      @click="routeToDetails"
    >
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-img
            :aspect-ratio="4 / 6"
            contain
            :lazy-src="Product?.poster?.length ? Product.poster : defaultPoster"
            :src="Product?.poster?.length ? Product.poster : defaultPoster"
            class="transition--all"
            v-bind="props"
            :class="isHovering ? 'scale-1' : ''"
          />
        </template>
      </v-hover>
    </v-card>
    <v-card class="mx-auto mb-5" max-width="344">
      <v-card-text>
        <p class="text-h4 text-truncate font-weight-bold">
          {{ Product.title }}
        </p>

        <div class="d-flex justify-space-between mt-3">
          <div v-if="Product?.year">
            <div class="text-sm text-grey">year</div>
            <div class="text-h6 text-center text-decoration-none">
              {{ Product.year ?? '' }}
            </div>
          </div>

          <div>
            <div class="text-sm text-grey">actors</div>
            <div class="text-h6 text-center">
              {{ Product.actors.length ?? 0 }}
            </div>
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="teal-accent-4"
          text="More Details"
          variant="text"
          @click="routeToDetails"
        />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'productCard',
  props: {
    Product: {
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      defaultPoster:
        'https://i0.wp.com/rollingfilmfestival.com/wp-content/uploads/2021/01/no-poster-available.png?resize=1080%2C1526&ssl=1',
    };
  },
  methods: {
    routeToDetails() {
      this.$router.push(`/details/${this.Product.id}`);
    },
  },
};
</script>
