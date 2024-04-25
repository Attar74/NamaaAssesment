<template>
  <v-container>
    <v-card
      flat
      variant="outlined"
      :title="isEditMood ? 'Update Movie Details' : 'Add New Movie'"
      class="mx-auto"
      max-width="900px"
      color="#41B883"
    >
      <Form ref="form" @submit="handleAddUpdateMovie">
        <v-divider />
        <v-card-text class="px-6 py-5">
          <v-row>
            <v-col cols="12" sm="6" class="pb-1">
              <Field
                name="title"
                :rules="validateText"
                v-model="newMovie.title"
                placeholder="Movie Title*"
                class="border-md rounded pa-1 border-primary text-sm w-100 py-2"
              />
              <ErrorMessage name="title" class="text-error" />
            </v-col>

            <v-col cols="12" sm="6" class="pb-1">
              <Field
                name="year"
                :rules="validateMovieYear"
                v-model="newMovie.year"
                placeholder="Movie Year*"
                class="border-md rounded pa-1 border-primary text-sm w-100 py-2"
              />
              <ErrorMessage name="year" class="text-error" />
            </v-col>

            <v-col cols="12" class="pb-1">
              <Field
                name="description"
                as="textarea"
                v-model="newMovie.description"
                placeholder="Movie Description"
                class="border-md rounded pa-1 border-primary text-sm w-100 py-2"
              />
            </v-col>
          </v-row>
          <v-divider class="my-5" />
          <div class="mt-0 overflow-auto" v-if="actors.length">
            <p class="text-h5 text-center">
              Added Actors ({{ actors.length }})
            </p>
            <v-card
              flat
              class="overflow-auto mt-2"
              :height="actors.length > 3 ? 200 : auto"
            >
              <v-data-table-virtual :items="actors" :headers="headers">
                <template v-slot:item.name="{ item }">
                  <p class="text-truncate">
                    {{
                      item?.name?.length > 18
                        ? `${item.name.slice(0, 18)}...`
                        : item.name
                    }}
                  </p>
                </template>
                <template v-slot:item.actions="{ item }">
                  <div class="d-flex justify-space-evenly">
                    <v-btn
                      class="mr-1"
                      color="#34495E"
                      density="default"
                      icon="mdi-pencil-outline"
                      @click="editActor(item)"
                      size="x-small"
                    />
                    <v-btn
                      color="error"
                      density="default"
                      icon="mdi-trash-can-outline"
                      @click="deleteActor(item)"
                      size="x-small"
                    />
                  </div>
                </template>
              </v-data-table-virtual>
            </v-card>
          </div>
          <v-divider class="my-6" v-if="actors.length" />
          <v-btn
            class="px-3 mb-3"
            color="#41b883"
            variant="flat"
            text="Add Actor Form"
            @click="addActorForm = !addActorForm"
          >
            <p>Add Actor Form</p>
            <v-icon>
              {{ addActorForm ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
            </v-icon>
          </v-btn>
          <v-expand-transition mode="ease-in-out">
            <v-card
              v-if="addActorForm"
              flat
              variant="outlined"
              class="pa-2"
              color="#41B883"
            >
              <Form
                v-if="addActorForm"
                ref="ActorForm"
                @submit="handleAddUpdateActor"
                class="w-100"
              >
                <div class="d-flex justify-space-between">
                  <p class="text-h6 ml-3 mb-1">Add New Actor*</p>
                </div>
                <v-row class="mx-0">
                  <v-col cols="12" sm="6" class="pb-1">
                    <Field
                      name="actorName"
                      :rules="validateText"
                      v-model="newActor.name"
                      placeholder="Actor name*"
                      class="border-md rounded pa-1 border-primary text-sm w-100 py-2"
                    />
                    <ErrorMessage name="actorName" class="text-error" />
                  </v-col>
                  <v-col ccols="12" sm="6" class="pb-1">
                    <Field
                      name="actorAge"
                      :rules="validateAge"
                      v-model="newActor.age"
                      placeholder="Actor Age*"
                      class="border-md rounded pa-1 border-primary text-sm w-100 py-2"
                    />
                    <ErrorMessage name="actorAge" class="text-error" />
                  </v-col>
                  <v-col cols="12" sm="6" class="pb-1">
                    <Field
                      v-model="newActor.joinedDate"
                      placeholder="DD/MM/YYYY*"
                      name="actorDate"
                      :rules="validateDate"
                      class="border-md rounded pa-1 border-primary text-sm w-100 py-2"
                    />
                    <ErrorMessage name="actorDate" class="text-error" />
                  </v-col>
                  <v-col cols="12" sm="6" class="pb-1">
                    <Field
                      name="actorRole"
                      :rules="validateText"
                      v-model="newActor.role"
                      placeholder="Actor Role*"
                      class="border-md rounded pa-1 border-primary text-sm w-100 py-2"
                      as="select"
                    >
                      <option value="" disabled>Actor Role*</option>
                      <option value="Background role">Background role</option>
                      <option value="Cameo">Cameo</option>
                      <option value="Recurring character">
                        Recurring character
                      </option>
                      <option value="Side character">Side character</option>
                      <option value="Series regular">Series regular</option>
                    </Field>
                    <ErrorMessage name="actorRole" class="text-error" />
                  </v-col>
                </v-row>
                <v-row class="mx-4 mb-1 my-0">
                  <v-spacer></v-spacer>
                  <div class="d-flex pb-0 cursor-pointer mt-5">
                    <v-btn
                      class="px-3 mx-1"
                      color="grey"
                      variant="flat"
                      @click="discardActorChanges"
                      text="Discard"
                    />
                    <v-btn
                      v-if="!EditActorMood"
                      type="submit"
                      class="px-3"
                      color="#41b883"
                      variant="flat"
                      text="Add Actor"
                    />
                    <v-btn
                      v-else
                      type="submit"
                      class="px-3"
                      color="#41b883"
                      variant="flat"
                      text="Update Actor"
                    />
                  </div>
                </v-row>
              </Form>
            </v-card>
          </v-expand-transition>
        </v-card-text>

        <v-divider />
        <v-card-actions class="pa-5">
          <v-spacer />
          <v-btn
            type="submit"
            class="px-8"
            color="#41b883"
            :text="isEditMood ? 'Update' : 'Add Movie'"
            variant="flat"
            :disabled="!actors.length"
          />
        </v-card-actions>
      </Form>
    </v-card>
  </v-container>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'addMovie',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      addActorForm: false,
      isValid: false,
      newMovie: {
        actors: [],
      },
      headers: [
        { title: 'name', align: 'center', key: 'name', sortable: true },
        { title: 'Age', align: 'center', key: 'age', sortable: false },
        {
          title: 'Joined date',
          align: 'center',
          key: 'joinedDate',
          sortable: false,
        },
        { title: 'Role', align: 'center', key: 'role', sortable: false },
        {
          title: 'Edit || Delete',
          align: 'center',
          key: 'actions',
          sortable: false,
        },
      ],
      newActor: {},
      actors: [],
      dialog: false,
      EditActorMood: false,
    };
  },
  computed: {
    ...mapGetters(['moviesList']),
    isEditMood() {
      return !!(this.$route.name == 'editMovie');
    },
    smAndDown() {
      return this.$vuetify?.display?.smAndDown;
    },
  },
  created() {
    this.handlePopulateMovieDatat();
  },
  watch: {
    '$route.name': {
      handler(val) {
        val === 'addMovie' && location.reload();
      },
    },
    modalStateGetter(val) {
      this.dialog = val;
      this.newMovie = Object.assign({}, this.movieToBeEditedGetters);
      this.actors = [...this.newMovie?.actors];
    },
  },
  methods: {
    ...mapActions(['addNewMovieDispatche', 'updateMovieDispatche']),
    handlePopulateMovieDatat() {
      if (this.isEditMood) {
        this.newMovie = this.moviesList.find((movie) => {
          return this.$route?.params?.id == movie.id;
        }) ?? {
          id: -1,
          poster: '',
          title: '',
          year: '',
          actors: [],
        };
        this.actors = [...this.newMovie?.actors];
        if (this.newMovie?.id === -1) {
          this.$router.push('/404-error');
        }
      }
    },
    discardActorChanges() {
      this.newActor = {};
      this.EditActorMood = this.addActorForm = false;
    },
    resetActorForm() {
      this.newActor = {};
      this.EditActorMood = this.addActorForm = false;
    },
    editActor(actor) {
      this.EditActorMood = this.addActorForm = true;
      this.newActor = { ...actor };
    },
    deleteActor(deletedActor) {
      this.actors = this.actors.filter((actor) => {
        return actor.id !== deletedActor.id;
      });
      this.newMovie = {
        ...this.newMovie,
        actors: this.actors,
      };
    },
    handleAddUpdateActor(values, { resetForm }) {
      return this.EditActorMood
        ? this.UpdateActor(values, resetForm)
        : this.AddActor(values, resetForm);
    },
    UpdateActor(values, resetForm) {
      const { actorName, actorRole, actorDate, actorAge } = values;

      try {
        const updatedActorIndex = this.actors.findIndex((actor) => {
          return this.newActor.id === actor.id;
        });
        this.actors[updatedActorIndex] = {
          id: this.newActor.id,
          name: actorName,
          role: actorRole,
          joinedDate: actorDate,
          age: actorAge,
        };
      } catch {
      } finally {
        resetForm();
        this.resetActorForm();
      }
    },
    AddActor(values, resetForm) {
      const { actorName, actorRole, actorDate, actorAge } = values;
      const newActor = {
        id: Math.round(Math.random() * 100),
        name: actorName,
        role: actorRole,
        joinedDate: actorDate,
        age: actorAge,
      };
      this.actors.unshift(newActor);
      this.newMovie = {
        ...this.newMovie,
        actors: [newActor, ...this.newMovie.actors],
      };
      resetForm();
      this.resetActorForm();
      this.addActorForm = false;
    },
    handleAddUpdateMovie(value, { resetForm }) {
      return this.isEditMood
        ? this.updateMovie(value, resetForm)
        : this.AddMovie(value, resetForm);
    },
    async AddMovie(values, resetForm) {
      const { title, year, description = '' } = values;
      const newMoviePayload = {
        id: Math.round(Math.random() * 100),
        title,
        year,
        description,
        actors: this.actors,
      };
      try {
        await this.addNewMovieDispatche(newMoviePayload);
      } catch {
      } finally {
        resetForm();
        this.$router.push('/');
      }
    },
    async updateMovie(values, resetForm) {
      const updatedMoviePayload = {
        ...values,
        poster: this.newMovie?.poster ?? '',
        id: this.newMovie.id,
        actors: this.actors,
      };
      try {
        await this.updateMovieDispatche(updatedMoviePayload);
      } catch {
      } finally {
        resetForm();
        this.$router.push(`/details/${this.newMovie.id}`);
      }
    },
    validateText(value) {
      // if the field is empty
      if (!value?.length) {
        return '*This field is required';
      }
      // All is good
      return true;
    },
    validateAge(value) {
      if (!value) return '*This field is required';
      if (value < 1 || value > 100) {
        return '*Ages Must be between 1 - 100';
      }

      return true;
    },
    validateMovieYear(value) {
      if (!value) return '*This field is required';
      if (isNaN(Number(value)) || value < 1970 || value > 2024) {
        return '*Movie Year Must be between 1970 - 2024';
      }

      return true;
    },
    validateDate(value = '') {
      if (!value) return '*This field is required';

      const [days = '', months = '', years = '', ...notValid] =
        value.split('/');
      if (
        notValid.length ||
        days.length != 2 ||
        days < 1 ||
        days > 30 ||
        months.length != 2 ||
        months < 1 ||
        months > 12 ||
        years.length != 4 ||
        years < 1970 ||
        days > 2024 ||
        value.split('/').some((date) => isNaN(Number(date)))
      )
        return '*DD/MM/YYYY must be between 1970 - 2024';
      // All is good
      return true;
    },
  },
};
</script>
