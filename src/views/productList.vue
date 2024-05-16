<template>
  <v-container class="pa-0">
    <ProductsFilters
      @filterChange="filterChange"
      :isActiveFilter="isActiveFilter"
    />
    <v-divider class="mb-5" />
    <v-layout>
      <v-row v-if="pageLoading" class="mx-5">
        <v-col v-for="i in 9" :key="i" cols="12" md="6" lg="4">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else-if="filterdProduct.length">
        <v-col
          v-for="Product in filterdProduct"
          :key="Product.id"
          cols="12"
          md="6"
          lg="3"
        >
          <productCard :Product="Product" class="mx-2" />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-card flat class="d-flex mx-auto" height="400px">
          <p
            :class="smAndDown ? 'text-h4' : 'text-h1'"
            class="text-h1 text-center mx-1 my-auto"
          >
            oops..!There is no Products available...
          </p>
        </v-card>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import productCard from '../components/ProductCard.vue';
import ProductsFilters from '../components/cardFilters.vue';

export default {
  name: 'ProductsList',
  components: { productCard, ProductsFilters },
  data() {
    return {
      Products: [],
      filters: {},
      pageLoading: false,
    };
  },
  computed: {
    ...mapGetters(['ProductsList']),
    smAndDown() {
      return this.$vuetify?.display?.smAndDown;
    },
    filterdProduct() {
      return !this.isActiveFilter
        ? this.ProductsList
        : this.ProductsList.filter((Product) => {
            return Object.entries(this.filters).every(([key, val]) => {
              return this.isTitleInclude(key, val, Product[key]);
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
    isTitleInclude(key, value, ProductProp) {
      switch (key) {
        case 'title':
          return value?.length
            ? !!ProductProp.toLowerCase().includes(value.toLowerCase())
            : true;
        case 'year':
          return value?.length ? !!(value == ProductProp) : true;
        case 'actors':
          return value?.length
            ? !!(Number(value) === ProductProp?.length)
            : true;
      }
    },
  },
};
</script>
