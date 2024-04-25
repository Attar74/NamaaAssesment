const movieModule = {
  state: {
    movies: JSON.parse(localStorage.getItem('movies'))?.length
      ? JSON.parse(localStorage.getItem('movies'))
      : [
          {
            id: 1,
            poster:
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoXtgMlVpiOtLWBSauHiGoZfQsMRVU3l4Ep2hJ8KDUEYqqFwMu',
            title: 'Boss Baby',

            year: '2002',
            actors: [
              {
                id: 0,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 1,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 2,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 3,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
            ],
          },
          {
            id: 2,
            poster:
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvswARxUgn0BfKnBKygrTNJTsgOX9iXqcFFUsHS2jveFVTQtS9',
            title: 'Flushed Away',

            year: '2008',
            actors: [
              {
                id: 0,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 1,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 2,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 3,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
            ],
          },
          {
            id: 6,
            poster:
              'https://contentserver.com.au/assets/560554_p27462_p_v8_af.jpg',
            title: 'Monestr, INC',

            year: '2022',
            actors: [
              {
                id: 0,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 1,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 2,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 3,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
            ],
          },
          {
            id: 4,
            poster:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dP6y4-rLiQjkpFe9Q2_4WyD7NRP-KtKMeRfrC7ZDzg_R6M1t',
            title: 'Mavaka',

            year: '2018',
            actors: [
              {
                id: 0,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 1,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 2,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 3,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
            ],
          },
          {
            id: 3,
            poster:
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwXEBTWUMWaM9gerkiSgcsSDDcKG7Jk-Fvq5cPzo29sjVdicWc',
            title: 'MiBig Hero 6gration',

            year: '2014',
            actors: [
              {
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
            ],
          },
          {
            id: 5,
            poster:
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRNzwtlGLMiGYj1-RBgWDdC58LjMPyBQTQgQN9qX4nPlwzvqc6p',
            title: 'Ratatouille',

            year: '2017',
            actors: [
              {
                id: 0,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 1,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 2,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 3,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
            ],
          },

          {
            id: 7,
            poster:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvfCzr4MOD0Im6EE6DwwNAkUuNhQ7mY94kgIaS1mmXhWtHkEN',
            title: 'Luck',

            year: '2014',
            actors: [
              {
                id: 0,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 1,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 2,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 3,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
            ],
          },
          {
            id: 9,
            poster:
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmLUY5s6EEAHzEOQPF7Nv6tWElixl6kUmyvBPf7RezVPM3z_yd',
            title: 'The Bad Guys',

            year: '2022',
            actors: [
              {
                id: 0,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 1,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 2,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 3,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
            ],
          },
          {
            id: 8,
            poster:
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZ6_8mkeAGVUvYo6Oe0cJVZJS9-iOW9CHDFzfbaBlbzoHt6NBt',
            title: 'Toy Story 4',

            year: '2023',
            actors: [
              {
                id: 0,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 1,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 2,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
              {
                id: 3,
                name: 'sam Rock',
                age: '59',
                joinedDate: '12/02/2022',
                role: 'Cameo',
              },
            ],
          },
        ],
  },
  mutations: {
    addNewMovie(state, newMovie) {
      state.movies = [newMovie, ...state.movies];
      localStorage.setItem('movies', JSON.stringify(state.movies));
    },
    async updateMovie(state, updatedMovie) {
      try {
        const updatedMovieIndex = state.movies.findIndex((movie) => {
          return movie.id === updatedMovie.id;
        });
        state.movies[updatedMovieIndex] = { ...updatedMovie };
        localStorage.setItem('movies', JSON.stringify(state.movies));
      } catch {}
    },
  },
  actions: {
    addNewMovieDispatche(context, newMovie) {
      context.commit('addNewMovie', newMovie);
    },
    updateMovieDispatche(context, updatedMovie) {
      context.commit('updateMovie', updatedMovie);
    },
  },
  getters: {
    moviesList(state) {
      return state.movies;
    },
    modalStateGetter(state) {
      return state.modalState;
    },
    movieToBeEditedGetters(state) {
      return state.movieToBeEdited;
    },
  },
};

export default movieModule;
