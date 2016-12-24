var mongoose = require('mongoose');

module
  .exports = mongoose
  .model('Music', {
    singer: String,
    song: String,
    genre: String,
    year: Number
  });
