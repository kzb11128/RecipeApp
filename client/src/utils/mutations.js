import { gql } from '@apollo/client';

export const ADD_RECIPE = gql`
  mutation addRecipe ($recipename: String!, $ingredients: String!, $instructions: String!, $cookTime: Int!) {
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
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser (name: $name, email: $email, password: $password) {
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

// export const LOGIN_USER = gql`
//   mutation loginUser($username: String!, $password: String!) {
//     login(username: $username, password: $password) {
//       token
//       user {
//         _id
//         username
//         email
//         password
//       }
//     }
//   }
// `;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        password
      }
    }
  }
`;