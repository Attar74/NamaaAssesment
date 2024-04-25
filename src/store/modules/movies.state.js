import DefaultMovies from '@/constants/defaultMovies.js';

const movieModule = {
  state: {
    movies: JSON.parse(localStorage.getItem('movies'))?.length
      ? JSON.parse(localStorage.getItem('movies'))
      : DefaultMovies,
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
