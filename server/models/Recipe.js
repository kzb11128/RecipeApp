const { Schema, model, default: mongoose } = require('mongoose');

const recipeSchema = new Schema({
  recipename: {
    type: String,
    required: true,
    unique: true,
  },

  ingredients: {
    type: String,
    required: true,
  },

  instructions: {
    type: String,
    required: true,
  },

  cookTime: {
    type: Number, // potentially adding a util to change to HH:MM format
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now, // potentially adding a timestamp util once the code works
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true,
  },
});

const Recipe = model('recipe', recipeSchema);

module.exports = Recipe;