const {model,Schema} = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Define the schema for the movie data
const movieSchema = new Schema({
  age_certification: { type: String }, // e.g., "TV-MA"
  description: { type: String }, // e.g., "This collection includes..."
  genres: { type: [String] }, // Array of strings, e.g., ["documentation"]
  id: { type: String, default: uuidv4 }, // Unique ID, e.g., "ts300399"
  imdb_score: { type: Number }, // IMDb score, if present
  production_countries: { type: [String] }, // Array of country codes, e.g., ["US"]
  release_year: { type: Number }, // e.g., 1945
  runtime: { type: Number }, // Runtime in minutes, e.g., 50
  title: { type: String, required: true }, // Title of the show or movie, e.g., "Five Came Back: The Reference Films"
  type: { type: String }, // e.g., "SHOW"
}, { versionKey: false });

// Create a model using the schema
const Movie = model('Movie', movieSchema,'netflixes');

// Export the model so it can be used elsewhere in the application
module.exports = Movie;
