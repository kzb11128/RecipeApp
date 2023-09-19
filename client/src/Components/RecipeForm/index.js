import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_RECIPE } from '../../utils/mutations';


const RecipeForm = () => {
  const [recipename, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cookTime, setCookTime] = useState('');

  // Invoke `useMutation()` hook to return a Promise-based function and data about the ADD_PROFILE mutation
  const [createRecipe, { error }] = useMutation(CREATE_RECIPE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Since mutation function is async, wrap in a `try...catch` to catch any network errors from throwing due to a failed request.
    try {
      // Execute mutation and pass in defined parameter data as variables
      const { data } = await createRecipe({
        variables: { recipename, ingredients, instructions, cookTime },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div >
      <h3>Add your recipe to the list</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Add your recipe name..."
            value={recipename}
            className="form-input w-100"
            onChange={(event) => setRecipeName(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-9">
          <input
            placeholder="Add your ingredients..."
            value={ingredients}
            className="form-input w-100"
            onChange={(event) => setIngredients(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-9">
          <input
            placeholder="Add the instructions..."
            value={instructions}
            className="form-input w-100"
            onChange={(event) => setInstructions(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-9">
          <input
            placeholder="Add the cook time..."
            value={cookTime}
            className="form-input w-100"
            onChange={(event) => setCookTime(event.target.value)}
          />
        </div>


        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Add Recipe
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default RecipeForm;