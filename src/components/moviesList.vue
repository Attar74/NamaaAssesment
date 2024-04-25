<template>
  <v-container class="pa-0">
    <moviesFilters
      @filterChange="filterChange"
      :isActiveFilter="isActiveFilter"
    />
    <v-divider class="mt-10 mb-5" />
    <v-layout>
      <v-row v-if="pageLoading" class="mx-5">
        <v-col v-for="i in 9" :key="i" cols="12" md="6" lg="4">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else-if="filterdMovie.length">
        <v-col
          v-for="movie in filterdMovie"
          :key="movie.id"
          cols="12"
          md="6"
          lg="3"
        >
          <movieCard :movie="movie" class="mx-2" />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-card flat class="d-flex mx-auto" height="400px">
          <p
            :class="smAndDown ? 'text-h4' : 'text-h1'"
            class="text-h1 text-center mx-1 my-auto"
          >
            oops..!There is no movies available...
          </p>
        </v-card>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import movieCard from './movieCard.vue';
import moviesFilters from './moviesFilters.vue';

export default {
  name: 'moviesList',
  components: { movieCard, moviesFilters },
  data() {
    return {
      movies: [],
      filters: {},
      pageLoading: false,
    };
  },
  computed: {
    ...mapGetters(['moviesList']),
    smAndDown() {
      return this.$vuetify?.display?.smAndDown;
    },
    filterdMovie() {
      return !this.isActiveFilter
        ? this.moviesList
        : this.moviesList.filter((movie) => {
            return Object.entries(this.filters).every(([key, val]) => {
              return this.isTitleInclude(key, val, movie[key]);
            });
          });
    },
    isActiveFilter() {
      return Object.values(this.filters).some((val) => {
        return val?.length;
      });
    },
  },
  methods: {
    filterChange(filters) {
      this.pageLoading = true;
      this.filters = { ...filters };
      setTimeout(() => {
        // Mocking feteching data
        this.pageLoading = false;
      }, 1000);
    },
    isTitleInclude(key, value, movieProp) {
      switch (key) {
        case 'title':
          return value?.length
            ? !!movieProp.toLowerCase().includes(value.toLowerCase())
            : true;
        case 'year':
          return value?.length ? !!(value == movieProp) : true;
        case 'actors':
          return value?.length ? !!(Number(value) === movieProp?.length) : true;
      }
    },
  },
};
</script>
