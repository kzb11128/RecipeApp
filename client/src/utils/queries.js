import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql`
  query allRecipes {
    recipes {
      _id
      recipename
    ingredients
    instructions
    cookTime
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      password
    }
  }
`;

export const QUERY_RECIPEBYID = gql`
    query recipebyid($id: ID!) {
  recipe(id: $id) {
    recipename
    instructions
    ingredients
    cookTime  
}
}
`;