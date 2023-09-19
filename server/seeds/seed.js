const db = require('../config/connection');
const { Recipe, User } = require('../models');
const recipeData = require('./recipeData.json');
const userData = require('./userData.json');


db.once('open', async () => {
  try {
    // Drop the entire database
    await db.dropDatabase();
    console.log('Database dropped.');

    // Seed the database with new data
    await Recipe.insertMany(recipeData);
    console.log('Recipes seeded successfully.');

    await User.insertMany(userData);
    console.log('Users seeded successfully.');


    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
});