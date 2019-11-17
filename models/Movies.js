const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

const Movies = new mongoose.model("Movies", movieSchema);

exports.Movies = Movies;
