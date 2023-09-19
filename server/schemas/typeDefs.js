const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedRecipe: [Recipe]
    recipes: [Recipe]
  }

  type Recipe {
    _id: ID
    recipename: String
    ingredients: String
    instructions: String
    cookTime: Int
    createdAt: String
    savedBy: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(_id: ID!): User
    recipes(recipename: String): [Recipe]
    recipe(_id: ID!): Recipe
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRecipe(recipename: String!, ingredients: String!, instructions: String!, cookTime: Int!): Recipe
    updateRecipe(_id: ID!, recipename: String, ingredients: String, instructions: String, cookTime: Int): Recipe
    removeRecipe(_id: ID!): Recipe
    saveRecipe(_id: ID!): User
  }
`;

module.exports = typeDefs;