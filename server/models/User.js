const { Schema, model } = require('mongoose');

const userSchema = new Schema({

  // user model here

});

const User = model('user', userSchema);

module.exports = User;