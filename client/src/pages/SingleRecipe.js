import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPEBYID } from '../utils/queries';

const Recipe = () => {
  // Use `useParams()` to retrieve value of the route parameter `:recipeId`
  const { recipeId } = useParams();

  const { loading, data } = useQuery(QUERY_RECIPEBYID, {
    // pass URL parameter
    variables: { recipeId: recipeId },
  });

  const recipe = data?.recipe || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (

<>
  <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-green-700 underline">
            {recipe.recipename}
          </h1>
      <div className="mt-6">
          <ul className="w-full">
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
              Ingredients: {recipe.ingredients}
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
              Instructions: {recipe.instructions}
            </li>
            <li className="w-full border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
              Cook Time: {recipe.cookTime} minutes
            </li>
          </ul>
        </div>
    </div>
  </div>
</>
);
};

export default Recipe;