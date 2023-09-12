const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    name: String
    email: String
    password: String
    recipes: [Recipe]!
  }

  type Recipe {
    _id: ID
    name: String
    ingredients: String
    instructions: String
    cookTime: Int
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(name: String!): User
    recipes(name: String): [Recipe]
    recipe(_id: ID!): Recipe
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRecipe(name: String!, ingredients: String!, instructions: String!, cookTime: Int!): Recipe
    removeRecipe(_id: ID!): Recipe
  }
`;

module.exports = typeDefs;