<template>
  <v-dialog max-width="550" persistent v-model="dialog">
    <v-card title="Add New Movie">
      <Form ref="form" @submit="handleAddUpdateMovie">
        <v-divider />
        <v-card-text class="px-6 py-5">
          <v-row>
            <v-col cols="12" class="pb-1">
              <Field
                name="title"
                :rules="validateText"
                v-model="newMovie.title"
                placeholder="Movie Title*"
                class="border-md rounded pa-1 border-primary text-sm w-100"
              />
            </v-col>
            <v-col cols="12" class="py-0">
              <ErrorMessage name="title" class="text-error" />
            </v-col>

            <v-col cols="12" class="pb-1">
              <Field
                name="year"
                :rules="validateMovieYear"
                v-model="newMovie.year"
                placeholder="Movie Year*"
                class="border-md rounded pa-1 border-primary text-sm w-100"
              />
            </v-col>
            <v-col cols="12" class="py-0">
              <ErrorMessage name="year" class="text-error" />
            </v-col>

            <v-col cols="12" class="pb-1">
              <Field
                name="description"
                v-model="newMovie.description"
                placeholder="Movie Description"
                class="border-md rounded pa-1 border-primary text-sm w-100"
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
              class="overflow-auto"
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
                  <v-icon @click="editActor(item)" color="warning" class="mr-5">
                    mdi-pencil-outline
                  </v-icon>
                  <v-icon @click="discardActor(item)" color="error">
                    mdi-trash-can-outline
                  </v-icon>
                </template>
              </v-data-table-virtual>
            </v-card>
          </div>
          <v-divider class="my-6" v-if="actors.length" />
          <v-row>
            <p class="text-h6 ml-3 mb-1">Add New Actor*</p>
            <Form ref="ActorForm" @submit="handleAddUpdateActor" class="w-100">
              <v-row class="mx-0">
                <v-col cols="12" md="6" class="pb-1">
                  <Field
                    name="actorName"
                    :rules="validateText"
                    v-model="newActor.name"
                    placeholder="Actor name*"
                    class="border-md rounded pa-1 border-primary text-sm w-100"
                  />
                  <ErrorMessage name="actorName" class="text-error" />
                </v-col>
                <v-col ccols="12" md="6" class="pb-1">
                  <Field
                    name="actorAge"
                    :rules="validateAge"
                    v-model="newActor.age"
                    placeholder="Actor Age*"
                    class="border-md rounded pa-1 border-primary text-sm w-100"
                  />
                  <ErrorMessage name="actorAge" class="text-error" />
                </v-col>
                <v-col cols="12" md="6" class="pb-1">
                  <Field
                    v-model="newActor.joinedDate"
                    placeholder="DD/MM/YYYY*"
                    name="actorDate"
                    :rules="validateDate"
                    class="border-md rounded pa-1 border-primary text-sm w-100"
                  />
                  <ErrorMessage name="actorDate" class="text-error" />
                </v-col>
                <v-col cols="12" md="6" class="pb-1">
                  <Field
                    name="actorRole"
                    :rules="validateText"
                    v-model="newActor.role"
                    placeholder="Actor Role*"
                    class="border-md rounded pa-1 border-primary text-sm w-100"
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
                <div class="d-flex text-success pb-0 cursor-pointer mt-5">
                  <v-btn
                    v-if="!EditActorMood"
                    variant="text"
                    type="submit"
                    class="px-0"
                  >
                    <p class="text-h6 text-decoration-underline">
                      {{ actors.length ? 'Add Another Actor' : 'Add Actor' }}
                    </p>
                    <v-icon class="my-auto"> mdi-plus </v-icon>
                  </v-btn>
                  <v-btn v-else type="submit" class="px-0" color="success">
                    <p class="text-h6 px-5">Update Actor</p>
                  </v-btn>
                </div>
                <v-spacer></v-spacer>
              </v-row>
            </Form>
          </v-row>
        </v-card-text>

        <v-divider />
        <v-card-actions>
          <v-spacer v-if="!smAndDown" />
          <v-btn
            class="px-8"
            color="grey"
            variant="flat"
            text="Close"
            @click="closeModal"
          />
          <v-spacer v-if="smAndDown" />
          <v-btn
            type="submit"
            class="px-8"
            color="#41b883"
            :text="isEditMood ? 'Update' : 'Add Movie'"
            variant="flat"
          />
        </v-card-actions>
      </Form>
    </v-card>
  </v-dialog>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'addEditMovie',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      isValid: false,
      newMovie: {
        actors: [],
      },
      headers: [
        { title: 'name', align: 'center', key: 'name', sortable: false },
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
    ...mapGetters(['modalStateGetter', 'movieToBeEditedGetters']),
    isEditMood() {
      return !!(this.movieToBeEditedGetters.id > -1);
    },
    smAndDown() {
      return this.$vuetify?.display?.smAndDown;
    },
  },
  watch: {
    modalStateGetter(val) {
      this.dialog = val;
      this.newMovie = Object.assign({}, this.movieToBeEditedGetters);
      this.actors = [...this.newMovie?.actors];
    },
  },
  methods: {
    ...mapActions([
      'addNewMovieDispatche',
      'toggleModalStateDispatche',
      'updateMovieDispatche',
    ]),
    closeModal() {
      this.toggleModalStateDispatche({ val: false });
    },
    resetActorForm() {
      this.newActor = {};
      this.newMovie = {};
      this.EditActorMood = false;
    },
    editActor(actor) {
      this.EditActorMood = true;
      this.newActor = { ...actor };
    },
    discardActor(deletedActor) {
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
      this.actors.push(newActor);
      this.newMovie = {
        ...this.newMovie,
        actors: [newActor, ...this.newMovie.actors],
      };
      resetForm();
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
        this.closeModal();
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
        this.closeModal();
        localStorage.removeItem('movieToBeEdit');
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
