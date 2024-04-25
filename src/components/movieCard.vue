<template>
  <div class="px-1">
    <v-card flat class="mx-auto mt-5 cursor-pointer" max-width="344" @click="goToDetails">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-img
            :aspect-ratio="4/6"
            contain
            :src="movie?.poster?.length ? movie.poster : 'https://i0.wp.com/rollingfilmfestival.com/wp-content/uploads/2021/01/no-poster-available.png?resize=1080%2C1526&ssl=1'"
            class="transition--all"
            v-bind="props"
            :class="isHovering ? 'scale-1' : ''"
          />
        </template>
      </v-hover>
    </v-card>
    <v-card class="mx-auto mb-5" max-width="344">
      <v-card-text>
        <p class="text-h4 text-truncate">{{ movie.title }}</p>

        <div class="d-flex justify-space-between mt-3">
          <div v-if="movie?.year">
            <div class="text-sm text-grey">year</div>
            <div class="text-h6 text-center text-decoration-none">
              {{ movie.year ?? '' }}
            </div>
          </div>

          <div v-if="movie?.actors?.length">
            <div class="text-sm text-grey">actors</div>
            <div class="text-h6 text-center">
              {{ movie.actors.length ?? '' }}
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
          @click="goToDetails"
        />
      </v-card-actions>
    </v-card>
  </div @click="goToDetails">
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'movieCard',
  props: {
    movie: {
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      reveal: true,
    };
  },
  methods: {
    goToDetails() {
        this.$router.push(`/details/${this.movie.id}`)
    }
  }
};
</script>

<style>
.scale-1 {
  transform: scale(1.1);
}

.transition--all {
  transition: all ease-in-out 0.5s;
}

.min-height-150 {
  min-height: 150;
}
</style>
