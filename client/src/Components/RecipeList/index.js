import React from 'react';


export default function recipeList({ recipeData }) {
  return (
    <div className="container">
      <h1>Recipes:</h1>
      <ul className="list-group">
        {/* {recipeData.map((recipe) => (
          <li key={recipe.id}>
            {`${recipe.name} ${recipe.ingredients} ${recipe.instructions} ${recipe.cookTime}`}
          </li>
        ))} */}
      </ul>
    </div>
  );
}

