const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  age: Number,
  favoritefoods: String,
});

const User = mongoose.model('User', UserSchema, 'person');

module.exports = {
  User: User,  // Export the User model
};
