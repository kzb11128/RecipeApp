import React from 'react';
import { QUERY_RECIPEBYID } from '../utils/queries';

const QUERY_RECIPEBYID = gql`
  query recipebyid($id: ID!) {
    recipe(id: $id) {
      recipename
      instructions
      ingredients
      cookTime  
    }
  }
`;

const RecipeDetailContainer = ({ recipeId }) => {
    const {data} = useQuery(QUERY_RECIPEBYID, {
      variables: { id: recipeId },
    });
  return (
    <div>
      <h2 className="text-emerald-500 text-2xl mb-2">{recipename}</h2>
      <p className="text-emerald-500 text-lg">Cook Time: {cookTime}</p>
      <h3 className="text-emerald-500 mt-4 text-lg">Ingredients</h3>
      <ul className="list-disc pl-6">
        {recipe.ingredients.map((ingredients, index) => (
          <li key={index} className="text-emerald-500">
            {ingredients}
          </li>
        ))}
      </ul>
      <h3 className="text-emerald-500 mt-4 text-lg">Instructions</h3>
      <p className="text-emerald-500">{instructions}</p>
    </div>
  );
};