const { gql } = require('apollo-server');

const typeDefs = gql`
  type Movie {
    id: String!
    title: String
    age_certification: String
    description: String
    genres: [String]
    imdb_score: Float
    production_countries: [String]
    release_year: Int
    runtime: Int
    type: String
  }

  type Query {
    getAllMovies: [Movie]
    getMovieByTitle(title: String!): Movie
  }

  type Mutation {
    addMovie(
      title: String
      age_certification: String
      description: String
      genres: [String]
      imdb_score: Float
      production_countries: [String]
      release_year: Int
      runtime: Int
      type: String
    ): Movie

    updateMovie(
      title: String!
      description: String
      runtime: Int
      genres: [String]
      imdb_score: Float
    ): Movie

    deleteMovie(title: String!): Movie
  }
`;

module.exports = typeDefs;
