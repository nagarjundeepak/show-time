const mongoose = require ('mongoose');

const movieSchema = new mongoose.Schema ({
  movie: {
    type: Object,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Movies = new mongoose.model ('Movies', movieSchema);

exports.Movies = Movies;
