<template>
  <v-layout class="mx-5">
    <v-row>
      <v-col cols="0" sm="3" md="4" lg="1" />
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="mb-5">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-img
                contain
                :lazy-src="
                  Product?.poster?.length ? Product.poster : defaultPoster
                "
                :src="Product?.poster?.length ? Product.poster : defaultPoster"
                class="transition--all cursor-pointer"
                v-bind="props"
                :class="{ 'scale-1': isHovering }"
              />
            </template>
          </v-hover>
        </v-card>
      </v-col>
      <v-col cols="12" md="12" lg="7">
        <v-card class="py-5">
          <div>
            <div class="d-flex justify-space-between px-4">
              <div class="d-flex">
                <v-hover>
                  <template v-slot:default="{ isHovering, props }">
                    <RouterLink to="/" class="my-auto text-black">
                      <v-icon
                        v-bind="props"
                        :class="isHovering ? 'scale-1' : ''"
                        :size="smAndDown ? '25' : '45'"
                        class="mr-4 cursor-pointer transition--all"
                      >
                        mdi-arrow-left
                      </v-icon>
                    </RouterLink>
                  </template>
                </v-hover>
                <p
                  :class="smAndDown ? 'text-h5' : 'text-h2'"
                  class="font-weight-medium my-auto"
                >
                  {{
                    Product?.title.length > 18
                      ? `${Product?.title.slice(0, 18)}...`
                      : Product?.title
                  }}
                </p>
              </div>
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn
                    color="#34495E"
                    density="default"
                    icon="mdi-pencil-outline"
                    @click="editProductDetails"
                    v-bind="props"
                    :class="{ 'scale-1': isHovering }"
                  />
                </template>
              </v-hover>
            </div>
            <div
              class="d-flex my-5 px-8"
              :class="smAndDown ? 'text-sm' : 'text-h4'"
            >
              <p class="mr-2 font-weight-bold">Year:</p>
              <p>{{ Product?.year }}</p>
            </div>
            <div
              class="d-flex my-5 px-8"
              :class="smAndDown ? 'text-sm' : 'text-h5'"
            >
              <p class="mr-2 font-weight-bold">Actors:</p>
              <div v-if="actorsList.length" class="d-flex flex-wrap">
                <p
                  v-for="actor in actorsList"
                  :key="actor.id"
                  :class="{ 'mb-1': smAndDown }"
                >
                  <span
                    :class="smAndDown ? 'text-sm' : 'text-h5'"
                    class="px-2 py-1 mx-1 bg-teal-darken-1 rounded"
                    >{{ actor?.name }}</span
                  >
                </p>
              </div>
              <p v-else>There are no added actors</p>
            </div>
            <div class="d-flex my-3 px-8" v-if="Product?.description">
              <p class="mr-2">Description:</p>
              <p>
                {{ Product.description }}
              </p>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="0" sm="3" md="4" lg="1" />
    </v-row>
  </v-layout>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapGetters } from 'vuex';

export default {
  name: 'ProductDetails',
  data() {
    return {
      Product: {},
      defaultPoster:
        'https://i0.wp.com/rollingfilmfestival.com/wp-content/uploads/2021/01/no-poster-available.png?resize=1080%2C1526&ssl=1',
    };
  },
  computed: {
    ...mapGetters(['ProductsList']),
    actorsList() {
      return this.Product?.actors ?? [];
    },
    smAndDown() {
      return this.$vuetify?.display?.smAndDown;
    },
  },
  methods: {
    editProductDetails() {
      this.$router.push(`/editProduct/${this.Product.id}`);
    },
    getProductDetails() {
      this.Product = this.ProductsList.find((Product) => {
        return Product.id == this.$route.params?.id;
      });
      if (!this.Product) {
        this.$router.push('/');
      }
    },
  },
  created() {
    this.getProductDetails();
  },
};
</script>
