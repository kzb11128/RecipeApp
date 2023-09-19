
import { gql } from '@apollo/client';

export const CREATE_RECIPE = gql`
  mutation createRecipe ($recipename: String!, $ingredients: String!, $instructions: String!, $cookTime: String!) {
    createRecipe (recipename: $recipename, ingredients: $ingredients, instructions: $instructions, cookTime: $cookTime) {
    _id
    recipename
    ingredients
    instructions
    cookTime
    }
  }
`;

export const CREATE_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
    _id
    name
    email
    password
    }
  }
`;

export const DELETE_RECIPE = gql`
mutation($id: ID!) {
  deleteRecipe(id: $id) {
 recipename
 ingredients
 instructions
 cookTime
  }
}
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        name
        email
        password
      }
    }
  }
`;
