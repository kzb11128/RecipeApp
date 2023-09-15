const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('recipes');
    },
    user: async (parent, {userId} ) => {
      return User.findOne({ _id: userId }).populate('recipes');
    },
    recipes: async (parent, {userId} ) => {
      const params = userId ? { userId } : {};
      return Recipe.find(params).sort({ createdAt: -1 });
    },
    recipe: async (parent, {recipeId} ) => {
      return Recipe.findOne({ _id: recipeId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('recipes');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});

      if (!user) {
        throw new AuthenticationError(`No user found with this email address`);
      }

      const correctPw = await user.isCorrectPassword(password); 

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    
    addRecipe: async (parent, { recipename, ingredients, instructions, cookTime }, context) => {
      if (context.user) {
        const recipe = await Recipe.create({
          recipename,
          ingredients,
          instructions,
          cookTime,
          createdBy: context.user._id,
        });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { recipes: recipe._id } },
          { new: true }
        );
    
        return recipe;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },


    removeRecipe: async (parent, { recipeId }, context) => {
      if (context.user) {
        const recipe = await Recipe.findOneAndDelete({
          _id: recipeId,
          user: context.user._id,
        });
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },      
};

module.exports = resolvers;