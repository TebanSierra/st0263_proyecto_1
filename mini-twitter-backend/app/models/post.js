const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  topics: {
    type: [],
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Post', PostSchema);
