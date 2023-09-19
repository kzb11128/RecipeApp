import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes, title }) => {
  if (!recipes.length) {
    return <h3>No Recipes Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>
        {recipes &&
          recipes.map((recipe) => (
            <div key={recipe._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/recipe/${recipe.id}`}
                >
                  {recipe.recipename}
                </Link>
                  
                  </h4>
                  <ul>
                  <li>
                    Ingredients: {recipe.ingredients}
                  </li>
                  <li>
                    Instructions: {recipe.instructions}
                  </li>
                  <li>
                    Cook Time: {recipe.cookTime}
                  </li>
                    </ul>
                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeList;