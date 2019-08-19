const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    indexes: {
      unique: true
    }
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
