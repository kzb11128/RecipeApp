const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({

  // recipe model here

});

const Recipe = model('recipe', recipeSchema);

module.exports = Recipe;