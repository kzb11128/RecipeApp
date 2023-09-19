import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes, title }) => {
  if (!recipes.length) {
    return <h3>No Recipes Yet</h3>;
  }
  return (
    <div>
      <h2 className="text-5xl font-semibold text-center text-green-700 mb-10">{title}</h2>
      <div id="recipe-container" className="container content-center m-auto grid md:grid-cols-2 lg:grid-cols-3 w-11/12 m-3">
        {recipes && recipes.map((recipe) => (
          <div key={recipe._id}>
            <div className="h-84 w-fit text-sm 2xl:text-base text-gray-900 rounded-md shadow-md shadow-[#542745]/40 border border-gray-300 m-2.5 p-2.5 overflow-y-auto">
              <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl ">
                <h4 className="text-3xl font-semibold text-center text-green-700 underline">
                    <Link
                    className="btn btn-block btn-squared btn-light text-dark"
                    to={`/recipe/${recipe._id}`}
                    >
                    {recipe.recipename}
                    </Link>
                </h4>
                <ul className="w-full">
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                      Ingredients: {recipe.ingredients}
                    </li>
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                      Instructions: {recipe.instructions}
                    </li>
                    <li className="w-full border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                      Cook Time: {recipe.cookTime}
                    </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
);
};


export default RecipeList;