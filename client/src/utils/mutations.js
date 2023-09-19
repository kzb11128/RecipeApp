const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Mutation {
    login(username: String!, password: String!): AuthPayload
  }
`;

const resolvers = {
  Mutation: {
    loginmutation: (_, { username, password }) => {
      if (username === 'exampleUser' && password === 'password123') {
        const user = { id: '1', username: username };
        const token = 'your-authentication-token';

        return {
          token,
          user,
        };
      }

      throw new Error('Invalid credentials');
    },
  },
};

module.exports = { typeDefs, resolvers };
