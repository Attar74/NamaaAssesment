<template>
  <v-card flat variant="outlined" class="py-5 mx-2" color="#41B883">
    <v-container>
      <v-row class="mx-2">
        <div class="d-flex justify-space-between w-100">
          <p class="text-h4 mb-3">Filter By</p>
          <v-btn
            color="#41B883"
            :disabled="!isActiveFilter"
            @click="resetFilters"
          >
            Reset Filters
          </v-btn>
        </div>
        <Form ref="ActorForm" class="w-100">
          <v-row class="mx-0">
            <v-col cols="12" md="4" class="pb-1">
              <Field
                name="title"
                v-model="filter.title"
                placeholder="Filter by title"
                class="border-md rounded pa-1 border-primary text-sm w-100 py-2"
                @input="handleFilterChange"
              />
              <ErrorMessage name="title" class="text-error" />
            </v-col>
            <v-col cols="12" md="4" class="pb-1">
              <Field
                name="year"
                v-model="filter.year"
                placeholder="Filter by year"
                class="border-md rounded pa-1 border-primary text-sm w-100 py-2"
                @input="handleFilterChange"
              />
              <ErrorMessage name="year" class="text-error" />
            </v-col>
            <v-col cols="12" md="4" class="pb-1">
              <Field
                name="numberOfActors"
                v-model="filter.actors"
                placeholder="Filter by number of actors"
                class="border-md rounded pa-1 border-primary text-sm w-100 py-2"
                @input="handleFilterChange"
              />
              <ErrorMessage name="numberOfActors" class="text-error" />
            </v-col>
          </v-row>
        </Form>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'moviesFilters',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    isActiveFilter: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      filter: {},
    };
  },
  methods: {
    handleFilterChange() {
      setTimeout(() => {
        this.$emit('filterChange', this.filter);
      }, 1000);
    },
    resetFilters() {
      this.filter = {};
      this.$emit('filterChange', this.filter);
    },
  },
};
</script>
