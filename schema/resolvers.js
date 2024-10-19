const Movie = require('../models/movie');

const resolvers = {
  Query: {
    getAllMovies: async () => {
      try {
        return await Movie.find({});
      } catch (error) {
        console.error("Error fetching movies:", error);
        throw new Error('Failed to fetch movies');
      }
    },
    getMovieByTitle: async (_, { title }) => {
      try {
        const movie = await Movie.findOne({ title });
        if (!movie) {
          throw new Error(`Movie with title "${title}" not found`);
        }
        return movie;
      } catch (error) {
        console.error("Error fetching movie by title:", error);
        throw new Error('Failed to fetch movie');
      }
    },
    
    updateMovie: async (_, { title, description, runtime, genres, imdb_score }) => {
      try {
        const updatedMovie = await Movie.findOneAndUpdate(
          { title },
          { description, runtime, genres, imdb_score },
          { new: true }
        );
        if (!updatedMovie) {
          throw new Error(`Movie with title "${title}" not found`);
        }
        return updatedMovie;
      } catch (error) {
        console.error("Error updating movie:", error);
        throw new Error('Failed to update movie');
      }
    },
    deleteMovie: async (_, { title }) => {
      try {
        const deletedMovie = await Movie.findOneAndDelete({ title });
        if (!deletedMovie) {
          throw new Error(`Movie with title "${title}" not found`);
        }
        return deletedMovie;
      } catch (error) {
        console.error("Error deleting movie:", error);
        throw new Error('Failed to delete movie');
      }
    },
  },
};

module.exports = resolvers;
