import { gql } from '@apollo/client';

export const QUERY_RECIPE = gql`
  query recipe {
    recipe {
      _id
      name
      ingredients
      instructions
      cookTime
    }
  }
`;
