const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
    trim: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  savedRecipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;