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
    type: Number, 
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now, 
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true,
  },

  savedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Recipe = model('recipe', recipeSchema);

module.exports = Recipe;