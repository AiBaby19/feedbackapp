const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  // userId: String,
});

mongoose.model('users', userSchema);
